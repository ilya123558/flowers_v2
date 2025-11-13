'use client'
import { useDevice } from "@/utils/hooks/useDevice"
import { PropsWithChildren, useEffect } from "react"

export const InitWrapper = ({ children }: PropsWithChildren) => {
  const { initDevice } = useDevice()

  useEffect(() => {
    initDevice()

    const handleResize = () => initDevice()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [initDevice])

  return children
}
