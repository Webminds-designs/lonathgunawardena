import React, { useRef, useState, useEffect } from 'react'
import image from '/images/image.webp'
import image1 from '/images/image1.webp'
import image2 from '/images/image2.webp'
import image3 from '/images/image3.webp'
import { motion, useScroll, useTransform } from 'motion/react'

export default function creative_depth() {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    return (
        <div ref={containerRef} className='flex flex-col justify-center items-center space-y-2 md:space-y-3'>
            <div className='relative w-full h-9 md:h-20 lg:h-26 xl:h-36 2xl:h-48 overflow-hidden'>
                <div className='absolute inset-x-0 top-1/2 -translate-y-1/3 flex flex-col items-center justify-center font-reviewheavy text-[4.5em] md:text-[9em] lg:text-[12em] xl:text-[16em] 2xl:text-[22em] text-neutral-800'>
                    <p className='block'>CREATIVE</p>
                </div>
            </div>
            <div className='relative w-full h-9 md:h-20 lg:h-26 xl:h-36 2xl:h-48 overflow-hidden'>
                <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center font-reviewheavy text-[3.5em] md:text-[8em] lg:text-[11em] xl:text-[15em] 2xl:text-[20em] text-neutral-800'>
                    <p className='block'>CREATIVE</p>
                </div>
            </div>
            <div className='relative w-full h-9 md:h-20 lg:h-26 xl:h-36 2xl:h-48 overflow-hidden'>
                <div className='absolute inset-x-0 -top-1/2 -translate-y-1/3 flex flex-col items-center justify-center font-reviewheavy text-[3em] md:text-[7em] lg:text-[10em] xl:text-[14em] 2xl:text-[18em] text-neutral-800'>
                    <p className='block'>CREATIVE</p>
                </div>
            </div>

            {/* desktop view */}
            <div className='hidden relative lg:flex flex-col-reverse lg:space-y-0 lg:flex-row w-full lg:h-48 xl:h-72'>
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{
                        backgroundImage: `url(${image})`,
                        x: useTransform(scrollYProgress, [0, 0.3], ['0%', '90%']),
                    }}
                    className='mx-auto my-4 w-[40%] md:w-[20em] lg:absolute lg:w-1/3 lg:right-0 lg:bottom-6 xl:bottom-8 h-24 md:h-52 lg:h-32 xl:h-50 bg-cover bg-center rounded-2xl'
                />
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{
                        backgroundImage: `url(${image1})`,
                        x: useTransform(scrollYProgress, [0, 0.3], ['0%', '40%']),
                    }}
                    className='mx-auto my-4 w-[60%] md:w-[30em] lg:absolute lg:w-1/3 lg:left-1/2 lg:bottom-4 xl:bottom-6 h-32 md:h-64 lg:h-36 xl:h-58 bg-cover bg-center rounded-2xl'
                />
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{
                        backgroundImage: `url(${image2})`,
                        x: useTransform(scrollYProgress, [0, 0.3], ['0%', '-20%']),
                    }}
                    className='mx-auto my-4 w-[80%] md:w-[35em] lg:absolute lg:w-1/3 lg:left-1/4 lg:bottom-2 xl:bottom-4 h-40 md:h-72 lg:h-42 xl:h-64 bg-cover bg-center rounded-2xl'
                />
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{
                        backgroundImage: `url(${image3})`,
                        x: useTransform(scrollYProgress, [0, 0.3], ['0%', '-90%']),
                    }}
                    className='mx-auto my-4 w-full lg:absolute lg:w-1/3 lg:left-0 lg:bottom-0 h-48 md:h-96 lg:h-48 xl:h-72 bg-cover bg-center rounded-2xl'
                />
            </div>
            
            {/* mobile view */}
            <div className='lg:hidden relative flex flex-col-reverse lg:space-y-0 lg:flex-row w-full lg:h-48 xl:h-72 overflow-hidden'>
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{ backgroundImage: `url(${image})` }}
                    className='mx-auto my-4 w-[40%] md:w-[20em] lg:absolute lg:w-1/3 lg:right-0 lg:bottom-6 xl:bottom-8 h-24 md:h-52 lg:h-32 xl:h-50 bg-cover bg-center rounded-2xl'
                />
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{ backgroundImage: `url(${image1})` }}
                    className='mx-auto my-4 w-[60%] md:w-[30em] lg:absolute lg:w-1/3 lg:left-1/2 lg:bottom-4 xl:bottom-6 h-32 md:h-64 lg:h-36 xl:h-58 bg-cover bg-center rounded-2xl'
                />
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{ backgroundImage: `url(${image2})` }}
                    className='mx-auto my-4 w-[80%] md:w-[35em] lg:absolute lg:w-1/3 lg:left-1/4 lg:bottom-2 xl:bottom-4 h-40 md:h-72 lg:h-42 xl:h-64 bg-cover bg-center rounded-2xl'
                />
                <motion.div
                    initial={{ insetInline: '0%' }}
                    style={{ backgroundImage: `url(${image3})` }}
                    className='mx-auto my-4 w-full lg:absolute lg:w-1/3 lg:left-0 lg:bottom-0 h-48 md:h-96 lg:h-48 xl:h-72 bg-cover bg-center rounded-2xl'
                />
            </div>

            <div className='relative w-full h-9 md:h-20 lg:h-26 xl:h-36 2xl:h-48 overflow-hidden'>
                <div className='absolute inset-x-0 top-1/2 -translate-y-1/3 flex flex-col items-center justify-center font-reviewheavy text-[3em] md:text-[7em] lg:text-[10em] xl:text-[14em] 2xl:text-[18em] text-neutral-800'>
                    <p className='block'>DEPTH</p>
                </div>
            </div>
            <div className='relative w-full h-9 md:h-20 lg:h-26 xl:h-36 2xl:h-48 overflow-hidden'>
                <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center font-reviewheavy text-[3.5em] md:text-[8em] lg:text-[11em] xl:text-[15em] 2xl:text-[20em] text-neutral-800'>
                    <p className='block'>DEPTH</p>
                </div>
            </div>
            <div className='relative w-full h-9 md:h-20 lg:h-26 xl:h-36 2xl:h-48 overflow-hidden'>
                <div className='absolute inset-x-0 -top-1/2 -translate-y-1/3 flex flex-col items-center justify-center font-reviewheavy text-[4.5em] md:text-[9em] lg:text-[12em] xl:text-[16em] 2xl:text-[22em] text-neutral-800'>
                    <p className='block'>DEPTH</p>
                </div>
            </div>
        </div>
    )
}
