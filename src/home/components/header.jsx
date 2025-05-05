import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'motion/react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // HOME title
    // Transform title text color when pixels section reaches the top
    const pixelsTitleColor = useTransform(
        pixelsScrollProgress,
        [0.9, 1], // When pixels section is almost at the top
        ["rgb(0, 0, 0)", "rgb(214, 211, 209)"] // From black to stone-300
    )

    // Transform title text color when designs section reaches the top
    const designsTitleColor = useTransform(
        designsScrollProgress,
        [0.9, 1], // When designs section is almost at the top
        ["rgb(214, 211, 209)", "rgb(0, 0, 0)"] // From stone-300 to black
    )

    // Transform title text color when footer section reaches the top
    const footerTitleColor = useTransform(
        footerScrollProgress,
        [0.9, 1], // When footer section is almost at the top
        ["rgb(0, 0, 0)", "rgb(214, 211, 209)"] // From black to stone-300
    )

    // Combine all text colors for the title
    const combinedTitleColor = useTransform(
        [pixelsScrollProgress, designsScrollProgress, footerScrollProgress],
        ([pixelsProgress, designsProgress, footerProgress]) => {
            if (footerProgress >= 0.9) return footerTitleColor.get();
            if (designsProgress >= 0.9) return designsTitleColor.get();
            if (pixelsProgress >= 0.9) return pixelsTitleColor.get();
            return "rgb(0, 0, 0)"; // Default text color is black
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
            className='fixed flex justify-between items-center w-full h-6 md:h-14 lg:h-16 xl:h-20 2xl:h-22 px-4 md:px-12 z-10'>

            {/* Left side - empty space for balance on larger screens, hamburger menu on mobile */}
            <div className="flex items-center">
                <motion.button
                    className="block md:hidden focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{ color: combinedTitleColor }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </motion.button>
                <div className="hidden md:block w-24 md:w-40"></div>
            </div>

            {/* Right side - Navigation (visible on md and up) */}
            <div className="hidden md:flex space-x-6 md:space-x-10 font-reviewheavy">
                <motion.a
                    href="/"
                    style={{ color: combinedTitleColor }}
                    className="font-semibold text-sm md:text-base lg:text-lg transition-colors hover:opacity-80"
                >
                    HOME
                </motion.a>
                <motion.a
                    href="/projects"
                    // style={{ color: textColor }}
                    className="font-semibold text-sm md:text-base lg:text-lg transition-colors hover:opacity-80 text-gray-400"
                >
                    PROJECTS
                </motion.a>
            </div>

            {/* Placeholder div to balance the header on mobile */}
            <div className="block md:hidden w-6"></div>

            {/* Mobile menu - slides in from top when open */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        backgroundColor: combinedBackgroundColor,
                        borderBottom: `1px solid`,
                        borderBottomColor: combinedBorderColor,
                    }}
                    className="fixed top-6 left-0 w-full z-9 shadow-md md:hidden"
                >
                    <div className="flex flex-col py-4 px-4">
                        <motion.a
                            href="/"
                            style={{ color: combinedTitleColor }}
                            className="py-3 text-center font-reviewheavy transition-colors hover:opacity-80"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            HOME
                        </motion.a>
                        <motion.a
                            href="/projects"
                            // style={{ color: textColor }}
                            className="py-3 text-center font-reviewheavy hover:opacity-80 text-gray-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            PROJECTS
                        </motion.a>
                    </div>
                </motion.div>
            )}

        </motion.div>
    )
}
