import React, { useState, useEffect } from 'react'
import HomePage from './home/layout.jsx'
import ProjectsPage from './projects/layout.jsx'
import Preloader from './preloader.jsx'
import { AnimatePresence } from 'motion/react'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  
  useEffect(() => {
    // Track both images and fonts loading
    const allImages = document.querySelectorAll('img')
    let imagesLoaded = 0
    let fontsLoaded = false
    
    // Function to check if everything is loaded
    const checkAllLoaded = () => {
      const areImagesLoaded = allImages.length === 0 || imagesLoaded === allImages.length
      if (areImagesLoaded && fontsLoaded) {
        // Everything loaded - give minimum time for preloader visibility
        setTimeout(() => setLoading(false), 1000)
      }
    }

    // Check specific fonts loading (add your preloader fonts here)
    const preloaderFonts = [
      'ReviewHeavy',
      'ReviewRegular',
      'ReviewCondensed',
      'RapidResponse',
      'Figtree'
    ]

    // Check fonts loading
    if (document.fonts && document.fonts.ready) {
      Promise.all(
        preloaderFonts.map(font => 
          document.fonts.load(`1em ${font}`).catch(err => {
            console.warn(`Font loading failed for ${font}:`, err);
            return null; // Continue even if one font fails
          })
        )
      ).then(() => {
        // Wait for document.fonts.ready as additional safety
        document.fonts.ready.then(() => {
          fontsLoaded = true;
          checkAllLoaded();
        });
      });
    } else {
      // Fallback if fonts API not supported
      fontsLoaded = true;
    }
    
    if (allImages.length === 0) {
      checkAllLoaded()
      return
    }
    
    // Count images as they load
    allImages.forEach(img => {
      if (img.complete) {
        imagesLoaded++
        checkAllLoaded()
      } else {
        img.addEventListener('load', () => {
          imagesLoaded++
          checkAllLoaded()
        })
      }
    })
    
    // Fallback if assets don't load or are cached
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
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  )
}
