import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container"

export const HomeEventsInfo = () => {
  return (
    <div className="bg-secondary-bg pt-[20px] relative z-0 mt-[-1px]">
      {/* <div 
        style={{background: 'linear-gradient(180deg, rgba(115, 115, 115, 0) 20.65%, rgba(0,0,0, 0.7) 64.97%)'}}
        className="w-full absolute left-0 bottom-0 aspect-[402/268] z-[-1]"
      /> */}
      <Container>
        <div className="flex flex-col gap-[4px] text-[#EBEBEB] roboto-flex">
          <p className="text-[32px] leading-[100%] font-extrabold uppercase">События</p>
          <p className="text-[16px] leading-[104%]">заранее напомним и подберём букет к важной дате</p>
        </div>
        <div className="w-full mt-[40px]">
          <img src="/images/home/event.png" alt="event-preview" width={800} height={400} className="min-w-full"/>
        </div>
        <div className="mt-[45px] text-[18px] border-[1px] border-[#727272] rounded-[19px] bg-[#000000CC] p-[19px_9px_22px_18px] border-dashed">
          <p className="leading-[104%]">
            Выберите дату, эмоцию и комментарий
            и мы подготовим варианты.
          </p>
          <p className="leading-[104%] mt-[20px]">
            За 5 дней до события напишем в Telegram или WhatsApp и пришлём эксклюзивные букеты
            на выбор и оплату.
          </p>
        </div>
        <Button onClick={() => {}} className="mt-[31px] roboto flex-center w-full h-[57px] bg-yellow rounded-[10px] active:scale-[0.98] mb-[-1px]">
          <p className="text-[18px] font-semibold leading-[100%] text-black">Создать новое событие</p>
        </Button>
      </Container>
    </div>
  );
};