'use client'
import { useEffect, useState } from "react"

export const useScrollStarted = (offset: number = 100) => {
  const [scrollStarted, setScrollStarted] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrollStarted(window.scrollY > offset)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [offset])

  return scrollStarted
}
