'use client'
import clsx from 'clsx'
import styles from './NavAnimated.module.scss'
import { Button } from '../button/Button'
import { SmHidden } from '../wrappers/SizeHidden'
import { SmShow } from '../wrappers/SizeShow'

interface INavLinkAnimatedProps {
  list: string[]
  activeValue: string
  setActiveValue: (activeValue: string) => void
}

export const NavAnimated = ({activeValue, setActiveValue, list}: INavLinkAnimatedProps) => {
  return (
    <nav className="h-full">
      <SmHidden>
        <ul className="flex items-center sm:gap-[55px] gap-[20px] h-full">
          {list.map((item, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  'sm:text-[15px] text-[12px] leading-[100%]',
                  styles.navItem,
                  activeValue === item && '!text-[#FFCC00]'
                )}
              >
                <Button onClick={() => setActiveValue(item)} className={styles.link}>
                  {item}
                </Button>
              </li>
            )
          })}
        </ul>
      </SmHidden>

      <SmShow>
        <ul className="flex items-center justify-center sm:gap-[55px] gap-[20px] h-full">
          {list.slice(0, 2).map((item, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  'sm:text-[15px] text-[14px] leading-[100%]',
                  styles.navItem,
                  activeValue === item && '!text-[#FFCC00]'
                )}
              >
                <Button onClick={() => setActiveValue(item)} className={styles.link}>
                  {item}
                </Button>
              </li>
            )
          })}
        </ul>
        <ul className="flex items-center justify-center sm:gap-[55px] gap-[20px] h-full">
          {list.slice(2, 5).map((item, index) => {
            return (
              <li
                key={index}
                className={clsx(
                  'sm:text-[15px] text-[14px] leading-[100%]',
                  styles.navItem,
                  activeValue === item && '!text-[#FFCC00]'
                )}
              >
                <Button onClick={() => setActiveValue(item)} className={styles.link}>
                  {item}
                </Button>
              </li>
            )
          })}
        </ul>
      </SmShow>
    </nav>
  )
}
