import React from 'react'

export default function heroText() {
  return (
    <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
        <p className='text-center lg:text-left text-black font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem]'>PROJECTS</p>
        
        <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full'>
            <p className='flex flex-col font-reviewheavy text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-start text-center lg:text-left mb-3 xl:mb-5 2xl:mb-8'>
                <span>CREATIVE STORIES</span>
                <span>IN DESIGN</span>
            </p>
            <p className='text-xs xl:text-base 2xl:text-2xl font-figtree text-center lg:text-right mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>I’ve partnered with startups, businesses, and visionaries to turn abstract concepts into powerful, purpose-driven visuals — from brand identities to immersive digital interfaces.</p>
        </div>
    </div>
  )
}
