'use client'
import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import clsx from "clsx";
import { Button } from "../button/Button";
import { Calendar } from "../calendar/Calendar";
import { format } from "date-fns/format";
import { ru } from "date-fns/locale/ru";
import { useEffect, useRef, useState } from "react";

type TProps = TClassNameWithChildrenAndProps<{
  classNameText?: string
  value: Date | undefined
  onChange: (date: Date | undefined) => void
}>

export const DatePicker = ({children, value, onChange, className, classNameText}: TProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const pickerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={pickerRef} className={clsx('w-full', className)}>
      {children && <p className={clsx("text-secondary text-[16px] mb-[4px]", classNameText)}>{children}</p>}
      <div className="relative">
        <Button
          onClick={handleClick}
          className="w-full flex justify-between items-center bg-[#111111] sm:p-[16px_17.5px] p-[14px_17.5px] rounded-[11px] relative"
        >
          <p className="text-[14px] text-white">
            {value ? format(value, 'd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
          </p>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2222 1.63636H12.4444V0.818182C12.4444 0.366273 12.0781 0 11.6296 0C11.1811 0 10.8148 0.366273 10.8148 0.818182V1.63636H5.18519V0.818182C5.18519 0.366273 4.81892 0 4.37037 0C3.92182 0 3.55556 0.366273 3.55556 0.818182V1.63636H1.77778C0.8 1.63636 0 2.43636 0 3.40909V16.2273C0 17.2 0.8 18 1.77778 18H14.2222C15.2 18 16 17.2 16 16.2273V3.40909C16 2.43636 15.2 1.63636 14.2222 1.63636ZM14.2222 16.2273H1.77778V6.54545H14.2222V16.2273Z" fill="#797979"/>
          </svg>
        </Button>
        <div
          className={clsx(
            "absolute top-[100%] mt-[10px] left-0 rounded-[11px] overflow-hidden transition-all z-20",
            !isOpen && "opacity-0 pointer-events-none top-[20%]",
          )}
        >
          <Calendar
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setIsOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
