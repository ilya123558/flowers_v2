'use client'
import { BasketServicesItem, IAdditionalServicesItem } from "@/shared/basket-services-item/BasketServicesItem"
import { DraggableMergeListWrapper } from "@/shared/wrappers/DraggableMergeListWrapper"

interface IProps {
  servicesList: IAdditionalServicesItem[]
  setServicesList: (servicesList: IAdditionalServicesItem[]) => void
  handleDeleteItem: (id: string) => void
  isOrder?: boolean
} 

export const BasketServicesList = ({servicesList, setServicesList, handleDeleteItem, isOrder}: IProps) => {
  return (
    <div className="">
      {servicesList.length === 0
        ? <div className="h-[200px] flex-center"><p className="text-[22px] text-light-gray">Корзина пустая</p></div>
        : (
          <DraggableMergeListWrapper
            items={servicesList}
            onChange={setServicesList}
            renderItem={(service, isTarget) => (
              <BasketServicesItem {...service} isTarget={isTarget} handleDeleteItem={handleDeleteItem} isOrder={isOrder}/>
            )}
          />
        )
      }
    </div>
  )
}
