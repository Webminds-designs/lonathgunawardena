import React from 'react'

export default function diagonAlley() {
    return (
        <div className='flex flex-col items-center space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* title */}
            <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full'>
                <p className='text-xs xl:text-base 2xl:text-2xl font-figtree text-center lg:text-left mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>A magical-themed visual created for the SLIIT Interactive Media VR/AR Exhibition, commemorating SLIIT’s 25th Anniversary. </p>
                <p className='flex flex-col text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-end text-center lg:text-right mb-3 xl:mb-5 2xl:mb-8'>
                    <span className='uppercase font-reviewheavy'>Diagon Alley – VR/AR</span>
                    <span className='uppercase font-reviewheavy'>Exhibition Showcase</span>
                    <span className='uppercase font-reviewregular font-bold'>2025</span>
                </p>
            </div>

            {/* image */}
            <img
                src='/images/diagonalley.webp'
                className='rounded-xl w-full max-w-4xl'
            />
        </div>
    )
}
