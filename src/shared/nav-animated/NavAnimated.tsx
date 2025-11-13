'use client'
import clsx from 'clsx'
import styles from './NavAnimated.module.scss'
import { Button } from '../button/Button'

interface INavLinkAnimatedProps {
  list: string[]
  activeValue: string
  setActiveValue: (activeValue: string) => void
}

export const NavAnimated = ({activeValue, setActiveValue, list}: INavLinkAnimatedProps) => {
  return (
    <nav className="h-full">
      <ul className="flex items-center sm:gap-[55px] gap-[20px] h-full">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              className={clsx(
                'sm:text-[15px] text-[12px] leading-[100%]',
                styles.navItem,
                activeValue === item && '!text-yellow'
              )}
            >
              <Button onClick={() => setActiveValue(item)} className={styles.link}>
                {item}
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
