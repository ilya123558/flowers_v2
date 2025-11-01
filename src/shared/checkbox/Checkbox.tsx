import { TClassName, TClassNameWithChildrenAndProps } from "@/utils/types/main";
import { Button } from "../button/Button";
import clsx from "clsx";

type TProps = TClassNameWithChildrenAndProps<{
  isChecked: boolean
  setIsChecked: (isActive: boolean) => void
}> 

export const Checkbox = ({isChecked, setIsChecked, children, className}: TProps) => {
  return (
    <div className="flex items-center gap-[8px]">
      <Button onClick={() => setIsChecked(!isChecked)} className={clsx("w-[17px] aspect-square flex-center border-[1px] border-yellow rounded-[3px] active:scale-95", className)}>
        <svg className={`transition-all ${!isChecked && "opacity-0"}`} width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.41747 7.60407L4.39985 7.62169L0 3.22185L1.43268 1.78917L4.41752 4.77402L9.19154 0L10.6242 1.43268L4.43514 7.62175L4.41747 7.60407Z" fill="#FEBC2F"/>
        </svg>
      </Button>
      {children && <div className="text-[16px] text-light-gray">{children}</div>}
    </div>
  );
};