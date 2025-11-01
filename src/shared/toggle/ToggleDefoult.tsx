'use client'
import clsx from "clsx"

interface IProps {
  toggle: boolean
  setToggle: (toggle: boolean) => void
  w?: number
  h?: number
  activeColor?: string
  inactiveColor?: string
}

export const ToggleDefault = ({
  toggle,
  setToggle,
  w = 40,
  h = 22,
  activeColor = '#FFCC00',
  inactiveColor = '#BEBEBE',
}: IProps) => {
  const padding = h * 0.1
  const knobSize = h - padding * 2
  const knobShift = w - h

  return (
    <div
      onClick={() => setToggle(!toggle)}
      style={{
        width: w,
        height: h,
        padding: padding,
        backgroundColor: toggle ? activeColor : inactiveColor,
        boxShadow: '0px 2px 4px 0px #00230B33'
      }}
      className="relative rounded-full cursor-pointer flex items-center transition-colors duration-300"
    >
      <div
        className={clsx(
          'absolute rounded-full bg-white transition-all duration-300',
          toggle && `translate-x-[${knobShift}px]`
        )}
        style={{
          width: knobSize,
          height: knobSize,
          transform: toggle ? `translateX(${knobShift}px)` : 'translateX(0)',
          boxShadow: '0px 2px 4px 0px #00230B33'
        }}
      />
    </div>
  )
}
