import { Container } from "@/shared/container/Container";
import { formatPrice } from "@/utils/libs/formatPrice";
import { BasketContant } from "@/widgets/basket-contant/BasketContant";
import { OrderDetails } from "@/widgets/order-details/OrderDetails";

export default function Page() {
  return (
    <div className="mt-[24px] roboto">
      <Container>
        <h4 className="text-[24px] font-bold text-[#C8C8C8] leading-[100%]">Оформление заказа</h4>
        <div className="lg:grid flex flex-col grid-cols-12 gap-[40px] sm:mb-[240px] mb-[50px] mt-[16px]">
          <OrderDetails />
          <div className="col-span-5 h-fit">
            <BasketContant isOrder />
            <div className="flex justify-between leading-[151%] text-[#D9D9D9]">
              <p className="text-[16px] font-medium">Итого за весь заказ</p>
              <p className="text-[22px]">{formatPrice(61655)} ₽</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}