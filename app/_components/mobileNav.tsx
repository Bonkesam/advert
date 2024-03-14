import React, { useState } from 'react'

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
        <div>

        </div>
      </div>
    </nav>
  )
}

export default mobileNav
