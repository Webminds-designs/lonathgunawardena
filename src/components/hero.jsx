import React from 'react'
import beyondearth from '/images/beyond_earth.png'
import selfie from '/images/selfie.png'

export default function Hero() {
    return (
        <div className='flex flex-col space-y-5 px-12'>
            {/* title */}
            <div className='flex flex-col items-center font-rapidresponse'>
                <div className='flex text-[60px] md:text-[140px] lg:text-[180px] tracking-[-0.05em] leading-[0.8]'>
                    <div>L</div>
                    <div>O</div>
                    <div>N</div>
                    <div>A</div>
                    <div>T</div>
                    <div>H</div>
                </div>
                <div className='text-[30px] md:text-[70px] lg:text-[90px] -mt-3 md:-mt-8 lg:-mt-12'>GUNAWARDENA</div>
            </div>

            {/* sub title */}
            <div className='flex justify-between items-center'>
                <div className='h-7 w-2 lg:h-14 lg:w-4 bg-black'></div>
                <p className='flex flex-col text-center font-reviewcondensed font-bold'>
                    <span>CREATIVE UI/UX &</span>
                    <span>BRAND IDENTITY DESIGNER</span>
                </p>
                <div className='h-7 w-2 lg:h-14 lg:w-4 bg-black'></div>
            </div>

            {/* human centric design */}
            <div className='relative flex flex-col lg:flex-row justify-between w-full gap-8 mt-5'>
                <div className='flex flex-col items-center lg:items-start max-w-lg mx-auto lg:mx-0'>
                    <p className='flex flex-col font-reviewheavy text-xl md:text-2xl lg:text-3xl items-center lg:items-start text-center lg:text-left mb-3'>
                        <span>HUMAN CENTRIC</span>
                        <span>DESIGN</span>
                    </p>
                    <p className='text-sm md:text-base text-center lg:text-left mb-5 px-4 lg:px-0'>
                        I'm Lonath Gunawardena — a UI/UX designer and visual creative focused on building intuitive, elegant digital products and memorable brand identities.
                        From mobile apps to Websites and logos, I merge strategy with creativity to help ideas take shape and come alive.
                    </p>
                    <div className='bg-black text-gray-200 font-reviewcondensed flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-lg hover:cursor-pointer hover:bg-gray-800 transition-colors'>
                        LET'S COLLABORATE
                    </div>
                </div>
                <div className='relative w-full max-w-md mx-auto lg:mx-0 mt-12 lg:mt-0 h-[300px] md:h-[400px]'>
                    <div 
                        style={{
                            backgroundImage: `url(${beyondearth})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '45%',
                            width: '60%',
                            left: '20%',
                        }} 
                        className='rounded-lg md:rounded-xl absolute top-0 shadow-2xl'
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
                        className='rounded-lg md:rounded-xl absolute top-1/10 shadow-2xl'
                    />
                    <div 
                        style={{
                            backgroundImage: `url(${beyondearth})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '45%',
                            width: '100%',
                        }} 
                        className='rounded-lg md:rounded-xl absolute top-2/10 shadow-2xl'
                    />
                </div>

                {/* divider */}
                <div className="absolute bottom-12 w-full h-px bg-gray-300"></div>
            </div>

            {/* selfie */}
            <div className='relative w-full bg-black rounded-lg md:rounded-xl overflow-hidden'>
                <div
                    className='w-full h-[200px] md:h-[500px] rounded-lg md:rounded-xl shadow-2xl opacity-40'
                    style={{
                        backgroundImage: `url(${selfie})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
                <div className='absolute inset-0 flex flex-col items-center justify-center'>
                    <h2 className='text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl text-white leading-tight'>
                        <span className='block'>MEET</span>
                        <span className='block'>LONATH</span>
                    </h2>
                </div>
            </div>

        </div>
    )
}
