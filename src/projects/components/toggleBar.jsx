import React from 'react'

export default function toggleBar() {
  return (
    <div className='flex space-x-10 px-12 w-full max-w-[1920px] mx-auto'>
        <p className='text-black font-reviewheavy text-sm lg:text-lg 2xl:text-2xl'>ALL</p>
        <p className='text-neutral-600 font-reviewheavy text-sm lg:text-lg 2xl:text-2xl'>GRAPHICS</p>
        <p className='text-neutral-600 font-reviewheavy text-sm lg:text-lg 2xl:text-2xl'>LOGOS</p>
    </div>
  )
}
