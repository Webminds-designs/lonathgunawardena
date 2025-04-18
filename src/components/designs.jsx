import React from 'react'
import { motion } from 'motion/react'

export default function designs() {
  return (
    <div id='designs' className='flex flex-col px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32 space-y-10'>
      <p className='font-reviewheavy flex flex-col items-center text-5xl md:text-8xl lg:text-9xl xl:text-[10em] 2xl:text-[16em] text-black'>
        <motion.span
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: { opacity: 0, y: 100 },
            onscreen: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >DESIGNS</motion.span>
        <motion.span
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: { opacity: 0, y: 100 },
            onscreen: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >ARE JUST</motion.span>
        <motion.span
          initial="offscreen"
          whileInView="onscreen"
          variants={{
            offscreen: { opacity: 0, y: 100 },
            onscreen: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
        >THE START</motion.span>
      </p>
      <div className='flex justify-center w-full mt-10 lg:mt-20'>
        <p className='font-figtree font-semibold text-center text-xs xl:text-base 2xl:text-2xl max-w-[20em] text-black'>Because Behind Every Layout Is A Strategy, A Story, And A Purpose.</p>
      </div>
    </div>
  )
}
