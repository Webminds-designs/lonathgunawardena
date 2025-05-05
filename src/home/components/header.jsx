import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react'

export default function Header() {
    const mainRef = useRef(null)
    const pixelsRef = useRef(null)
    const designsRef = useRef(null)
    const footerRef = useRef(null)

    useEffect(() => {
        // get the App.jsx main div element
        mainRef.current = document.getElementById('main')
        // get the pixels div element
        pixelsRef.current = document.getElementById('pixels')
        // get the designs div element
        designsRef.current = document.getElementById('designs')
        // get the footer div element
        footerRef.current = document.getElementById('footer')
    }, [])

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["start start", "end start"]
    })

    // Track when pixels section intersects with header
    const { scrollYProgress: pixelsScrollProgress } = useScroll({
        target: pixelsRef,
        offset: ["start end", "start start"] // From pixels entering viewport to reaching top
    })

    // Track when designs section intersects with header
    const { scrollYProgress: designsScrollProgress } = useScroll({
        target: designsRef,
        offset: ["start end", "start start"] // From designs entering viewport to reaching top
    })

    // Track when footer section intersects with header
    const { scrollYProgress: footerScrollProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "start start"] // From footer entering viewport to reaching top
    })

    // Transform background color when pixels section reaches the top
    const pixelsBackgroundColor = useTransform(
        pixelsScrollProgress,
        [0.9, 1], // When pixels section is almost at the top
        ["rgb(214, 211, 209)", "rgb(0, 0, 0)"] // From stone-300 to black
    )

    // Transform background color when designs section reaches the top
    const designsBackgroundColor = useTransform(
        designsScrollProgress,
        [0.9, 1], // When designs section is almost at the top
        ["rgb(0, 0, 0)", "rgb(214, 211, 209)"] // From stone-300 to black
    )

    // Transform background color when footer section reaches the top
    const footerBackgroundColor = useTransform(
        footerScrollProgress,
        [0.9, 1], // When footer section is almost at the top
        ["rgb(214, 211, 209)", "rgb(0, 0, 0)"] // From stone-300 to black
    )

    // Transform border color in the header when pixels section reaches the top
    const pixelsBorderColor = useTransform(
        pixelsScrollProgress,
        [0.9, 1],
        ["rgb(163, 163, 163)", "rgb(64, 64, 64)"] // From stone-400 to neutral-700
    )

    // Transform border color in the header when designs section reaches the top
    const designsBorderColor = useTransform(
        designsScrollProgress,
        [0.9, 1],
        ["rgb(64, 64, 64)", "rgb(163, 163, 163)"] // From neutral-700 to stone-400
    )

    // Transform border color in the header when footer section reaches the top
    const footerBorderColor = useTransform(
        footerScrollProgress,
        [0.9, 1],
        ["rgb(163, 163, 163)", "rgb(64, 64, 64)"] // From stone-400 to neutral-700
    )

    // Combine all background colors
    const combinedBackgroundColor = useTransform(
        [pixelsScrollProgress, designsScrollProgress, footerScrollProgress],
        ([pixelsProgress, designsProgress, footerProgress]) => {
            if (footerProgress >= 0.9) return footerBackgroundColor.get();
            if (designsProgress >= 0.9) return designsBackgroundColor.get();
            if (pixelsProgress >= 0.9) return pixelsBackgroundColor.get();
            return "rgb(214, 211, 209)"; // Default color
        }
    );

    // Combine all border colors
    const combinedBorderColor = useTransform(
        [pixelsScrollProgress, designsScrollProgress, footerScrollProgress],
        ([pixelsProgress, designsProgress, footerProgress]) => {
            if (footerProgress >= 0.9) return footerBorderColor.get();
            if (designsProgress >= 0.9) return designsBorderColor.get();
            if (pixelsProgress >= 0.9) return pixelsBorderColor.get();
            return "rgb(163, 163, 163)"; // Default color
        }
    );

    return (
        <motion.div
            style={{
                opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]),
                backgroundColor: combinedBackgroundColor,
                borderBottom: `1px solid`,
                borderBottomColor: combinedBorderColor,
            }}
            className='fixed flex justify-center w-full h-6 md:h-14 lg:h-16 xl:h-20 2xl:h-22 z-10'>

        </motion.div>
    )
}
