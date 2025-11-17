'use client'
import { Button } from "@/shared/button/Button";
import { useState } from "react";
import clsx from "clsx";
import { Container } from "@/shared/container/Container";
import { CreateEventModal } from "@/features/create-event-modal/CreateEventModal";
import { EventsList } from "@/features/events-list/EventsList";
import { IEventItem } from "@/features/event-item/EventItem";

export const Events = () => {
  const [eventList, setEventList] = useState<IEventItem[]>([
    {
      id: '1',
      eventType: { title: 'День рождения мамы', value: 'birthday_mom' },
      eventDate: new Date(2025, 11, 3), // 3.12.2025
      description: 'Любит розовые оттенки и нежные букеты',
      emotion: { title: 'Благодарю', value: 'Благодарю' },
      includeServiceCost: false,
      minBudget: 5000,
      maxBudget: 8000,
      messenger: { title: 'Whatsapp', value: 'Whatsapp' },
      phone: '+7 (928) *** ** 01'
    },
    {
      id: '2',
      eventType: { title: '8 марта', value: '8_march' },
      eventDate: new Date(2025, 2, 8), // 8.03.2025
      description: 'Коллеге по работе',
      emotion: { title: 'Уважаю', value: 'Уважаю' },
      includeServiceCost: true,
      minBudget: 3000,
      maxBudget: 5000,
      messenger: { title: 'Telegram', value: 'Telegram' },
      phone: '+7 (999) *** ** 22'
    },
    {
      id: '3',
      eventType: { title: 'Годовщина свадьбы', value: 'wedding_anniversary' },
      eventDate: new Date(2025, 5, 15), // 15.06.2025
      description: 'Любит классические красные розы',
      emotion: { title: 'Люблю', value: 'Люблю' },
      includeServiceCost: false,
      minBudget: 10000,
      maxBudget: 15000,
      messenger: { title: 'Whatsapp', value: 'Whatsapp' },
      phone: '+7 (905) *** ** 33'
    }
  ])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditEvent = (id: string) => {
    console.log('Edit event:', id);
  };

  const handleDeleteEvent = (id: string) => {
    setEventList(eventList.filter(event => event.id !== id));
  };

  return (
    <>
      <Container className="roboto">
        {eventList.length !== 0
          ? (
              <div>
                <h4 className="lg:text-[24px] text-[16px] font-bold lg:mt-[40px] mt-[20px] text-[#C8C8C8]">События ({eventList.length})</h4>
                <p className="mt-[16px] text-[#8C8C8C] text-[16px] leading-[151%]">
                  За 5 дней до события мы свяжемся с вами в выбранном мессенджере и предложим несколько эксклюзивных вариантов, которые точно удивят адресата. Вы сможете сразу выбрать и оформить заказ — быстро, удобно и с гарантией свежести.
                </p>
                <EventsList
                  events={eventList}
                  onEdit={handleEditEvent}
                  onDelete={handleDeleteEvent}
                />
                <div className="flex justify-center mt-[32px]">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className={clsx("w-fit p-[12px] bg-[#4B4B4B] rounded-[10px] flex items-center justify-center gap-[10px] sm:active:scale-95 active:scale-[0.98]")}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.53753 1.57227H7.4661C7.37086 1.57227 7.32324 1.61988 7.32324 1.71512V7.32227H2.00223C1.90699 7.32227 1.85938 7.36988 1.85938 7.46512V8.53655C1.85938 8.63179 1.90699 8.67941 2.00223 8.67941H7.32324V14.2866C7.32324 14.3818 7.37086 14.4294 7.4661 14.4294H8.53753C8.63277 14.4294 8.68039 14.3818 8.68039 14.2866V8.67941H14.0022C14.0975 8.67941 14.1451 8.63179 14.1451 8.53655V7.46512C14.1451 7.36988 14.0975 7.32227 14.0022 7.32227H8.68039V1.71512C8.68039 1.61988 8.63277 1.57227 8.53753 1.57227Z" fill="#D9D9D9"/>
                    </svg>
                    <p className='text-[16px] leading-[151%] text-[#D9D9D9]'>Создать событие</p>
                  </Button>
                </div>
              </div>
            )
          : (
              <div className="w-full sm:mt-[60px] text-center flex justify-center">
                <div className="flex flex-col gap-[16px] mb-[24px] max-w-[684px]">
                  <h2 className="text-[24px] font-bold text-[#C8C8C8] leading-[100%]">
                    Создайте событие — мы подскажем идеальный букет
                  </h2>
                  <div className="flex flex-col items-center gap-[20px] leading-[151%] text-[16px] text-[#8C8C8C]">
                    <p className="">
                      Создайте событие — например, день рождения, юбилей или просто важный момент — и наши флористы заранее подберут для него идеальные букеты. Выберите дату, укажите эмоцию и добавьте комментарий — мы всё учтём.
                    </p>
                    <p>
                      За 5 дней до события мы свяжемся с вами в выбранном мессенджере и предложим несколько эксклюзивных вариантов, которые точно удивят адресата. Вы сможете сразу выбрать и оформить заказ — быстро, удобно и с гарантией свежести.
                    </p>
                    <p>
                      💐 Создайте событие и подарите незабываемые эмоции
                    </p>
                  </div>
                  <div className="flex justify-center mt-[10px]">
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className={clsx("w-fit p-[12px] bg-yellow rounded-[10px] flex items-center justify-center gap-[10px] sm:active:scale-95 active:scale-[0.98]")}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.53753 1.57227H7.4661C7.37086 1.57227 7.32324 1.61988 7.32324 1.71512V7.32227H2.00223C1.90699 7.32227 1.85938 7.36988 1.85938 7.46512V8.53655C1.85938 8.63179 1.90699 8.67941 2.00223 8.67941H7.32324V14.2866C7.32324 14.3818 7.37086 14.4294 7.4661 14.4294H8.53753C8.63277 14.4294 8.68039 14.3818 8.68039 14.2866V8.67941H14.0022C14.0975 8.67941 14.1451 8.63179 14.1451 8.53655V7.46512C14.1451 7.36988 14.0975 7.32227 14.0022 7.32227H8.68039V1.71512C8.68039 1.61988 8.63277 1.57227 8.53753 1.57227Z" fill="#252525"/>
                      </svg>
                      <p className='text-[16px] leading-[151%] text-[#404040]'>Создать событие</p>
                    </Button>
                  </div>
                </div>
              </div>
            )
        }
      </Container>

      <CreateEventModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </>
  );
};
