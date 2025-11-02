'use client'
import { TClassName } from "@/utils/types/main"
import clsx from "clsx"
import { useCallback } from "react"

type TProps = TClassName<{
  label?: string
  value: string
  placeholder?: string
  setValue: (value: string) => void
  classNameText?: string
}>

export const InputPhone = ({
  setValue,
  value,
  className,
  label,
  classNameText,
  placeholder = "+7 (___) ___ __ __",
}: TProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let input = e.target.value.replace(/\D/g, "")
      if (input.startsWith("8")) input = "7" + input.slice(1)
      if (input.length > 11) input = input.slice(0, 11)

      let formatted = ""
      if (input.length > 0) formatted = "+7"
      if (input.length > 1) formatted += " (" + input.slice(1, 4)
      if (input.length >= 5) formatted += ") " + input.slice(4, 7)
      if (input.length >= 8) formatted += " " + input.slice(7, 9)
      if (input.length >= 10) formatted += " " + input.slice(9, 11)

      setValue(formatted)
    },
    [setValue]
  )

  const handleFocus = useCallback(() => {
    if (!value) setValue("+7 ")
  }, [value, setValue])

  return (
    <div className={clsx("w-full", className)}>
      {label && (
        <p
          className={clsx(
            "text-[#8C8C8C] text-[16px] mb-[4px] leading-[151%]",
            classNameText
          )}
        >
          {label}
        </p>
      )}
      <div className="relative z-10">
        <input
          placeholder={placeholder}
          value={value}
          onFocus={handleFocus}
          onChange={handleChange}
          maxLength={18}
          inputMode="tel"
          className="w-full flex justify-between items-center bg-[#111111] p-[16px_17.5px] rounded-[11px] relative focus:outline-none text-[14px]"
        />
      </div>
    </div>
  )
}
