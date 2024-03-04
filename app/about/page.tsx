'use client';
import React from 'react'
import Navbar from '../_components/Navbar'
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';


const page = () => {

  const pageVars = {
    initial : {
      scaleY:0
    },
    animate : {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: [0.12, 0, 0.39, 0]
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration:0.5,
        ease: [0.22, 0, 0.39,0],
      },
    },
  }

  return (
    <AnimatePresence>    
        <motion.section 
          variants={pageVars}
          initial="initial"
          animate='animate'
          exit="exit"
        className='bg-[#783404] h-full w-full relative text-[#DCCEB3] origin-top'>
            
          <div>  
          <div className='absolute z-10 text-[#DCCEB3] max-w-[50ch] p-5 right-0 font-romie pt-3 text-justify flex flex-col gap-y-4'>
            <h1 className='uppercase'>
                Why us?
            </h1>
            <p>
            At our advertising agency, we don't simply create ads to peddle products. We aim to craft stories that resonate on an emotional level. Why is this important? Because tapping into people's emotions is key to capturing their attention and inspiring them to act. Rational arguments may convince the mind, but the heart is moved by feelings. 
            </p>
          </div>
          <div className='absolute inset-0 flex justify-center top-0  z-15'>
            <div className='z-20'>
            <Image 
              src="/images/old.jpg" 
              alt="Advertisement picture" 
              height={700}
              width={300}       
            />

            </div>
          </div>

          <div className='absolute z-20 text-[#DCCEB3] max-w-[45ch] pl-10 pr-10 left-0 text-justify   inset-0  top-[70px] font-romie'>
            <div className='bg-black/50  p-5 flex flex-col gap-y-4'>
              <h1 className='uppercase'>
                  How we work
              </h1>
              <p>
              Our creative process is fueled by empathy and insight. We begin by stepping into the shoes of the target audience, striving to deeply understand their hopes, dreams, and pain points. We then identify the specific emotions most likely to motivate engagement for a given campaign. We refine through rounds of consumer testing until we have an ad that triggers just the right feelings. 
              </p>
            </div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 text-center z-10'>
            <div className='bottom-0'>
              <p className='font-romie text-[250px] uppercase '>Aboutus</p>
            </div>
          </div>
          </div>

          <div className='relative  items-center justify-center'>
            <h1>Selected Clients</h1>

          </div>

        </motion.section>
    </AnimatePresence>
  )
}

export default page
