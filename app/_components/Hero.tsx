'use client';
import React from 'react'
import HeroNav from './Hero-nav';
import Image from "next/image";


const Hero = () => {
  return (
    
    <section className='bg-[#080404] h-full flex overflow-hidden flex-col'>
      <HeroNav/>
      <div className='text-[#B5650E] flex justify-center  items-center p-5 h-[100vh]'>
        <div className='text-sm lg:text-4xl text-center items-center font-romie flex flex-col justify-between gap-y-4 font-extrabold'>
          <p>We don&apos;t <span className='uppercase text-[#DCCEB3] lg:text-[50px]'>create adverts to </span>sell products</p>
          <p>We create adverts to <span className='uppercase text-[#DCCEB3] lg:text-[50px
            ]'>trigger emotions</span></p>
        </div>
      </div>
        {/** Images */}
        <div>
          
        </div>
      
    </section>
  )
}

export default Hero;
