import React, { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Main header - visible on all screens */}
      <div className='bg-stone-300 fixed flex justify-between items-center w-full h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-22 z-20 px-4 md:px-12'>
        {/* Left side - empty space for balance on larger screens, hamburger menu on mobile */}
        <div className="flex items-center">
          <button 
            className="block md:hidden focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Center - Logo */}
        <div className='text-black absolute left-1/2 transform -translate-x-1/2 pt-0 md:pt-0 flex flex-col items-center font-rapidresponse z-20'>
          <div className='flex text-[20px] md:text-[45px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px] tracking-[-0.05em] 2xl:leading-[0.9] leading-[0.8]'>
            <div>L</div>
            <div>O</div>
            <div>N</div>
            <div>A</div>
            <div>T</div>
            <div>H</div>
          </div>
          <div className='text-[10px] md:text-[22.5px] lg:text-[25px] xl:text-[25px] 2xl:text-[25px] -mt-1 md:-mt-3 lg:-mt-3 xl:-mt-3 2xl:-mt-3'>GUNAWARDENA</div>
        </div>

        {/* Right side - Navigation (visible on md and up) */}
        <div className="hidden md:flex space-x-6 md:space-x-10 font-reviewheavy">
          <a href="/">
            <span className="text-gray-400 hover:text-black font-semibold text-sm md:text-base lg:text-lg transition-colors">HOME</span>
          </a>
          <a href="/projects">
            <span className="text-black font-semibold text-sm md:text-base lg:text-lg">PROJECTS</span>
          </a>
        </div>
        
        {/* Placeholder div to balance the header on mobile */}
        <div className="block md:hidden w-6"></div>
      </div>
      
      {/* Mobile menu - slides in from top when open */}
      {mobileMenuOpen && (
        <div className="fixed top-12 left-0 w-full bg-stone-300 z-10 shadow-md transition-all duration-300 md:hidden">
          <div className="flex flex-col py-4 px-4">
            <a 
              href="/" 
              className="py-3 text-center text-gray-400 hover:text-black font-reviewheavy transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="/projects" 
              className="py-3 text-center text-black font-reviewheavy"
              onClick={() => setMobileMenuOpen(false)}
            >
              PROJECTS
            </a>
          </div>
        </div>
      )}
    </>
  )
}