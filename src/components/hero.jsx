import React, { useRef, useState, useEffect } from 'react'
import beyondearth from '/images/beyond_earth.png'
import selfie from '/images/selfie.png'
import { motion, useScroll, useTransform } from 'motion/react'

function useResponsiveTransform(scrollProgress, breakpoints) {
  const [values, setValues] = useState({
    mobile: { scale: [1, 1, 0.2, 0.2], y: [-20, -20, -60, -60] },
    tablet: { scale: [1, 1, 0.25, 0.25], y: [-30, -30, -80, -80] },
    laptop: { scale: [1, 1, 0.23, 0.23], y: [-35, -35, -110, -110] },
    laptopL: { scale: [1, 1, 0.22, 0.22], y: [-40, -40, -130, -130] },
    desktop: { scale: [1, 1, 0.2, 0.2], y: [-50, -50, -147, -147] },
    fourK: { scale: [1, 1, 0.18, 0.18], y: [-60, -60, -130, -130] }
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop');
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 425) setCurrentBreakpoint('mobile');
      else if (window.innerWidth <= 768) setCurrentBreakpoint('tablet');
      else if (window.innerWidth <= 1024) setCurrentBreakpoint('laptop');
      else if (window.innerWidth <= 1440) setCurrentBreakpoint('laptopL');
      else if (window.innerWidth <= 2560) setCurrentBreakpoint('desktop');
      else setCurrentBreakpoint('fourK');
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scaleTransform = useTransform(
    scrollProgress, 
    breakpoints, 
    values[currentBreakpoint].scale
  );
  
  const yTransform = useTransform(
    scrollProgress, 
    breakpoints, 
    values[currentBreakpoint].y
  );

  return { scaleTransform, yTransform };
}

export default function Hero() {
    const containerRef = useRef(null)
    const selfieRef = useRef(null)  // Add a new ref for the selfie section

    // For a sticky effect where the title stays in place until subtitle reaches top
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    // Add scroll tracking for the selfie section
    const { scrollYProgress: selfieScrollProgress } = useScroll({
        target: selfieRef,
        offset: ["start end", "end start"]
    })

    // Create a scale transform for the selfie that changes between 0.9 and 1.1 based on scroll position
    const selfieScale = useTransform(
        selfieScrollProgress,
        [0, 0.7, 1],
        [0.7, 1, 1]
    )

    const isMobile = window.innerWidth < 768;
    const animationProgress = isMobile 
        ? [0, 0.15, 0.3, 1] // Slower animation on mobile
        : [0, 0.1, 0.2, 1];  // Standard animation on desktop

    const { scaleTransform, yTransform } = useResponsiveTransform(scrollYProgress, animationProgress);

    return (
        <div ref={containerRef} className='flex flex-col space-y-5 px-12 w-full max-w-[1920px] mx-auto pb-10 md:pb-14 lg:pb-20 xl:pb-24 2xl:pb-32'>            
            {/* title - using position sticky for a more reliable fixed effect */}
            <motion.div 
                style={{ 
                    scale: scaleTransform,
                    y: yTransform,
                }}
                className='fixed top-5 md:-top-4 lg:top-0 xl:-top-8 2xl:-top-10 left-1/2 right-1/2 pt-12 flex flex-col items-center font-rapidresponse z-20'>
                <div className='flex text-[60px] md:text-[140px] lg:text-[180px] xl:text-[265px] 2xl:text-[290px] tracking-[-0.05em] 2xl:leading-[0.9] leading-[0.8]'>
                    <div>L</div>
                    <div>O</div>
                    <div>N</div>
                    <div>A</div>
                    <div>T</div>
                    <div>H</div>
                </div>
                <div className='text-[30px] md:text-[70px] lg:text-[90px] xl:text-[133px] 2xl:text-[147px] -mt-3 md:-mt-8 lg:-mt-12 xl:-mt-16 2xl:-mt-20'>GUNAWARDENA</div>
            </motion.div>

            {/* sub title */}
            <div className='flex justify-between items-center mt-30 md:mt-60 lg:mt-72 xl:mt-96 2xl:mt-[30em]'>
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
            <motion.div 
                ref={selfieRef}
                style={{
                    scale: selfieScale
                }}
                className='relative w-full bg-black rounded-lg md:rounded-xl xl:rounded-2xl overflow-hidden'>
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
            </motion.div>
        </div>
    )
}
