'use client';
import React from 'react'
import HeroNav from './Hero-nav';

const Hero = () => {
  return (
    
    <section className='bg-[#080404] h-screen '>
      <HeroNav/>
      <div className='text-[#B5650E] flex justify-center  items-center p-5 h-full'>
        <div className='text-sm lg:text-4xl text-center items-center font-romie flex flex-col justify-between gap-y-4 font-extrabold'>
          <p>We don&apos;t <span className='uppercase text-[#DCCEB3] lg:text-[50px]'>create adverts to </span>sell products</p>
          <p>We create adverts to <span className='uppercase text-[#DCCEB3] lg:text-[50px
            ]'>trigger emotions</span></p>
        </div>

      </div>
    </section>
  )
}

export default Hero;
