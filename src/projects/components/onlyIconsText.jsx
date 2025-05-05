import React from 'react'
import { motion } from 'motion/react'

export default function onlyIconsText() {
    return (
        <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* header 2 */}
            <div className='flex flex-col text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-black'>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >ONLY THE</motion.span>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >ICONS</motion.span>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >MADE IT</motion.span>
                <motion.span
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={{
                        offscreen: { opacity: 0, y: 100 },
                        onscreen: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                >HERE</motion.span>
            </div>

            {/* paragraph */}
            <p className='text-xs xl:text-base 2xl:text-2xl text-center text-black md:mx-28 lg:mx-32'>What you see here is just the tip of the iceberg — a handpicked collection of standout visuals from a much broader creative journey. Each piece was carefully chosen to showcase the boldest, brightest, and The most impactful moments from an extensive body of work.</p>
        </div>
    )
}
