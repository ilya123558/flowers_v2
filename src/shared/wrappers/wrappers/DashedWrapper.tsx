import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";

export const DashedWrapper = ({children, className}: TClassNameWithChildren) => {
  return (
    <div className={clsx('border-dashed border-[1px] border-border-gray rounded-[20px]', className)}>
      {children}
    </div>
  );
};