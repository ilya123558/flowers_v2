import { TClassName } from "@/utils/types/main";
import clsx from "clsx";
import Link from "next/link";

interface IBreadcrumbsItem {
  link: string
  title: string
}

type TProps = TClassName<{
  list: IBreadcrumbsItem[]
}>

export const Breadcrumbs = ({className, list}: TProps) => {
  return (
    <nav className={clsx('w-full', className)}>
      <ul className="flex items-center gap-[19.5px] w-full p-[8px_12px]">
        {list.map(({link, title}, index, arr) => (
          <li key={index} className="flex items-center gap-[19.5px]">
            <Link href={link} className={clsx('text-[#C2C2C2] text-[14px]', index === (arr.length - 1) ? 'font-semibold text-main' : '')}>{title}</Link>
            {index !== (arr.length - 1) && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="#C2C2C2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};