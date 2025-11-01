'use client'
import { useState, useEffect, useRef } from 'react'

interface TooltipProps {
  text: string
  children: React.ReactNode
}

export const Tooltip = ({ text, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleTouchOutside = (e: TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setVisible(false)
      }
    }
    document.addEventListener('touchstart', handleTouchOutside)
    return () => document.removeEventListener('touchstart', handleTouchOutside)
  }, [])

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      onClick={() => setVisible(prev => !prev)}
      className='relative'
    >
      <div className="flex justify-between gap-[8px]">
        <p className='text-[#D9D9D9] text-[16px]'>{children}</p>
        <div
          ref={ref}
          className="select-none focus:outline-none"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1348_6429)">
            <path d="M8 0C3.58214 0 0 3.58214 0 8C0 12.4179 3.58214 16 8 16C12.4179 16 16 12.4179 16 8C16 3.58214 12.4179 0 8 0ZM8 14.6429C4.33214 14.6429 1.35714 11.6679 1.35714 8C1.35714 4.33214 4.33214 1.35714 8 1.35714C11.6679 1.35714 14.6429 4.33214 14.6429 8C14.6429 11.6679 11.6679 14.6429 8 14.6429Z" fill="#C6C6C5"/>
            <path d="M7.14258 4.85714C7.14258 5.08447 7.23288 5.30249 7.39363 5.46323C7.55438 5.62398 7.77239 5.71429 7.99972 5.71429C8.22705 5.71429 8.44507 5.62398 8.60581 5.46323C8.76656 5.30249 8.85686 5.08447 8.85686 4.85714C8.85686 4.62981 8.76656 4.4118 8.60581 4.25105C8.44507 4.09031 8.22705 4 7.99972 4C7.77239 4 7.55438 4.09031 7.39363 4.25105C7.23288 4.4118 7.14258 4.62981 7.14258 4.85714ZM8.42829 6.85714H7.57115C7.49258 6.85714 7.42829 6.92143 7.42829 7V11.8571C7.42829 11.9357 7.49258 12 7.57115 12H8.42829C8.50686 12 8.57115 11.9357 8.57115 11.8571V7C8.57115 6.92143 8.50686 6.85714 8.42829 6.85714Z" fill="#C6C6C5"/>
            </g>
            <defs>
            <clipPath id="clip0_1348_6429">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          {visible && (
            <div className="absolute right-[-7px] top-[30px] translate-y-[-35%]">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="14.3125" y="-1.24219" width="22" height="22" rx="3" transform="rotate(45 14.3125 -1.24219)" fill="#2B2A24"/>
              </svg>
            </div>
          )}
        </div>
      </div>

      {visible && (
        <div className="absolute z-50 w-max max-w-[305px] p-[16px] bg-[#2B2A24] rounded-[8px] left-0 top-[30px]">
          <p className='text-[#B9BBBF] text-[16px]'>{text}</p>
        </div>
      )}
    </div>
  )
}
