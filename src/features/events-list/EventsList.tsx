'use client'
import { EventItem, IEventItem } from "@/features/event-item/EventItem";

interface IProps {
  events: IEventItem[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export const EventsList = ({ events, onEdit, onDelete }: IProps) => {
  return (
    <div className="sm:grid flex flex-col lg:grid-cols-3 grid-cols-2 sm:gap-[32px] gap-[16px] mt-[16px]">
      {events.map((event) => (
        <EventItem
          key={event.id}
          {...event}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
