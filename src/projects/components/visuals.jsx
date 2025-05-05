import React from 'react'
import { motion } from 'motion/react'
import Cards from './cards'

export default function visuals() {
    
    return (
        <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* header */}
            <div className='flex flex-col text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-black'>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >VISUALS THAT</motion.span>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >WRAP AROUND</motion.span>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >EVERY DETAIL OF</motion.span>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >YOUR BRAND.</motion.span>
            </div>

            {/* cards */}
            <Cards />
        </div>
    )
}
