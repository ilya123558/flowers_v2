'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/shared/button/Button'

export const CatalogSearchNotification = () => {
  const pathname = usePathname()
  const [hasCatalogList, setHasCatalogList] = useState(false)

  useEffect(() => {
    const checkCatalogList = () => {
      const element = document.getElementById('catalog-product-list')
      setHasCatalogList(!!element)
    }

    checkCatalogList()

    const observer = new MutationObserver(checkCatalogList)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [pathname])

  const handleScrollToCatalog = () => {
    const element = document.getElementById('catalog-product-list')
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  if (!hasCatalogList) return null

  return (
    <div
      style={{background: 'linear-gradient(180deg, #2E2E2E 0%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.2) 100%)'}}
      className='border-[1px] border-[#3E3E3E] rounded-[18px] overflow-hidden backdrop-blur-[5px] h-full px-[2px] mb-[4px]'
    >
      <div className="w-full flex items-center justify-between p-[9px_12px] text-[#FFFFFFB2] font-medium text-[13px] leading-[12.5px] tracking-[-0.16px]">
        <p><span className='text-[#000000] text-[14px]'>🔎 </span>Мы нашли 52 варианта.</p>
        <Button onClick={handleScrollToCatalog} className='active:scale-95'>
          <p className='underline'>Показать</p>
        </Button>
      </div>
    </div>
  )
}
