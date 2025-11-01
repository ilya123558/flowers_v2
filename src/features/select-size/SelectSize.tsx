'use client'
import { Button } from "@/shared/button/Button";
import { BoxWrapper } from "@/shared/wrappers/BoxWrapper";
import { TClassName } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassName<{
  activeSizeIndex: number
  setActiveSizeIndex: (activeSizeIndex: number) => void
  sizesList: string[]
}>

export const SelectSize = ({sizesList, className, activeSizeIndex, setActiveSizeIndex}: TProps) => {
  return (
    <ul className={clsx("mt-[8px] flex gap-[8px]", className)}>
      {sizesList.map((size, index) => (
        <li key={index}>
          <Button onClick={() => setActiveSizeIndex(index)} className="active:scale-95">
            <BoxWrapper className={clsx("p-[9.5px_10px] w-fit flex gap-[4px] items-center border-[1px] border-transparent transition-all", activeSizeIndex === index && "!border-yellow")}>
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