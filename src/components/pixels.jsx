import React, { useRef } from 'react'
import Creative_depth from './creative_depth'
import sail from '/images/sail.png'
import bird from '/images/bird.png'
import flowers from '/images/flowers.png'
import { motion, useScroll } from 'motion/react'

export default function pixels() {
    
  return (
    <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
        {/* header 1 */}
        <motion.div 
            className='flex flex-col text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-white'>
            <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={{
                    offscreen: { opacity: 0, y: 100 },
                    onscreen: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
            >PIXELS</motion.span>
            <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={{
                    offscreen: { opacity: 0, y: 100 },
                    onscreen: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
            >WITH</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >PURPOSE</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >BRANDS</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >WITH</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >MEANINGS</motion.span>
        </motion.div>

        {/* 2 cards */}
        <div className='flex flex-col lg:flex-row justify-center gap-6'>
            <div className='w-full lg:w-1/3 space-y-7 rounded-2xl bg-neutral-900 pb-8'>
                <div 
                    style={{
                        backgroundImage: `url(${sail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='w-full h-[150px] md:h-[200px] lg:h-[225px] xl:h-[275px] 2xl:h-[325px] rounded-t-2xl overflow-hidden'
                />
                <p className='font-reviewheavy text-lg lg:text-2xl text-white mx-5'>SKETCHES TO SIGNATURE BRANDS</p>
                <p className='text-xs xl:text-base 2xl:text-2xl text-white mx-5'>Every logo starts with a line. Here’s how I shape abstract ideas into distinct, memorable brand identities.</p>
            </div>
            
            <div className='w-full lg:w-1/3 space-y-7 rounded-2xl bg-neutral-900 pb-8'>
                <div 
                    style={{
                        backgroundImage: `url(${bird})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='w-full h-[150px] md:h-[200px] lg:h-[225px] xl:h-[275px] 2xl:h-[325px] rounded-t-2xl overflow-hidden'
                />
                <p className='font-reviewheavy text-lg lg:text-2xl text-white mx-5'>FROM WIREFRAME TO WOW</p>
                <p className='text-xs xl:text-base 2xl:text-2xl text-white mx-5' >See how thoughtful interactions and visual polish transform raw ideas into intuitive, high-impact interfaces.</p>
                <div className='bg-white font-thin text-xs xl:text-base 2xl:text-2xl ml-5 px-8 py-1 rounded-md w-fit'>Check More Projects</div>
            </div>
        </div>

        {/* header 2 */}
        <div className='flex flex-col text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-white'>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >LESS</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >GENERIC</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >MORE</motion.span>
            <motion.span
                initial="offscreen"
            whileInView="onscreen"
            variants={{
                offscreen: { opacity: 0, y: 100 },
                onscreen: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            >IDENTITY</motion.span>
        </div>

        {/* paragraph */}
        <p className='text-xs xl:text-base 2xl:text-2xl text-center text-white md:mx-28 lg:mx-32'>don’t just design screens — I shape how people feel, move, and connect.Every element is carefully considered, from structure to color to motion. With a process rooted in empathy and intention, I deliver designs that are not only visually striking but also seamlessly functional.Whether it's a digital product or a visual identity, I focus on precision, clarity, and emotion — helping brands tell their story with purpose and users interact with ease.</p>

        {/* art and culture */}
        <div 
            style={{
                backgroundImage: `url(${flowers})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className='w-full h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] rounded-2xl overflow-hidden'
        />

        {/* divider */}
        <div className="w-full h-px bg-neutral-800" />

        {/* creative depth */}
        <Creative_depth />

        {/* paragraph */}
        <p className='text-xs xl:text-base 2xl:text-2xl text-center text-white md:mx-28 lg:mx-32'>Design is more than decoration — it’s a system of clarity, emotion, and intention. My work doesn’t just look good — it works, communicates, and connects across every layer of the experience.</p>

        {/* divider */}
        <div className="w-full h-px bg-neutral-800" />
                
    </div>
  )
}
