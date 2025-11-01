import { TClassNameWithChildren, TClassNameWithChildrenAndProps } from "@/utils/types/main";
import clsx from "clsx";

type TProps = TClassNameWithChildrenAndProps<{
  withDashedBorder?: boolean
}>

export const BoxWrapper = ({children, className, withDashedBorder}: TProps) => {
  return (
    <div 
      className={clsx(
        'bg-box-gray rounded-[10px]', 
        className, 
        withDashedBorder && 'border-dashed border-[1px] border-border-gray'
      )}
    >
      {children}
    </div>
  );
};