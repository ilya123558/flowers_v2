'use client'
import { PropsWithChildren, useEffect, useState } from "react"

const useMedia = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    setMatches(media.matches)

    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [query])

  return matches
}

export const XlHidden = ({ children }: PropsWithChildren) => {
  const isXl = useMedia("(min-width: 1280px)")
  return isXl ? <>{children}</> : null
}

export const LgHidden = ({ children }: PropsWithChildren) => {
  const isLg = useMedia("(min-width: 1024px)")
  return isLg ? <>{children}</> : null
}

export const MdHidden = ({ children }: PropsWithChildren) => {
  const isMd = useMedia("(min-width: 768px)")
  return isMd ? <>{children}</> : null
}

export const SmHidden = ({ children }: PropsWithChildren) => {
  const isSm = useMedia("(min-width: 640px)")
  return isSm ? <>{children}</> : null
}