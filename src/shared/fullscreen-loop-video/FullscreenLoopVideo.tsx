'use client'
import clsx from 'clsx'
import React from 'react'

type Props = {
  srcMp4: string
  srcWebm?: string
  poster?: string
  className?: string
}

export const FullscreenLoopVideo: React.FC<Props> = ({
  srcMp4,
  srcWebm,
  poster,
  className,
}) => {
  return (
    <section
      // background: ;
      className={clsx("relative w-full lg:aspect-[1802/705] aspect-[400/350] overflow-hidden", className)}
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        controls={false}
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        poster={poster}
        onContextMenu={(e) => e.preventDefault()}
      >
        {srcWebm && <source src={srcWebm} type="video/webm" />}
        <source src={srcMp4} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
      {/* <div style={{background:'linear-gradient(0deg, rgba(115, 115, 115, 0) 20%, #221403 80%, #000 100%)'}} className='absolute top-0 left-0 w-full h-[178px]'/> */}
      <div
        className="absolute lg:top-0 top-[-10px] left-0 w-full h-[178px]"
        style={{
          background:
            'linear-gradient(180deg, #000 0%, rgba(34, 20, 3, 0.9) 5%, rgba(0,0,0,0) 100%)',
        }}
      />
      <div
        className="absolute bottom-[-5px] left-0 w-full h-[178px] "
        style={{
          height: 'calc(100%)',
          background: 'linear-gradient(180deg, rgba(115, 115, 115, 0) 20.65%, rgba(34, 20, 3, 0.8) 78%,  rgba(34, 20, 3, 0.9) 98%, #000 100%)',
        }}
      />
    </section>
  )
}
