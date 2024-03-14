import React, { useState } from 'react'

const navLinks = [
    {title: 'Home', href: '/'},
    {title: 'About', href: '/about'},
    {title: 'Contact', href: '/contact'},
    {title: 'Projects', href: '/gallery'},
    {title: 'Works', href: '/'}
]

const mobileNav = () => {

    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

  return (
    <nav>
      <div className='flex justify-between items-center py-8 lg:py-4 px-2'>
        <div className='flex items-center gap-[1ch]'>
            <div className='w-5 h-5 bg-[#DCCEB3] rounded-full'/>
            <span className='text-sm uppercase font-romie text-[#080404]'>Popularity Studios</span>            
        </div>
        <div className='cursor-pointer lg:hidden text-md text-[#080404] '
        onClick={toggleMenu}
        >
            Menu
        </div>
      </div>
      <div className='flex left-0 top-0 w-full h-screen bg-[#DCCEB3]'>
        <div className='flex justify-between'>
            <h1 className='text-lg text-[#080404]'> Popularity Studios</h1>
            <p className='cursor-pointer text-md text-[#080404]' onClick={toggleMenu}>Close</p>
        </div>
      </div>
    </nav>
  )
}

export default mobileNav
