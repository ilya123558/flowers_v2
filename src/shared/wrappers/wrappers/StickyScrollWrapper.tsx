'use client'

import { motion, AnimatePresence } from "framer-motion"
import { Container } from "../container/Container"

type TProps = {
  children: React.ReactNode
  isOpen: boolean           // ← новое
  offset?: number
  className?: string
  bgClass?: string
  withoutContainer?: boolean
}

export const StickyScrollWrapper = ({
  children,
  isOpen,
  offset = 100,
  className,
  bgClass = "bg-secondary-bg",
  withoutContainer
}: TProps) => {

  return (
    <div className={className}>

      <motion.div
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="fixed"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              position: "fixed",
              top: offset,
              left: 0,
              width: "100%",
              zIndex: 50,
            }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={bgClass}
          >
            {!withoutContainer ? (
              <Container>{children}</Container>
            ) : (
              children
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
