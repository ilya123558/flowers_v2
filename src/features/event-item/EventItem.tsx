'use client'
import { Button } from "@/shared/button/Button";
import { ISelectItem } from "@/shared/select/Select";

export interface IEventItem {
  id: string;
  eventType: ISelectItem;
  eventDate: Date;
  description?: string;
  emotion: ISelectItem;
  includeServiceCost: boolean;
  minBudget: number;
  maxBudget: number;
  messenger: ISelectItem;
  phone: string;
}

interface IProps extends IEventItem {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const EventItem = ({
  id,
  eventType,
  eventDate,
  emotion,
  minBudget,
  maxBudget,
  messenger,
  phone,
  onEdit,
  onDelete
}: IProps) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU');
  };

  const formatBudget = (min: number, max: number) => {
    return `${min.toLocaleString('ru-RU')} - ${max.toLocaleString('ru-RU')}`;
  };

  return (
    <div className="p-[16px] rounded-[24px] bg-[#181818] text-[16px] leading-[134%] text-[#909191] flex flex-col gap-[16px]">
      <div className="">
        <p>Событие</p>
        <p className="font-bold text-[#D9D9D9] mt-[4px]">{eventType.title}</p>
      </div>
      <div className="">
        <p>Дата события</p>
        <p className="font-bold text-[#D9D9D9] mt-[4px]">{formatDate(eventDate)}</p>
      </div>
      <div className="">
        <p>Эмоция</p>
        <p className="font-bold text-[#D9D9D9] mt-[4px]">{emotion.title}</p>
      </div>
      <div className="">
        <p>Бюджет</p>
        <p className="font-bold text-[#D9D9D9] mt-[4px]">{formatBudget(minBudget, maxBudget)}</p>
      </div>
      <div className="">
        <p>Мессенджер</p>
        <p className="font-bold text-[#D9D9D9] mt-[4px]">{messenger.title} {phone}</p>
      </div>
      <div className="flex gap-[8px]">
        <Button onClick={() => onEdit?.(id)} className="w-[32px] aspect-square rounded-[10px] bg-[#3A3A3A] flex-center active:scale-95">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.60179 11.4286C2.6375 11.4286 2.67321 11.425 2.70893 11.4196L5.7125 10.8929C5.74822 10.8857 5.78214 10.8696 5.80714 10.8429L13.3768 3.27321C13.3933 3.25669 13.4065 3.23707 13.4154 3.21547C13.4244 3.19387 13.429 3.17071 13.429 3.14732C13.429 3.12393 13.4244 3.10078 13.4154 3.07917C13.4065 3.05757 13.3933 3.03795 13.3768 3.02143L10.4089 0.0517857C10.375 0.0178572 10.3304 0 10.2821 0C10.2339 0 10.1893 0.0178572 10.1554 0.0517857L2.58571 7.62143C2.55893 7.64822 2.54286 7.68036 2.53571 7.71607L2.00893 10.7196C1.99156 10.8153 1.99776 10.9138 2.02701 11.0065C2.05626 11.0992 2.10767 11.1834 2.17679 11.2518C2.29464 11.3661 2.44286 11.4286 2.60179 11.4286ZM3.80536 8.31429L10.2821 1.83929L11.5911 3.14821L5.11429 9.62322L3.52679 9.90357L3.80536 8.31429ZM13.7143 12.9286H0.571429C0.255357 12.9286 0 13.1839 0 13.5V14.1429C0 14.2214 0.0642857 14.2857 0.142857 14.2857H14.1429C14.2214 14.2857 14.2857 14.2214 14.2857 14.1429V13.5C14.2857 13.1839 14.0304 12.9286 13.7143 12.9286Z" fill="#B1B1B1"/>
          </svg>
        </Button>
        <Button onClick={() => onDelete?.(id)} className="w-[32px] aspect-square rounded-[10px] bg-[#3A3A3A] flex-center active:scale-95">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 2.25H9.5V1C9.5 0.448438 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.448438 2.5 1V2.25H0.5C0.223437 2.25 0 2.47344 0 2.75V3.25C0 3.31875 0.05625 3.375 0.125 3.375H1.06875L1.45469 11.5469C1.47969 12.0797 1.92031 12.5 2.45312 12.5H9.54688C10.0813 12.5 10.5203 12.0813 10.5453 11.5469L10.9312 3.375H11.875C11.9438 3.375 12 3.31875 12 3.25V2.75C12 2.47344 11.7766 2.25 11.5 2.25ZM8.375 2.25H3.625V1.125H8.375V2.25Z" fill="#ED8D88"/>
          </svg>
        </Button>
      </div>
    </div>
  );
};
