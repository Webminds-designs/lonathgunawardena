import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Preloader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

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

    // Calculate total progress (50% for images, 50% for fonts)
    const updateProgress = () => {
      const imageProgress =
        allImages.length > 0 ? (imagesLoaded / allImages.length) * 50 : 50;
      const fontProgress = fontsLoaded ? 50 : 0;
      const totalProgress = imageProgress + fontProgress;
      setProgress(totalProgress);
    };

    // Image loading
    if (allImages.length === 0) {
      imagesLoaded = allImages.length;
      updateProgress();
    } else {
      allImages.forEach((img) => {
        if (img.complete) {
          imagesLoaded++;
          updateProgress();
        } else {
          img.addEventListener('load', () => {
            imagesLoaded++;
            updateProgress();
          });
          img.addEventListener('error', () => {
            imagesLoaded++;
            updateProgress();
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
        updateProgress();
      } catch (error) {
        console.error('Font loading error:', error);
        fontsLoaded = true;
        updateProgress();
      }
    };
    checkFonts();

    // Complete loading when progress reaches 100
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onLoadingComplete();
        }, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete, progress]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Top letters animation */}
      <div className="flex overflow-hidden mb-10">
        {['L', 'O', 'N', 'A', 'T', 'H'].map((letter, index) => (
          <motion.div
            key={index}
            className="font-rapidresponse text-white text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            {letter}
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-[60%] max-w-[500px] h-[3px] bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeInOut' }}
        />
      </div>

      {/* Progress percentage */}
      <motion.p
        className="font-reviewcondensed text-stone-300 mt-6 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        {Math.floor(progress)}%
      </motion.p>
    </motion.div>
  );
}