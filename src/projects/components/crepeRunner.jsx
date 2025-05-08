import React from 'react'

export default function crepeRunner() {
    return (
        <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* title */}
            <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full'>
                <p className='flex flex-col text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-start text-center lg:text-left mb-3 xl:mb-5 2xl:mb-8'>
                    <span className='uppercase font-reviewheavy'>Crepe Runner × Snack Entity</span>
                    <span className='uppercase font-reviewheavy'>— Flavor in Motion</span>
                    <span className='uppercase font-reviewregular font-bold'>2024</span>
                </p>
                <p className='text-xs xl:text-base 2xl:text-2xl font-figtree text-center lg:text-right mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>A vibrant visual exploration created for two bold and flavorful brands: Crepe Runner and Snack Entity.</p>
            </div>

            {/* images */}
            <div className='flex flex-col space-y-2'>
                <img
                    src='/images/image2.webp'
                    className='rounded-xl'
                />
                <img
                    src='/images/image3.webp'
                    className='rounded-xl'
                />
            </div>
        </div>
    )
}
