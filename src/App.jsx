import React, { useState, useEffect } from 'react';
import HomePage from './home/layout.jsx';
import ProjectsPage from './projects/layout.jsx';
import Preloader from './preloader.jsx';
import { AnimatePresence } from 'motion/react';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let imagesLoaded = 0;
    let fontsLoaded = false;
    const allImages = document.querySelectorAll('img');
    const fontFamilies = [
      'RapidResponse',
      'ReviewCondensed',
      'ReviewRegular',
      'ReviewHeavy',
      'Figtree',
    ];

    // Function to check if all assets are loaded
    const checkAllLoaded = () => {
      if (imagesLoaded >= allImages.length && fontsLoaded) {
        setTimeout(() => setLoading(false), 1000); // Minimum preloader visibility
      }
    };

    // Image loading
    if (allImages.length === 0) {
      imagesLoaded = allImages.length; // No images to load
    } else {
      allImages.forEach((img) => {
        if (img.complete) {
          imagesLoaded++;
          checkAllLoaded();
        } else {
          img.addEventListener('load', () => {
            imagesLoaded++;
            checkAllLoaded();
          });
          img.addEventListener('error', () => {
            imagesLoaded++; // Treat errors as loaded to avoid hanging
            checkAllLoaded();
          });
        }
      });
    }

    // Font loading
    const checkFonts = async () => {
      try {
        await Promise.all(
          fontFamilies.map((font) => document.fonts.load(`1em ${font}`))
        );
        fontsLoaded = true;
        checkAllLoaded();
      } catch (error) {
        console.error('Font loading error:', error);
        fontsLoaded = true; // Proceed even if fonts fail to avoid hanging
        checkAllLoaded();
      }
    };
    checkFonts();

    // Fallback timeout
    setTimeout(() => {
      fontsLoaded = true;
      imagesLoaded = allImages.length;
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        window.scrollTo(0, 0);
        setContentVisible(true);
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
        id="main"
        className="flex flex-col items-center"
        style={{
          opacity: contentVisible ? 1 : 0,
          visibility: contentVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.5s ease',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  );
}