'use client';
import React from 'react'
import ContactNav from '../_components/Contact-Nav'
import Image from "next/image";

const page = () => {
  return (
    <section className='relative h-screen w-full text-[#B5650E]  origin-top'>
        
        <div className=' absolute z-30 top-0 left-0 w-full'>
         <ContactNav/>
        </div>
        <div className='absolute flex flex-row h-full w-full z-20'>
          
          <div className=' relative bg-[#080404] h-full w-full lg:w-[60%] p-5 pt-20'>
              <div className='relative p-5 pt-10 items-center justify-center flex flex-col h-full'>
                <div className='flex flex-col w-full gap-y-4'>
                  <p className='items-center text-center text-4xl uppercase font-cremona'>Get in touch</p>
                  <div className='flex flex-row justify-between font-cremona gap-y-4 gap-x-8 '>
                    <div>
                      <p>Made by:</p>
                      <p className='uppercase'>Bonke Sam</p>
                      <p>Full Stack developer</p>
                      <p>bonkesam9@gmail.com</p>
                    </div>
                    <div>
                      <p>Availability:</p>
                      <p>Email Enquiries</p>
                      <p>bonkesam9@gmail.com</p>
                      <p>Phone number</p>
                      <p>+254714308712</p>
                    </div>
                  </div>
                  <div className='items-center text-center font-romie pt-8 text-xs lg:text-2xl '>
                    <p className='hover:underline'>
                      I pride myself in making very cool software.
                    </p>
                    <p className='hover:underline'>
                      I also expect the pay to be equally fat and cool
                    </p>
                  </div>
                </div>
              </div>
          </div>

          <div className=' hidden lg:flex relative w-[40%] right-0'>
              <Image 
                src="/images/ad2.jpg"
                alt='Image of an ad'
                layout="fill"
                objectFit="cover"
              />
          </div>
  
      </div>
      
    </section>
  )
}

export default page
