import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[#080404] h-screen text-[#B5650E] flex justify-center  items-center p-5'>
      <div className='text-sm lg:text-5xl text-center items-center font-romie flex flex-col justify-between gap-y-4 font-extrabold'>
        <p>We do not <span className='uppercase text-[#DCCEB3] lg:text-[54px]'>create adverts to </span>sell the product</p>
        <p>We create content that <span className='uppercase text-[#DCCEB3] lg:text-[54px
          ]'>trigger emotions</span></p>
      </div>
    </section>
  )
}

export default Hero;
