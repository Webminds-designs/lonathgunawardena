import React from 'react'

export default function Footer() {
    return (
        <div id='footer' className='flex flex-col px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            <div className='flex flex-col-reverse lg:flex-row justify-between gap-10'>
                {/* stylish text - left side */}
                <div className='flex flex-col w-full lg:w-2/3 justify-center items-center space-y-1 text-black'>
                    <div className='relative flex justify-center items-center w-full h-3 md:h-7 2xl:h-12 overflow-hidden'>
                        <div className='absolute -top-3 md:-top-9 2xl:-top-16 flex justify-center font-reviewheavy text-[2em] md:text-[5.5em] 2xl:text-[10em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-full h-5 md:h-7 2xl:h-14 overflow-hidden'>
                        <div className='absolute -top-4 md:-top-10 2xl:-top-20 flex justify-center font-reviewheavy text-[2.5em] md:text-[6em] 2xl:text-[12em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-full h-5 md:h-7 2xl:h-14 overflow-hidden'>
                        <div className='absolute -top-5 md:-top-10 2xl:-top-24 flex justify-center font-reviewheavy text-[3em] md:text-[6.5em] 2xl:text-[14em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-full h-10 md:h-20 2xl:h-44 overflow-hidden'>
                        <div className='absolute flex justify-center font-reviewheavy text-[3.5em] md:text-[7em] 2xl:text-[16em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-full h-5 md:h-7 2xl:h-14 overflow-hidden'>
                        <div className='absolute -bottom-5 md:-bottom-10 2xl:-bottom-20 flex justify-center font-reviewheavy text-[3em] md:text-[6.5em] 2xl:text-[14em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-full h-5 md:h-7 2xl:h-14 overflow-hidden'>
                        <div className='absolute -bottom-4 md:-bottom-10 2xl:-bottom-16 flex justify-center font-reviewheavy text-[2.5em] md:text-[6em] 2xl:text-[12em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                    <div className='relative flex justify-center items-center w-full h-3 md:h-7 2xl:h-12 overflow-hidden'>
                        <div className='absolute -bottom-3 md:-bottom-9 2xl:-bottom-12 flex justify-center font-reviewheavy text-[2em] md:text-[5.5em] 2xl:text-[10em]'>
                            <p>IMPRINT</p>
                        </div>
                    </div>
                </div>

                {/* right side text */}
                <div className='flex flex-col items-center lg:items-end space-y-10 w-full lg:w-1/3 text-black'>
                    <p className='flex flex-col font-reviewheavy text-4xl xl:text-5xl 2xl:text-7xl text-center lg:text-right'>
                        <span>BE PART OF THE </span>
                        <span>VISION</span>
                    </p>
                    <p className='font-figtree text-sm xl:text-base 2xl:text-2xl text-center lg:text-right'>I’m always looking to collaborate with forward-thinking brands, startups, and creatives who value thoughtful design and bold ideas. Whether you need a digital product, a new identity, or just want to brainstorm something beautiful—this is your invitation to start.The next story starts with a conversation.</p>
                    <div className='font-reviewregular text-sm xl:text-base 2xl:text-2xl bg-black text-white text-right px-10 py-5 rounded-xl'>LET'S CREATE TOGETHER</div>
                </div>
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
