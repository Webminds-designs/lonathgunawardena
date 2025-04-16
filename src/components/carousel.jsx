import React, { useEffect, useState, useRef } from 'react'
import photoshop from '/images/photoshop.png'
import figma from '/images/figma.png'
import illustrator from '/images/illustrator.png'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  // Original items
  const originalItems = [
    { id: 1, image: photoshop, name: 'Photoshop' },
    { id: 2, image: illustrator, name: 'Illustrator' },
    { id: 3, image: figma, name: 'Figma' },
  ];
  
  // Add a clone of the first item to the end for seamless looping
  const items = [
    ...originalItems,
    { ...originalItems[0], id: 'clone-first' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Simply move to the next slide, including the clone
      setCurrentIndex(prevIndex => {
        // If we're at the clone (last position), we'll handle the reset after transition
        if (prevIndex === originalItems.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000); // Slower transition for better visibility

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!carouselRef.current) return;
    
    // Always apply transition for smooth movement
    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    
    // Special case: when resetting from clone to first
    if (currentIndex === 0 && carouselRef.current.style.transform.includes(`-${originalItems.length * (100 / items.length)}%`)) {
      // First disable transition for instant jump
      carouselRef.current.style.transition = 'none';
      // Then apply the transform for position 0
      setTimeout(() => {
        carouselRef.current.style.transform = `translateX(0%)`;
      }, 0);
    } else {
      // Normal slide transition
      carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / items.length)}%)`;
    }
  }, [currentIndex]);

  // Handle the case when we finish transitioning to the clone
  const handleTransitionEnd = () => {
    if (currentIndex === 0 && carouselRef.current) {
      // Reset smooth transition for next movement
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  };

  return (
    <div className="relative overflow-hidden w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32 px-12">
      <div 
        ref={carouselRef}
        className="flex w-full"
        style={{ width: `${items.length * 100}%` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {items.map((item) => (
          <div 
            key={item.id} 
            className='flex flex-col items-center justify-center w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24'
          >
            <div className='flex items-center justify-center bg-white p-2 md:p-4 xl:p-6 2xl:p-10 rounded-lg lg:rounded-2xl'>
                <img src={item.image} alt={item.name} className='w-4 md:w-6 xl:w-8 2xl:w-14' />
            </div>
            <p className='font-reviewheavy text-center text-xl md:text-3xl lg:text-5xl 2xl:text-8xl text-white mt-4'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
