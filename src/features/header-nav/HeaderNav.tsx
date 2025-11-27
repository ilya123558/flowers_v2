'use client'
import Link from 'next/link'
import styles from './HeaderNav.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { navItems } from '@/utils/const/nav'

export const HeaderNav = () => {
  const pathname = usePathname()

  return (
    <nav className="h-full">
      <ul className="flex items-center gap-[55px] h-full">
        {navItems.map(({ link, title }, index) => {
          const isActive = link === '/' ? pathname === '/' : pathname.startsWith(link) 

          return (
            <li
              key={index}
              className={clsx(
                'text-[15px]',
                styles.navItem,
                isActive && '!text-yellow'
              )}
            >
              <Link href={link} className={styles.link}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
