import { setDeviceType, useAppDispatch, useAppSelector } from "@/views/store"

export type TDeviceType = "desktop" | "laptop" | "tablet" | "mobile"

export const useDevice = () => {
  const dispatch = useAppDispatch()
  const deviceType = useAppSelector(state => state.main.deviceType)

  const detectDevice = (): TDeviceType => {
    const width = window.innerWidth

    if (width < 640) return "mobile"
    if (width < 1024) return "tablet"
    if (width < 1536) return "laptop"
    return "desktop"
  }

  const initDevice = () => {
    const current = detectDevice()
    dispatch(setDeviceType(current))
    return current
  }

  const getDevice = (): TDeviceType => deviceType

  return { initDevice, getDevice }
}
