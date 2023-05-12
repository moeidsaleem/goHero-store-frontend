import BannerSimple from '@/components/common/Banner/BannerSimple'
import { ProductGrid } from '@/components/core/product/ProductGrid/ProductGrid'
import Hero from '@/components/sections/hero'
import { HowWeWork } from '@/components/sections/how-we-work'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      <Hero />
      <HowWeWork />
      <BannerSimple title={`Sustainable. Food Growth`} />
      <ProductGrid />

    </main>
  )
}
