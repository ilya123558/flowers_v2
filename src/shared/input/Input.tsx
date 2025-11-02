'use client'
import { TClassName } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassName<{
  label?: string
  value: string
  placeholder: string
  setValue: (value: string) => void
  classNameText?: string
}>

export const Input = ({setValue, value, className, label, classNameText, placeholder}: TProps) => {
  return (
    <div className={clsx('w-full', className)}>
      {label && <p className={clsx("text-[#8C8C8C] text-[16px] mb-[4px] leading-[151%]", classNameText)}>{label}</p>}
      <div className="relative z-10">
        <input 
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)} 
          className="w-full flex justify-between items-center bg-[#111111] p-[16px_17.5px] rounded-[11px] relative focus:outline-none text-[14px] "
        />
      </div>
    </div>
  );
};