'use client'
import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import clsx from "clsx";
import { CSSProperties } from "react";

type IProps = TClassNameWithChildrenAndProps<{
  onClick: () => void
  style?: CSSProperties
}>

export const Button = ({onClick, children, className, style}: IProps) => {
  return (
    <button style={style} onClick={onClick} className={clsx('cursor-pointer transition-all will-change-transform', className)}>
      {children}
    </button>
  );
};