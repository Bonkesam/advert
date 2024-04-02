'use client';
import React, { useEffect, useRef } from 'react'
import HeroNav from './Hero-nav';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import ZoomImage from './zoom/zoom';
import Footer from './Footer';


const Hero = () => {

  const lenisRef = useRef<Lenis | undefined>(undefined);
  const rafHandleRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis on the first render
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        rafHandleRef.current = requestAnimationFrame(raf);
      };

      rafHandleRef.current = requestAnimationFrame(raf);
    }

    // Clean up on component unmount
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = undefined;
      }
      if (rafHandleRef.current) {
        cancelAnimationFrame(rafHandleRef.current);
        rafHandleRef.current = null;
      }
    };
  }, []);
  
  return (
    <section>
    <div className='bg-[#080404] h-full flex overflow-hidden flex-col'>
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

        
        className='text-xl lg:text-4xl text-center items-center font-romie flex flex-col justify-between gap-y-4 font-extrabold'>
          <h1 className='text-3xl lg:text-8xl text-[#DCCEB3] p-4  lg:p-10 uppercase'>
            Adverts Must Influence, Period!
          </h1>
          <motion.p>We don&apos;t <span className='uppercase text-[#DCCEB3] '>create adverts to </span>sell products</motion.p>
          <motion.p>We create adverts to <span className='uppercase text-[#DCCEB3] '>trigger emotions</span></motion.p>
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
                <div className='h-full border bg-[#DCCEB3]'/>
                <Highlight title='Projects' content='Over 100 projects'/>
                <div className='h-full border bg-[#DCCEB3]'/>
                <Highlight title='Industries' content='Upto 17'/>
                <div className='h-full border bg-[#DCCEB3]'/>
                <Highlight title='Happy clients' content='100%'/>
            
        </motion.div>

      </div>
        {/** Images */}
        <div>
        </div>
      </div>
      <div className='bg-[#080404]'>
       <ZoomImage/>
      </div>
      <div>
        <Footer/>
      </div>

    </section>
  )
}

const Highlight: React.FC<{title: string; content: string}> = ({title, content}) => {
  return(
      <div className='flex flex-col md:text-sm lg:text-xl items-center gap-4 font-cremona p-3 '>
         <span className='uppercase  text-[8px] lg:text-sm'>{title}</span> 
         <p className=' text-[10px] lg:text-2xl text-[#DCCEB3]'>{content}</p>
      </div>
  )
}


export default Hero;
