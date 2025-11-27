'use client'
import { BasketServicesItem, IAdditionalServicesItem } from "@/shared/basket-services-item/BasketServicesItem"
import { DraggableMergeListWrapper } from "@/shared/wrappers/DraggableMergeListWrapper"
import { NotificationSnackbar } from "@/shared/notification-snackbar/NotificationSnackbar"
import { useState } from "react"

interface IProps {
  servicesList: IAdditionalServicesItem[]
  setServicesList: (servicesList: IAdditionalServicesItem[]) => void
  handleDeleteItem: (id: string) => void
  isOrder?: boolean
}

export const BasketServicesList = ({servicesList, setServicesList, handleDeleteItem, isOrder}: IProps) => {
  const [showSuccessNotification, setShowSuccessNotification] = useState(false)

  const handleMerge = () => {
    setShowSuccessNotification(true)
  }

  return (
    <div className="">
      <NotificationSnackbar
        open={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        message="Вы успешно объединили товары"
        type="success"
        autoHideDuration={2000}
      />
      {servicesList.length === 0
        ? <div className="h-[200px] flex-center"><p className="text-[22px] text-light-gray">Корзина пустая</p></div>
        : (
          <DraggableMergeListWrapper
            items={servicesList}
            onChange={setServicesList}
            onMerge={handleMerge}
            renderItem={(service, isTarget) => (
              <BasketServicesItem {...service} isTarget={isTarget} handleDeleteItem={handleDeleteItem} isOrder={isOrder}/>
            )}
          />
        )
      }
    </div>
  )
}
