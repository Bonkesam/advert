import Link from 'next/link';
import React from 'react'
import MobileNavigation from './nav/MobileNav';

const Navbar = () => {
  return (
    <nav className='p-6  z-50 flex flex-row justify-between uppercase items-center text-[#B5650E] text-[15px] font-cremona' style={{ backgroundColor: 'transparent' }}>
        {/* Works and Archive */}
        <div className='hidden lg:flex justify-between gap-4'>
            <div> Works</div>
            <Link href='/gallery'><div> Gallery</div></Link>
        </div>

        {/* Logo */}
        <div className=' text-[14px] font-romie lg:text-[30px]'>
            <Link href="/"><p>NYX</p></Link>
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

        {/*Mobile nav*/}
        <div className='lg:hidden flex items-center'>
            <MobileNavigation/>
        </div>
      
    </nav>
  )
}

export default Navbar;
