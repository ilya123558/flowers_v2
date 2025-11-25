import { Button } from "@/shared/button/Button";
import { Container } from "@/shared/container/Container"
import { SmHidden } from "@/shared/wrappers/SizeHidden";
import { SmShow } from "@/shared/wrappers/SizeShow";

export const HomeEventsInfo = () => {
  return (
    <div className="sm:bg-transparent bg-secondary-bg pt-[20px] relative z-0 mt-[-1px]">
      <SmHidden>
        <div className="relative h-fit mt-[90px]">
          <div className="absolute w-[50%] bottom-0 left-0 h-[90%] rotate-180 z-[-1]">
            <img src="/images/home/events-bg.png" alt="events-phone-preview" className="h-full"/>
          </div>
          <div 
            style={{background: 'linear-gradient(90deg, #000000 78.86%, rgba(1, 1, 1, 0) 98.23%)'}} 
            className="absolute w-[60%] right-0 top-0 h-full rotate-180 z-[-1]"
          />
          <Container>
            <div className="flex justify-between items-center">
              <img src="/images/home/events-phone-preview.png" alt="events-phone-preview" className="aspect-[1600/2100] w-[416px]"/>
              <div className="w-[631px] text-[#EBEBEB]">
                <h4 className="text-[55px] leading-[100%] font-extrabold">События</h4>
                <p className="text-[45px] mt-[4px] leading-[100%] font-normal">важные даты под контролем</p>
                <p className="text-[18px] mt-[40px] font-normal leading-[104%] text-[#E4E4E4]">Выберите дату, укажите эмоцию и комментарий — наши флористы подберут лучшие букеты для вашего события.</p>
                <p className="text-[18px] mt-[20px] font-normal leading-[104%] text-[#E4E4E4]">За 5 дней до даты мы свяжемся с вами в выбранном мессенджере (Telegram или WhatsApp) и предложим эксклюзивные варианты, которые можно сразу выбрать и оплатить.</p>
                <Button onClick={() => {}} className="mt-[40px] p-[17.3px_26px] roboto rounded-[11px] bg-[#E3006B] active:scale-95">
                  <p className="text-[18.4px] text-white font-bold">Создать новое событие</p>
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </SmHidden>
      <SmShow>
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
      </SmShow>
    </div>
  );
};