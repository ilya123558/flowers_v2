import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";

export const TextNowrap = ({children, className}: TClassNameWithChildren) => {
  return (
    <p className={clsx("text-ellipsis whitespace-nowrap overflow-hidden", className)}>
      {children}
    </p>
  );
};