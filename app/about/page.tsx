'use client';
import React from 'react'
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { aboutAnim, imageVar, pageVars, translate } from './anim';
import AboutNavbar from '../_components/About-Navbar';

const text1 = "At our advertising agency, we don't simply create ads to peddle products. We aim to craft stories that resonate on an emotional level. Why is this important? Because tapping into people's emotions is key to capturing their attention and inspiring them to act. Rational arguments may convince the mind, but the heart is moved by feelings."

const text2 = "Our creative process is fueled by empathy and insight. We begin by stepping into the shoes of the target audience, striving to deeply understand their hopes, dreams, and pain points. We then identify the specific emotions most likely to motivate engagement for a given campaign. We refine through rounds of consumer testing until we have an ad that triggers just the right feelings."



const page = () => {



  const getChars = (word: string) => {
    let chars: React.ReactNode[] = [];
    word.split("").forEach((char: string, i: number) => {
        chars.push(
            <motion.span
                custom={[i *0.002, (word.length - i) * 0.001]}

                
                key={char + i}
            >
                {char}
            </motion.span>
        )
    })
    return chars;
}

  return (
    <AnimatePresence> 
        <motion.section 
          variants={pageVars}
          initial="initial"
          animate='animate'
          exit="exit"
        className='bg-[#783404] h-[150vh] w-full relative text-[#DCCEB3] origin-top'>
          <div className=' relative z-30'>
            <AboutNavbar/>   
          </div>  
          <div className='flex flex-col'>  
            <div className='z-10 text-[#DCCEB3] max-w-[50ch] p-5 right-0 font-romie pt-3 text-justify flex flex-col gap-y-4'>
              <h1 className='uppercase'>
                  Why us?
              </h1>
              <p>
              {getChars(text2)}
              </p>
            </div>
            <motion.div 
              variants={imageVar}
              initial="initial"
              animate="animate"
            className='inset-0 flex justify-center origin-top z-15'>
              <div className='z-20 pt-20 hidden'>
              <Image 
                src="/images/old.jpg" 
                alt="Advertisement picture" 
                height={700}
                width={300}       
              />

              </div>
            </motion.div>

            <div className=' z-20 text-[#DCCEB3] max-w-[50ch]  left-0 text-justify  inset-0 p-5 font-romie pt-20'>
              <motion.div 
                
              className='bg-black/50  p-5  flex flex-col gap-y-4'>
              
                <h1 className='uppercase'>
                    How we work
                </h1>
                <p>
                {getChars(text1)} 
                </p>

                
              </motion.div>
            </div>
            <motion.div 
              variants={aboutAnim}
              initial="initial"
              animate="show"
            className='absolute bottom-0 left-0 right-0 text-center z-10'>
              <div className='bottom-0 overflow-hidden'>
                <p className='font-romie text-[80px] lg:text-[250px] uppercase opacity-70'>[Aboutus]</p>
              </div>
            </motion.div>
          </div>


        </motion.section>
    </AnimatePresence>
  )
}

export default page
