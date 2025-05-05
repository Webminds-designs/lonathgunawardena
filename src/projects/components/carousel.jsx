import React from 'react'
import { motion } from 'motion/react'
import LogoCarousel from './logoCarousel'

export default function carousel() {
    return (
        <>
            <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
                {/* header */}
                <div className='flex flex-col text-center font-reviewheavy text-2xl md:text-4xl lg:text-6xl xl:text-[4rem] 2xl:text-[8rem] text-black'>
                    <motion.span
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={{
                            offscreen: { opacity: 0, y: 100 },
                            onscreen: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >WHO I'VE</motion.span>
                    <motion.span
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={{
                            offscreen: { opacity: 0, y: 100 },
                            onscreen: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >WORKED WITH</motion.span>
                </div>
            </div>

            {/* logo carousel */}
            <LogoCarousel />
        </>
    )
}
