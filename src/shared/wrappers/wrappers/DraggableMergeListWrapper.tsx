'use client'
import { useMemo, useState } from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  type CollisionDetection,
} from "@dnd-kit/core"
import { motion } from "framer-motion"

/* ---------- Props ---------- */
interface DraggableMergeListProps<T> {
  items: T[]
  onChange: (newList: T[]) => void
  renderItem: (item: T, isTarget: boolean) => React.ReactNode
}

/* ---------- Main Component ---------- */
export const DraggableMergeListWrapper = <T,>({
  items,
  onChange,
  renderItem,
}: DraggableMergeListProps<T>) => {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [scaleRatio, setScaleRatio] = useState(1)
  const [opacityRatio, setOpacityRatio] = useState(1)
  const [returnToOrigin, setReturnToOrigin] = useState(false)

  // ✅ Добавлены оба сенсора — Pointer и Touch
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 6 } })
  )

  // ---------- Collision detection ----------
  const collisionDetection: CollisionDetection = useMemo(() => {
    return ({ active, droppableContainers, collisionRect }) => {
      if (!collisionRect) return []
      const aCenterX = collisionRect.left + collisionRect.width / 2
      const aCenterY = collisionRect.top + collisionRect.height / 4
      let best: { id: string } | null = null
      for (const c of droppableContainers) {
        if (c.id === active.id) continue
        const r = c.rect.current
        if (!r) continue
        const inside =
          aCenterX >= r.left &&
          aCenterX <= r.right &&
          aCenterY >= r.top &&
          aCenterY <= r.bottom
        if (inside) best = { id: String(c.id) }
      }
      return best ? [{ id: best.id }] : []
    }
  }, [])

  // ---------- Drag start ----------
  const handleDragStart = (e: any) => {
    document.body.style.cursor = 'grabbing'
    document.body.style.touchAction = 'none' // 🔧 нужно для Safari / iOS
    setActiveId(e.active.id)
    setHoveredId(null)
    setScaleRatio(1)
    setOpacityRatio(1)
    setReturnToOrigin(false)
  }

  // ---------- Drag over ----------
  const handleDragOver = (event: any) => {
    const { active, over } = event
    if (!active) return
    if (over && over.id !== active.id) setHoveredId(String(over.id))
    else setHoveredId(null)

    const activeRect = event.active.rect.current?.translated ?? event.active.rect.current
    const overRect = event.over?.rect
    if (!activeRect || !overRect) return setScaleRatio(1), setOpacityRatio(1)

    const ax = activeRect.left + activeRect.width / 2
    const ay = activeRect.top + activeRect.height / 2
    const bx = overRect.left + overRect.width / 2
    const by = overRect.top + overRect.height / 2
    const dx = ax - bx
    const dy = ay - by
    const dist = Math.sqrt(dx * dx + dy * dy)
    const maxDist = Math.sqrt(overRect.width ** 2 + overRect.height ** 2)
    const proximity = Math.max(0, 1 - dist / maxDist)
    const scale = 1 - proximity * 0.6
    const opacity = 1 - proximity * 0.6
    setScaleRatio(scale)
    setOpacityRatio(opacity)
  }

  // ---------- Drag end ----------
  const handleDragEnd = (e: DragEndEvent) => {
    document.body.style.cursor = 'default'
    document.body.style.touchAction = 'auto' // 🔧 возвращаем скролл
    const { active, over } = e
    setHoveredId(null)

    if (!over || active.id === over.id) {
      setReturnToOrigin(true)
      setTimeout(() => {
        setActiveId(null)
        setReturnToOrigin(false)
      }, 250)
      return
    }

    const from = Number(active.id)
    const to = Number(over.id)
    if (Number.isNaN(from) || Number.isNaN(to) || from === to) {
      setActiveId(null)
      return
    }

    const next = [...items]
    const dragged = next[from] as any
    const target = next[to] as any

    if (dragged?.items && target?.items) {
      next[to] = { ...target, items: [...target.items, ...dragged.items] }
      next.splice(from, 1)
    } else {
      const temp = next[from]
      next[from] = next[to]
      next[to] = temp
    }

    onChange(next)
    setActiveId(null)
  }

  if (items.length <= 1)
    return <>{renderItem(items[0], false)}</>

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-[14px] select-none touch-manipulation">
        {items.map((item, index) => {
          const id = index.toString()
          return (
            <DroppableCard
              key={id}
              id={id}
              disabled={activeId === id}
              isTarget={hoveredId === id}
            >
              <DraggableCard
                id={id}
                isActive={activeId === id}
                customScale={activeId === id ? scaleRatio : 1}
                customOpacity={activeId === id ? opacityRatio : 1}
                returnToOrigin={returnToOrigin && activeId === id}
              >
                {renderItem(item, hoveredId === id)}
              </DraggableCard>
            </DroppableCard>
          )
        })}
      </div>

      <DragOverlay dropAnimation={null}>
        {activeId !== null && items[Number(activeId)] && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: scaleRatio, opacity: opacityRatio }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          >
            {renderItem(items[Number(activeId)], false)}
          </motion.div>
        )}
      </DragOverlay>
    </DndContext>
  )
}

/* ---------- Internal: Draggable ---------- */
const DraggableCard = ({
  id,
  children,
  isActive,
  customScale = 1,
  customOpacity = 1,
  returnToOrigin = false,
}: {
  id: string
  children: React.ReactNode
  isActive: boolean
  customScale?: number
  customOpacity?: number
  returnToOrigin?: boolean
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id })
  const placeholderStyles =
    isActive && !returnToOrigin
      ? { opacity: 0, visibility: 'hidden' as const }
      : {}
  const draggingStyles = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined

  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...draggingStyles,
        ...placeholderStyles,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none', // 🔧 предотвращает залипание при скролле
      }}
      animate={
        isDragging
          ? { scale: customScale, opacity: customOpacity }
          : returnToOrigin
          ? { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 320, damping: 25 } }
          : { scale: 1, opacity: 1 }
      }
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Internal: Droppable ---------- */
const DroppableCard = ({
  id,
  disabled,
  children,
  isTarget,
}: {
  id: string
  disabled?: boolean
  children: React.ReactNode
  isTarget?: boolean
}) => {
  const { setNodeRef } = useDroppable({ id, disabled })
  return (
    <motion.div
      ref={setNodeRef}
      animate={{
        scale: isTarget ? 1.03 : 1,
        opacity: isTarget ? 0.95 : 1,
      }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
