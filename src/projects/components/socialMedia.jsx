import React from 'react'

export default function socialMedia() {

    const socialMediaImages = [
        '/images/social1.webp',
        '/images/social2.webp',
        '/images/octopus.webp',
        '/images/social4.webp',
        '/images/social5.webp',
        '/images/social6.webp',
        '/images/social7.webp',
    ]

    return (
        <div className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* social media grid - title */}
            <div className='flex flex-col lg:flex-row items-center justify-between text-black w-full'>
                <p className='flex flex-col text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-start text-center lg:text-left mb-3 xl:mb-5 2xl:mb-8'>
                    <span className='uppercase font-reviewheavy'>WebMinds – Social Media Grid</span>
                    <span className='uppercase font-reviewheavy'>Campaign</span>
                    <span className='uppercase font-reviewregular font-bold'>2024 x 2025</span>
                </p>
                <p className='text-xs xl:text-base 2xl:text-2xl font-figtree text-center lg:text-right mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0 max-w-[25em]'>A vibrant and playful collection of social media visuals crafted for WebMinds, designed to enhance brand visibility and spark engagement across digital platforms. </p>
            </div>

            {/* social media grid - images */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                {/* first image */}
                <div className=''>
                    <img
                        src={socialMediaImages[0]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Featured social media"
                    />
                </div>

                {/* Second image */}
                <div className=''>
                    <img
                        src={socialMediaImages[1]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Social media 2"
                    />
                </div>

                {/* Third image */}
                <div className=''>
                    <img
                        src={socialMediaImages[2]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Social media 3"
                    />
                </div>

                {/* fourth image */}
                <div className=''>
                    <img
                        src={socialMediaImages[3]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Social media 3"
                    />
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
                {/* fifth image */}
                <div className=''>
                    <img
                        src={socialMediaImages[4]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Social media 5"
                    />
                </div>

                {/* sixth image */}
                <div className=''>
                    <img
                        src={socialMediaImages[5]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Social media 6"
                    />
                </div>

                {/* seventh image */}
                <div className=''>
                    <img
                        src={socialMediaImages[6]}
                        className='rounded-xl w-full h-full object-cover'
                        alt="Social media 7"
                    />
                </div>
            </div>

        </div>
    )
}
