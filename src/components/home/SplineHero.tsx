'use client'

import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => null,
})

interface SplineHeroProps {
  sceneUrl: string
}

export default function SplineHero({ sceneUrl }: SplineHeroProps) {
  return (
    <div className="absolute bottom-20 right-0 w-[600px] h-[600px] origin-bottom-right scale-[0.33]">
      <Spline
        scene={sceneUrl}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}
