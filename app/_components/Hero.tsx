'use client';
import React from 'react'
import HeroNav from './Hero-nav';
import Image from "next/image";
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    
    <section className='bg-[#080404] h-full flex overflow-hidden flex-col'>
      <HeroNav/>
      <div className='text-[#B5650E] flex flex-col justify-center gap-y-[50px] items-center p-5 h-[100vh]'>
        <motion.div 

        initial={{
              opacity: 0, 
              y: 10
            }}
            animate={{
              opacity: 1, 
              y: 0
            }}
            transition={{duration: .8, delay: .3, staggerChildren: 0.6}}

        
        className='text-sm lg:text-4xl text-center items-center font-romie flex flex-col justify-between gap-y-4 font-extrabold'>
          <motion.p>We don&apos;t <span className='uppercase text-[#DCCEB3] lg:text-[50px]'>create adverts to </span>sell products</motion.p>
          <motion.p>We create adverts to <span className='uppercase text-[#DCCEB3] lg:text-[50px
            ]'>trigger emotions</span></motion.p>
        </motion.div>

        <motion.div 
            initial={{
              opacity: 0, 
              y: -10
            }}
            animate={{
              opacity: 1, 
              y: 0
            }}
            transition={{duration: 1, delay: .5}}

            className='flex justify-between w-3/5 max-w-[900px] pt-10'>
                <Highlight title='Clients served' content='Over 40 '/>
                <div className='h-full w-[2px] bg-[#DCCEB3]'/>
                <Highlight title='Projects' content='Over 100 projects'/>
                <div className='h-full w-[2px] bg-[#DCCEB3]'/>
                <Highlight title='Industries' content='Upto 17'/>
                <div className='h-full w-[2px] bg-[#DCCEB3]'/>
                <Highlight title='Happy clients' content='100%'/>
            
        </motion.div>

      </div>
        {/** Images */}
        <div>
        </div>
      
    </section>
  )
}

const Highlight: React.FC<{title: string; content: string}> = ({title, content}) => {
  return(
      <div className='flex flex-col items-center gap-4 font-cremona'>
         <span className='uppercase text-sm'>{title}</span> 
         <p className='text-2xl text-[#DCCEB3]'>{content}</p>
      </div>
  )
}


export default Hero;
