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
          />
        ))}
       </div>
    </div>
  )
}

export default CarouselBanner 