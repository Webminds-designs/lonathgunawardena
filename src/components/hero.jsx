import React from 'react'
import beyondearth from '/images/beyond_earth.png'
import selfie from '/images/selfie.png'

export default function Hero() {
    return (
        <div className='flex flex-col space-y-5 px-12 w-full max-w-[1920px] mx-auto pb-10 md:pb-14 lg:pb-20 xl:pb-24 2xl:pb-32'>
            {/* title */}
            <div className='flex flex-col items-center font-rapidresponse'>
                <div className='flex text-[60px] md:text-[140px] lg:text-[180px] xl:text-[220px] 2xl:text-[260px] tracking-[-0.05em] 2xl:leading-[0.9] leading-[0.8]'>
                    <div>L</div>
                    <div>O</div>
                    <div>N</div>
                    <div>A</div>
                    <div>T</div>
                    <div>H</div>
                </div>
                <div className='text-[30px] md:text-[70px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px] -mt-3 md:-mt-8 lg:-mt-12 xl:-mt-16 2xl:-mt-20'>GUNAWARDENA</div>
            </div>

            {/* sub title */}
            <div className='flex justify-between items-center'>
                <div className='h-7 w-2 lg:h-14 lg:w-4 xl:h-16 xl:w-5 2xl:h-20 2xl:w-6 bg-black'></div>
                <p className='flex flex-col text-center font-reviewcondensed font-bold text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
                    <span>CREATIVE UI/UX &</span>
                    <span>BRAND IDENTITY DESIGNER</span>
                </p>
                <div className='h-7 w-2 lg:h-14 lg:w-4 xl:h-16 xl:w-5 2xl:h-20 2xl:w-6 bg-black'></div>
            </div>

            {/* human centric design */}
            <div className='relative flex flex-col lg:flex-row justify-between w-full gap-8 mt-5 xl:mt-10 2xl:mt-16'>
                <div className='flex flex-col items-center lg:items-start max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0'>
                    <p className='flex flex-col font-reviewheavy text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl items-center lg:items-start text-center lg:text-left mb-3 xl:mb-5 2xl:mb-8'>
                        <span>HUMAN CENTRIC</span>
                        <span>DESIGN</span>
                    </p>
                    <p className='text-xs xl:text-base 2xl:text-2xl font-figtree text-center lg:text-left mb-5 xl:mb-8 2xl:mb-12 px-4 lg:px-0'>
                        I'm Lonath Gunawardena — a UI/UX designer and visual creative focused on building intuitive, elegant digital products and memorable brand identities.
                        From mobile apps to Websites and logos, I merge strategy with creativity to help ideas take shape and come alive.
                    </p>
                    <div className='bg-black text-gray-200 font-reviewcondensed flex items-center justify-center px-8 py-4 md:px-10 md:py-5 xl:px-12 xl:py-6 2xl:px-16 2xl:py-8 rounded-lg text-base md:text-lg xl:text-xl 2xl:text-2xl hover:cursor-pointer hover:bg-gray-800 transition-colors'>
                        LET'S COLLABORATE
                    </div>
                </div>
                <div className='relative w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto lg:mx-0 mt-12 lg:mt-0 h-[300px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'>
                    <div 
                        style={{
                            backgroundImage: `url(${beyondearth})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '45%',
                            width: '60%',
                            left: '20%',
                        }} 
                        className='rounded-lg md:rounded-xl xl:rounded-2xl absolute top-0 shadow-2xl'
                    />
                    <div 
                        style={{
                            backgroundImage: `url(${beyondearth})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '45%',
                            width: '80%',
                            left: '10%',
                        }} 
                        className='rounded-lg md:rounded-xl xl:rounded-2xl absolute top-1/10 shadow-2xl'
                    />
                    <div 
                        style={{
                            backgroundImage: `url(${beyondearth})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '45%',
                            width: '100%',
                        }} 
                        className='rounded-lg md:rounded-xl xl:rounded-2xl absolute top-2/10 shadow-2xl'
                    />
                </div>

                {/* divider */}
                <div className="absolute bottom-12 xl:bottom-16 2xl:bottom-24 w-full h-px bg-stone-400"></div>
            </div>

            {/* selfie */}
            <div className='relative w-full bg-black rounded-lg md:rounded-xl xl:rounded-2xl overflow-hidden'>
                <div
                    className='w-full h-[200px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] rounded-lg md:rounded-xl xl:rounded-2xl shadow-2xl opacity-40'
                    style={{
                        backgroundImage: `url(${selfie})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h2 className='text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-white leading-tight'>
                        <span className='block'>MEET</span>
                        <span className='block'>LONATH</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
