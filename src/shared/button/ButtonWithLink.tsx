'use client'
import { TClassNameWithChildrenAndProps } from "@/utils/types/main";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

type TProps = TClassNameWithChildrenAndProps<{
  link: string
}>

export const ButtonWithLink = ({link, children, className}: TProps) => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push(link)} className={className}>
      {children}
    </Button>
  );
};