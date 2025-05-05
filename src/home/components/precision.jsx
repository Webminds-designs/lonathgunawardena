import React from 'react'
import octopus from '/images/octopus.png'
import diagonalley from '/images/diagonalley.png'

export default function precision() {
    return (
        <div className='flex flex-col space-y-10 pb-10 xl:pb-20'>

            {/* text */}
            <div className='flex flex-col lg:flex-row gap-10 px-12 w-full max-w-[1920px] mx-auto'>
                <div className='w-full'>
                    <p className='font-reviewheavy flex flex-col items-center lg:items-start text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-white'>
                        <span>PRECISION IN </span>
                        <span>EVERY PIXEL</span>
                    </p>
                </div>
                <div className='w-full'>
                    <p className='font-figtree text-balance text-center lg:text-start text-sm xl:text-base 2xl:text-2xl text-white'>From responsive layouts to brand systems, I craft each detail with obsessive care. Whether it's designing a user journey or refining a logo's curve, every decision serves a purpose. My process is built to deliver thoughtful, scalable, and intuitive results — made to stand out and built to last.</p>
                </div>
            </div>

            {/* image cards */}
            <div className='flex flex-col lg:flex-row gap-10 w-full lg:px-12 max-w-[1920px] mx-auto'>
                <div
                    style={{
                        backgroundImage: `url(${octopus})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className='w-full h-[30em] md:h-[40em] lg:h-[30em] xl:h-[40em] 2xl:h-[50em] rounded-4xl overflow-hidden'
                />
                <div
                    style={{
                        backgroundImage: `url(${diagonalley})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className='w-full h-[30em] md:h-[40em] lg:h-[30em] xl:h-[40em] 2xl:h-[50em] rounded-4xl overflow-hidden'
                />
            </div>
        </div>
    )
}
