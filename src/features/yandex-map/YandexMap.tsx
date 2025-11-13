'use client'
import { TClassName } from '@/utils/types/main'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'

export const YandexMap = ({className}: TClassName<{}>) => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: any = null

    const initMap = async () => {
      if (!document.getElementById('ymaps3-script')) {
        const script = document.createElement('script')
        script.id = 'ymaps3-script'
        script.src =
          'https://api-maps.yandex.ru/v3/?apikey=7bac98b3-e249-42bb-bd83-9662415632a5&lang=ru_RU'
        script.async = true
        document.body.appendChild(script)
      }

      await new Promise<void>((resolve) => {
        const check = () => {
          if ((window as any).ymaps3?.YMap) resolve()
          else setTimeout(check, 100)
        }
        check()
      })

      const ymaps3 = (window as any).ymaps3
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
        YMapControls,
      } = ymaps3

      const { YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1')

      map = new YMap(mapRef.current!, {
        location: { center: [127.5272, 50.2909], zoom: 16 },
        behaviors: ['drag', 'scrollZoom'],
      })

      map.addChild(new YMapDefaultSchemeLayer({ theme: 'dark' }))
      map.addChild(new YMapDefaultFeaturesLayer())

      const controls = new YMapControls({ position: 'left' })
      controls.addChild(new YMapZoomControl({}))
      map.addChild(controls)

      const observer = new MutationObserver(() => {
        document
          .querySelectorAll('ymaps3-controls__copyright, ymaps3-copyright, a[title="Яндекс"]')
          .forEach((el) => ((el as HTMLElement).style.display = 'none'))
      })
      observer.observe(mapRef.current!, { childList: true, subtree: true })

      const coords = [
        [127.528, 50.2915],
        [127.532, 50.2922],
        [127.525, 50.2895],
      ]

      coords.forEach(([lon, lat], i) => {
        const el = document.createElement('div')
        el.innerHTML = `
          <div style="
            position: relative;
            width: 32px; height: 32px;
            background: #E53935;
            border: 2px solid #fff;
            border-radius: 16px 16px 16px 0;
            transform: rotate(-45deg);
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 2px 6px rgba(0,0,0,0.5);
          ">
            <span style="
              transform: rotate(45deg);
              font-weight: 700; font-size: 14px; color: #fff;
            ">${i + 1}</span>
          </div>`
        map.addChild(new YMapMarker({ coordinates: [lon, lat] }, el))
      })
    }

    initMap()
    return () => map?.destroy?.()
  }, [])

  return (
    <div
      ref={mapRef}
      className={clsx("w-[262px] h-[229px] border border-[#404040] rounded-[8.5px] overflow-hidden", className)}
    />
  )
}
