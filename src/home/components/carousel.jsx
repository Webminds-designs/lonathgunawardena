import React, { useEffect, useRef } from 'react'
import photoshop from '/images/photoshop.webp'
import figma from '/images/figma.webp'
import illustrator from '/images/illustrator.webp'
import premiere_pro from '/images/premiere-pro.webp'

export default function Carousel() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (marqueeRef.current) {
        const marqueeWidth = marqueeRef.current.scrollWidth;
        const containerWidth = marqueeRef.current.parentNode.offsetWidth;

        // Adjust animation speed based on content width
        const animationDuration = (marqueeWidth / 200) + 's';
        marqueeRef.current.style.animationDuration = animationDuration;
      }
    });

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Items to display
  const items = [
    { id: 1, image: photoshop, name: 'Photoshop' },
    { id: 2, image: illustrator, name: 'Illustrator' },
    { id: 3, image: figma, name: 'Figma' },
    { id: 4, image: premiere_pro, name: 'Premiere Pro' },
  ];

  return (
    <div className="relative w-full mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee py-3">
          {/* Render items twice to create the illusion of infinite loop */}
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className='flex flex-col items-center justify-center marquee-item'
            >
              <div className='flex items-center justify-center bg-white p-2 md:p-4 xl:p-6 2xl:p-10 rounded-lg lg:rounded-2xl'>
                <img src={item.image} alt={item.name} className='w-4 md:w-6 xl:w-8 2xl:w-14' />
              </div>
              <p className='font-reviewheavy text-center text-xl md:text-3xl lg:text-5xl 2xl:text-8xl text-white mt-4'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Add required CSS for the marquee animation */}
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        .marquee {
          display: flex;
          will-change: transform;
          animation: marquee 40s linear infinite;
        }
        .marquee-item {
          flex: 0 0 auto;
          min-width: 250px;
          padding: 0 5rem;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3 * 2));
          }
        }
        /* Pause on hover */
        .marquee-container:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
