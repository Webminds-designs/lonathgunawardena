import React from 'react'

export default function bgimage() {
  return (
    <div className='flex flex-col justify-between h-full px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
        <div className='flex justify-between'>
            <div className='h-12 md:h-14 2xl:h-28 w-3 md:w-4 2xl:w-8 bg-black' />
            <div className='h-12 md:h-14 2xl:h-28 w-3 md:w-4 2xl:w-8 bg-black' />
        </div>

        <p className='font-reviewheavy text-center text-7xl md:text-9xl lg:text-[10em] xl:text-[12em] 2xl:text-[15rem]'>ART</p>
        
        <div className='flex justify-between'>
            <div className='h-12 md:h-14 2xl:h-28 w-3 md:w-4 2xl:w-8 bg-black' />
            <div className='h-12 md:h-14 2xl:h-28 w-3 md:w-4 2xl:w-8 bg-black' />
        </div>
    </div>
  )
}
