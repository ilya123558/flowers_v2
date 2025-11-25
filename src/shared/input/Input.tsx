'use client'
import { TClassName } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassName<{
  label?: string
  value: string
  placeholder: string
  setValue: (value: string) => void
  classNameText?: string
  classNameInput?: string
}>

export const Input = ({setValue, value, className, label, classNameText, placeholder, classNameInput}: TProps) => {
  return (
    <div className={clsx('w-full', className)}>
      {label && <p className={clsx("text-[#8C8C8C] text-[16px] mb-[4px] leading-[151%]", classNameText)}>{label}</p>}
      <div className="relative">
        <input 
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)} 
          className={clsx("w-full flex justify-between items-center bg-[#111111] sm:p-[16px_17.5px] p-[14px_17.5px] rounded-[11px] relative focus:outline-none text-[14px]", classNameInput)}
        />
      </div>
    </div>
  );
};