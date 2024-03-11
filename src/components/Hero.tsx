'use client'
import React from 'react'
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import { HeroDropdown } from '@/components/HeroDropdown'

const Hero = () => {
    return (
        <div className='mx-auto my-2 max-w-7xl '>
            <div className="categories my-2 p-1 w-full shadow-dark-2 bg-slate-200 py-2">
                <h1 className='font-bold text-2xl mx-5 mb-2'>Choose from Categories</h1>
                <HeroDropdown />
            </div>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    <CarouselItem className='h-[265px]  relative'>
                        <Image src='/images/hero-images/carousoul-1.webp' alt='Hero image for first Image' fill={true} />
                    </CarouselItem>
                    <CarouselItem className='h-[265px]  relative'>
                        <Image src='/images/hero-images/carousoul-2.webp' alt='Hero image for second Image' fill={true} />
                    </CarouselItem>
                    <CarouselItem className='h-[265px]  relative'>
                        <Image src='/images/hero-images/carousoul-3.webp' alt='Hero image for third image' fill={true} />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Hero
