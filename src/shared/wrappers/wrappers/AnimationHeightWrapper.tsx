'use client'
import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassNameWithChildrenAndProps<{
  isOpen: boolean
  maxHeight?: number
  withoutOverflowHidden?: boolean
}>

export const AnimationHeightWrapper = ({
  children,
  className,
  isOpen,
  maxHeight,
  withoutOverflowHidden,
}: TProps) => {
  const cap = typeof maxHeight === 'number' ? maxHeight : 1000;

  return (
    <div
      style={{
        maxHeight: isOpen ? `${cap}px` : '0px',
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
