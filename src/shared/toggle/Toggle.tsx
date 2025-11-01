'use client'
import clsx from "clsx";
import { Button } from "../button/Button";
import { TClassName } from "@/utils/types/main";

type TProps = TClassName<{
  isToggle: boolean
  setIsToggle?: (isToggle: boolean) => void
}>

export const Toggle = ({isToggle, setIsToggle, className}: TProps) => {
  return (
    <Button onClick={() => setIsToggle?.(!isToggle)} className={clsx("active:scale-95", className)}>
      <div className="relative w-[16px] aspect-square border-[1px] border-white rounded-full">
        <div className={clsx("w-[70%] aspect-square absolute top-[15%] left-[15%] rounded-full bg-yellow transition-all", !isToggle && "opacity-0")}/>
      </div>
    </Button>
  );
};