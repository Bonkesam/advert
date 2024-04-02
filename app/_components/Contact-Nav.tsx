
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import MobileNavigation from './nav/MobileNav';

const ContactNav = () => {
  return (
    <motion.nav 
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6 }}
    className='p-6 z-50 '>
        <div>
            <div className='flex flex-row justify-between uppercase items-center text-[#B5650E] text-[15px] font-cremona'>
                        {/* Works and Archive */}
            <div className='hidden lg:flex justify-between gap-4'>
                <div> Works</div>
                <Link href='/gallery'><div> Projects</div></Link>
            </div>

            {/* Logo */}
            <div className='font-romie text-[14px] lg:text-[30px]'>
                <Link href="/"><p>Nyx</p></Link>
            </div>

            {/* About and Contact */}
            <div className='hidden lg:flex justify-between gap-4'>
                <div>
                    <Link href="/about">About</Link>
                </div>
                <div>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

            </div>
            <motion.div
                initial ={{
                    scaleX: 0,
                    opacity: 1
                }}
                animate={{
                    scaleX:1
                }}
                transition={{
                    duration: 1.5, // Adjust the duration as needed
                    delay: 0.5 // Delay the animation if necessary
                  }}

                className='overflow-hidden max-w-screen origin-left'
            >
                <div className='border w-screen'/>
            </motion.div>
            {/*Mobile nav*/}
            <div className='lg:hidden flex items-center'>
                <MobileNavigation/>
            </div>

        </div>
      
    </motion.nav>
  )
}

export default ContactNav;
