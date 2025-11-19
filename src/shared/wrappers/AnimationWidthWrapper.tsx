'use client'
import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassNameWithChildrenAndProps<{
  isOpen: boolean
  maxWidth?: number
  withoutOverflowHidden?: boolean
}>

export const AnimationWidthWrapper = ({
  children,
  className,
  isOpen,
  maxWidth,
  withoutOverflowHidden,
}: TProps) => {
  const cap = typeof maxWidth === 'number' ? maxWidth : 1000;

  return (
    <div
      style={{
        maxWidth: isOpen ? `${cap}px` : '0px',
      }}
      className={clsx(
        !withoutOverflowHidden && 'overflow-hidden',
        'transition-all duration-500',
        !isOpen && 'opacity-0 pointer-events-none',
        className
      )}
    >
      {children}
    </div>
  );
};
