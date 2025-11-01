import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import { Tooltip } from "../tooltip/Tooltip";
import { ToggleDefault } from "../toggle/ToggleDefoult";
import clsx from "clsx";
import { AnimationHeightWrapper } from "../wrappers/AnimationHeightWrapper";

type TProps = TClassNameWithChildrenAndProps<{
  text: string
  title: string
  toggle: boolean
  setToggle: (toggle: boolean) => void
}>

export const InfoWithToggle = ({setToggle, text, title, toggle, className, children}: TProps) => {
  return (
    <div className="">
      <div className={clsx("flex justify-between items-center", className)}>
        <div className="">
          <Tooltip
            text={text}
          >
            {title}
          </Tooltip>
        </div>
        <ToggleDefault toggle={toggle} setToggle={setToggle} />
      </div>
      <AnimationHeightWrapper withoutOverflowHidden isOpen={toggle}>
        {children}
      </AnimationHeightWrapper>
    </div>
  );
};