'use client'
import { BasketServicesItem, IAdditionalServicesItem } from "@/shared/basket-services-item/BasketServicesItem"
import { useState } from "react"
import { DraggableMergeListWrapper } from "@/shared/wrappers/DraggableMergeListWrapper"

const initialServices: IAdditionalServicesItem[] = [
  {
    items: [{ id: 'item-1', title: 'Солнечный день', size: { title: 'XS', price: 2390 } }],
    premium_delivery: true,
    subscribe: { term: "3 мес", frequency: "Каждую неделю", price: 50575 },
  },
  {
    items: [{ id: 'item-2', title: 'Зимний вечер', size: { title: 'M', price: 2590 } }],
    premium_delivery: false,
    subscribe: { term: "6 мес", frequency: "Каждые 2 недели", price: 80575 },
  },
  {
    items: [{ id: 'item-3', title: 'Тёплое утро', size: { title: 'L', price: 3190 } }],
    premium_delivery: false,
    subscribe: { term: "1 мес", frequency: "Каждую неделю", price: 20575 },
  },
]

export const BasketServicesList = () => {
  const [servicesList, setServicesList] = useState<IAdditionalServicesItem[]>(initialServices)

  const handleDeleteItem = (id: string) => {
    const result = servicesList.map(service => {
      const newList = service.items.filter(item => item.id !== id)
      
      if(!newList || newList.length === 0) return []

      return {...service, items: newList}
    })
    setServicesList(result.flat())
  }

  return (
    <div className="">
      {servicesList.length === 0
        ? <div className="h-[200px] flex-center"><p className="text-[22px] text-light-gray">Корзина пустая</p></div>
        : (
          <DraggableMergeListWrapper
            items={servicesList}
            onChange={setServicesList}
            renderItem={(service, isTarget) => (
              <BasketServicesItem {...service} isTarget={isTarget} handleDeleteItem={handleDeleteItem} />
            )}
          />
        )
      }
    </div>
  )
}
