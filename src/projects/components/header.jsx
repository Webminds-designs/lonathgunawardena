import React from 'react'

export default function header() {
  return (
    <div className='bg-stone-300 fixed flex justify-center w-full h-6 md:h-14 lg:h-16 xl:h-20 2xl:h-22 z-10'>
      <div className='fixed text-black -top-12 md:-top-12 lg:-top-12 xl:-top-10 2xl:-top-10 left-1/2 right-1/2 pt-12 flex flex-col items-center font-rapidresponse z-20'>
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
    </div>
  )
}
