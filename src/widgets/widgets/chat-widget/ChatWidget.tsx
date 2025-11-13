'use client'
import Script from 'next/script'
import { useEffect } from 'react'

export const ChatWidget = () => {
  useEffect(() => {
  console.log('Chaty widget script loaded:', document.getElementById('pixel-chaty'))
}, [])

  return (
    <Script
      id="pixel-chaty"
      src="https://cdn.chaty.app/pixel.js?id=aJdQrnfg"
      strategy="afterInteractive"
      async
    />
  )
}
