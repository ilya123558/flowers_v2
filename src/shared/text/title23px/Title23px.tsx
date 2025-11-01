import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";

export const Title23px = ({children, className}: TClassNameWithChildren) => {
  return (
    <p className={clsx("text-[23px] font-medium text-title-gray", className)}>
      {children}
    </p>
  );
};