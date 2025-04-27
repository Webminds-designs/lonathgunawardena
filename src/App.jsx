import React, { useState, useEffect } from 'react'
import Hero from './components/hero.jsx'
import Pixels from './components/pixels.jsx'
import Precision from './components/precision.jsx'
import Designs from './components/designs.jsx'
import Carousel from './components/carousel.jsx'
import Bgimage from './components/bgimage.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Preloader from './components/preloader.jsx'
import { motion, AnimatePresence } from 'motion/react'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  
  // Optional: You can use this to ensure all assets are loaded
  useEffect(() => {
    // This will run after component mounts
    const allImages = document.querySelectorAll('img')
    let imagesLoaded = 0
    
    if (allImages.length === 0) {
      // If there are no images to load, wait a minimum time for visual effect
      setTimeout(() => setLoading(false), 2500)
      return
    }
    
    // Count images as they load
    allImages.forEach(img => {
      if (img.complete) {
        imagesLoaded++
      } else {
        img.addEventListener('load', () => {
          imagesLoaded++
          if (imagesLoaded === allImages.length) {
            // All images loaded - give minimum time for preloader visibility
            setTimeout(() => setLoading(false), 1000)
          }
        })
      }
    })
    
    // Fallback if images don't load or are cached
    setTimeout(() => setLoading(false), 5000)
  }, [])

  // Handle smooth transition from preloader to content
  useEffect(() => {
    if (!loading) {
      // Slight delay to ensure smooth transition
      setTimeout(() => {
        // Reset scroll position to top
        window.scrollTo(0, 0);
        // Make content visible
        setContentVisible(true);
        // Force reflow to ensure header positioning is calculated properly
        document.getElementById('main').getBoundingClientRect();
      }, 100);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      <div 
        id='main' 
        className={`flex flex-col items-center`}
        style={{ 
          opacity: contentVisible ? 1 : 0,
          visibility: contentVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.5s ease' 
        }}
      >
        <div className='bg-stone-300 w-full'>
          <Header />
        </div>
        <div className='bg-stone-300 w-full'>
          <Hero />
        </div>
        <div className='bg-black w-full'>
          <Pixels />
        </div>
        <div className='bg-black w-full'>
          <Precision />
        </div>
        <div className='bg-stone-300 w-full'>
          <Designs />
        </div>
        <div className='bg-black w-full'>
          <Carousel />
        </div>
        <div style={{ backgroundImage: `url(/images/launching.png)` }} className='bg-cover bg-center w-full h-screen'>
          <Bgimage />
        </div>
        <div className='bg-stone-300 w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}
