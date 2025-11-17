import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container"

export const HomeEventsInfo = () => {
  return (
    <div className="bg-secondary-bg pt-[20px] relative z-0">
      <div 
        style={{background: 'linear-gradient(180deg, rgba(115, 115, 115, 0) 20.65%, rgba(0,0,0, 0.7) 64.97%)'}}
        className="w-full absolute left-0 bottom-0 aspect-[402/268] z-[-1]"
      />
      <Container>
        <div className="flex flex-col items-center gap-[4px] text-center text-[#EBEBEB]">
          <p className="text-[50px] leading-[100%] font-extrabold">События</p>
          <p className="max-w-[230px] text-[18px] leading-[100%]">заранее напомним и подберём букет к важной дате</p>
        </div>
        <div className="w-full mt-[22px]">
          <img src="/images/home/event.png" alt="event-preview" width={800} height={400} className="min-w-full"/>
        </div>
        <div className="mt-[45px]">
          <p className="text-[16px] leading-[104%] text-[#E4E4E4]">
            Выберите дату, эмоцию и комментарий
            и мы подготовим варианты.
          </p>
          <p className="text-[16px] leading-[104%] text-[#E4E4E4] mt-[20px]">
            За 5 дней до события напишем в Telegram или WhatsApp и пришлём эксклюзивные букеты
            на выбор и оплату.
          </p>
        </div>
        <Button onClick={() => {}} className="mt-[31px] roboto flex-center w-full h-[57px] bg-yellow rounded-[10px] active:scale-[0.98] mb-[43px]">
          <p className="text-[18px] font-semibold leading-[100%] text-black">Создать новое событие</p>
        </Button>
      </Container>
    </div>
  );
};