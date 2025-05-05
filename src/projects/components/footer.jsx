import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* contact */}
            <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full'>
                <p className='flex flex-col text-xs xl:text-base 2xl:text-2xl font-figtree font-bold capitalize text-center lg:text-left mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>
                    <span>Got A Project in mind?</span>
                    <span>Let’s bring your vision to life — branding, design,</span>
                    <span> or digital, I’m in.</span>
                </p>
                <p className='flex flex-col text-xs xl:text-base 2xl:text-2xl font-figtree font-bold capitalize text-center lg:text-right mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>
                    <span>lonath@webmindsdesigns.com</span>
                    <span>+94 77 123 4567</span>
                    <span>WebMinds Studio</span>
                    <span>Colombo, Sri Lanka</span>
                </p>
            </div>

            {/* divider */}
            <div className="w-full h-px bg-stone-400 mt-20"></div>

            {/* bottom row */}
            <div className='flex flex-col lg:flex-row justify-between gap-10 font-reviewheavy text-sm md:text-md xl:text-xl 2xl:text-3xl text-center lg:text-left mt-5 lg:mt-10 text-black'>
                <p>CREATIVE DESIGN & DIGITAL EXPERIENCES.</p>
                <p>UI/UX · BRANDING · GRAPHIC DESIGN</p>
                {/* <p>lk.gcm29@gmail.com</p> */}
            </div>
        </div>
    )
}
