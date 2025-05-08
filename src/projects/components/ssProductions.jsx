import React from 'react'

export default function ssProductions() {
    return (
        <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* title */}
            <p className='flex flex-col text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-end text-center lg:text-right mb-3 xl:mb-5 2xl:mb-8 text-black'>
                <span className='uppercase font-reviewheavy'>SS PRODUCTIONS</span>
                <span className='uppercase font-reviewregular font-bold'>2019</span>
            </p>

            {/* images */}
            <div className='flex flex-col space-y-2'>
                <img
                    src='/images/labourday.webp'
                    className='rounded-xl'
                />
                <img
                    src='/images/beyond_earth.webp'
                    className='rounded-xl'
                />
            </div>
        </div>
    )
}
