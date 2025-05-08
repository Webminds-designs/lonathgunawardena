import React from 'react'

export default function comingSoonPosters() {
    return (
        <div className='flex flex-col space-y-1 md:space-y-5 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* top image */}
            <div className='relative'>
                {/* text */}
                <div className='absolute bottom-0 right-0 p-2 md:p-10'>
                    <p className='flex flex-col text-xs md:text-2xl lg:text-3xl xl:text-xl 2xl:text-5xl items-end text-center md:text-right mb-3 xl:mb-5 2xl:mb-8'>
                        <span className='uppercase font-reviewheavy'>Harry's queue – Launch</span>
                        <span className='uppercase font-reviewheavy'>Teasers</span>
                    </p>
                    <p className='flex flex-col text-xs md:text-2xl lg:text-3xl xl:text-xl 2xl:text-5xl items-end text-center md:text-right mb-3 xl:mb-5 2xl:mb-8'>
                        <span className='uppercase font-reviewheavy'>2022</span>
                        <span className='capitalize font-figtree text-[1vh] md:text-xs lg:text-sm 2xl:text-lg'>A dramatic and elegant teaser campaign </span>
                        <span className='capitalize font-figtree text-[1vh] md:text-xs lg:text-sm 2xl:text-lg'>designed for the 2022 launch of Harry’s </span>
                        <span className='capitalize font-figtree text-[1vh] md:text-xs lg:text-sm 2xl:text-lg'>Queue, a rising modeling agency.</span>
                    </p>
                </div>
                <img
                    src='/images/coming_soon.webp'
                    className='rounded-xl'
                />
            </div>

            {/* middle images */}
            <div className='flex justify-between w-full space-x-1 md:space-x-5'>
                <div className='flex flex-col w-1/2 space-y-1 md:space-y-5'>
                    <div className='flex w-full h-full space-x-0.5 md:space-x-2.5'>
                        <img
                            src='/images/coming_soon_post.webp'
                            className='rounded-xl object-cover w-1/2'
                        />
                        <img
                            src='/images/launching_post.webp'
                            className='rounded-xl object-cover w-1/2'
                        />
                    </div>
                    <img
                        src='/images/flow.webp'
                        className='rounded-xl object-cover'
                    />
                </div>
                <img
                    src='/images/coming_soon_insta.webp'
                    className='rounded-xl w-1/2 object-cover'
                />
            </div>

            {/* bottom image */}
            <img
                src='/images/launching.webp'
                className='rounded-xl'
            />
        </div>
    )
}
