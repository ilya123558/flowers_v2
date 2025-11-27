'use client'
import { Button } from "@/shared/button/Button";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { sizesList } from "@/utils/const/main";
import { TClassName } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassName<{
  activeSizeIndex: number
  setActiveSizeIndex: (activeSizeIndex: number) => void
}>

export const SelectSize = ({className, activeSizeIndex, setActiveSizeIndex}: TProps) => {
  return (
    <ul className={clsx("mt-[8px] flex sm:gap-[8px] gap-[11px] sm:overflow-x-scroll", className)}>
      {sizesList.slice(0,3).map((size, index) => (
        <li key={index} className="sm:w-fit w-full">
          <Button onClick={() => setActiveSizeIndex(index)} className="active:scale-95 sm:w-fit w-full">
            <BoxWrapper className={clsx("sm:p-[9.5px_10px] p-[13.5px_26px] sm:w-fit w-full flex gap-[4px] items-center justify-center border-[1px] border-transparent transition-all", activeSizeIndex === index && "!border-yellow")}>
              <div className="relative w-[16px] aspect-square border-[1px] border-white rounded-full">
                <div className={clsx("w-[70%] aspect-square absolute top-[15%] left-[15%] rounded-full bg-yellow transition-all", activeSizeIndex !== index && "opacity-0")}/>
              </div>
              <p className="text-title-gray text-[14px] font-medium uppercase">{size}</p>
            </BoxWrapper>
          </Button>
        </li>
      ))}
    </ul>
  );
};