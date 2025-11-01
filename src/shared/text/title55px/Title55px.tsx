import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";

export const Title55px = ({children, className}: TClassNameWithChildren) => {
  return (
    <p className={clsx("text-[55px] font-extrabold text-title-gray", className)}>
      {children}
    </p>
  );
};