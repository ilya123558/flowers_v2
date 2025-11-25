'use client'
import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import clsx from "clsx";
import { Button } from "../button/Button";
import { useEffect, useRef, useState } from "react";

export interface ISelectItem {
  title: string
  value: string
}

type TProps = TClassNameWithChildrenAndProps<{
  classNameText?: string
  selectList: ISelectItem[]
  activeItem: ISelectItem
  bgColor?: string
  handleChange: (selectList: ISelectItem) => void
}>

export const Select = ({selectList, children, activeItem, handleChange, className, bgColor, classNameText}: TProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (item: ISelectItem) => {
    handleChange(item)

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      timeoutRef.current = null;
    }, 300);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
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
    <div ref={selectRef} className={clsx('w-full', className)}>
      {children && <p className={clsx("text-secondary text-[16px] mb-[4px]", classNameText)}>{children}</p>}
      <div className="relative z-10 w-full">
        <Button 
          onClick={handleClick} 
          className={`w-full flex justify-between items-center bg-[#111111] sm:p-[16px_17.5px] p-[14px_17.5px] rounded-[11px] relative`}
        >
          <p className="text-[14px] text-white">{activeItem?.title || ''}</p>
          <div className={`transition-all ${isOpen && 'rotate-180'}`}>
            {/* <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.707031 0.707031L10.207 10.207L19.707 0.707031" stroke="#ADADAD" strokeWidth="2"/>
            </svg> */}
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.710938 0.707031L6.71094 6.70703L12.7109 0.707031" stroke="#797979" strokeWidth="2"/>
            </svg>
          </div>
        </Button>
        <ul
          className={clsx(
            "w-full mt-[10px] flex flex-col top-[100%] absolute bg-[#111111] left-0 border-[1px]  border-border-gray rounded-[11px] overflow-hidden transition-all",
            !isOpen && "opacity-0 pointer-events-none top-[20%]",
          )}
        >
          {selectList.map((item, index, arr) => (
            <li 
              onClick={() => onChange(item)} 
              className={clsx(
                'flex items-center p-[10px_16px] border-border-gray cursor-pointer', 
                activeItem.value === item.value && 'bg-[#ffffff17]', 
                index !== arr.length - 1 && 'border-b-[1px]'
              )}
            >
              <p className="text-[14px] text-white text-start">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};