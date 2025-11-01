import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";

export const Title16px = ({children, className}: TClassNameWithChildren) => {
  return (
    <p className={clsx("text-[16px] font-medium text-title-gray", className)}>
      {children}
    </p>
  );
};