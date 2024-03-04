import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-6 bg-[#080404] z-50 flex flex-row justify-between uppercase items-center text-[#B5650E] text-[15px] font-cremona'>
        {/* Works and Archive */}
        <div className='hidden lg:flex justify-between gap-4'>
            <div> Works</div>
            <Link href='/gallery'><div> Gallery</div></Link>
        </div>

        {/* Logo */}
        <div className='font-romie text-[30px]'>
            <Link href="/"><p>Popularity Studios</p></Link>
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
      
    </nav>
  )
}

export default Navbar;
