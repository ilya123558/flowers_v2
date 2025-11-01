import { PropsWithChildren } from "react"

export type TClassName<T> = {
  className?: string
} & T

export type TClassNameWithChildren = TClassName<PropsWithChildren>
export type TClassNameWithChildrenAndProps<T> = TClassName<PropsWithChildren> & T