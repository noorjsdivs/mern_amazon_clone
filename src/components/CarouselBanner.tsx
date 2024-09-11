"use client"
import { bannerFive, bannerFour, bannerOne, bannerThree, bannerTwo } from '@/app/assets'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'


Autoplay.globalOptions = {delay:8000};

const CarouselBanner = () => {
  const bannerImages =[
    {title: "bannerOne", sources: bannerOne},
    {title: "bannerOne", sources: bannerTwo},
    {title: "bannerOne", sources: bannerThree},
    {title: "bannerOne", sources: bannerFour},
    {title: "bannerOne", sources: bannerFive},
  ] 
  const [emblaRef] =useEmblaCarousel({loop:true, duration:100},[Autoplay(),])
  return (
    <div className=' overflow-hidden cursor-pointer relative z-0 ' ref={emblaRef} >
       <div className='flex'>
        {bannerImages?.map((item)=>(
          <Image 
          key={item?.title}
          src={item?.sources}
          alt={item?.title}
          height={1080}
          className='w-full'
          priority
          />
        ))}
       </div>
       <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-mainColor" />
    </div>
  )
}

export default CarouselBanner 