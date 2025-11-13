import { TClassNameWithChildren } from "@/utils/types/main";
import clsx from "clsx";

export const Container = ({children, className}: TClassNameWithChildren) => {
  return (
    <div className={clsx(className)}>
      <div className={clsx('max-w-[1200px] w-full lg:p-[0px_5px] p-[0px_21.8px] mx-[auto]')}>
        {children}
      </div>
    </div>
  );
};