import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react'

export default function LetsTalk() {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
    const [hoveringItem, setHoveringItem] = useState(null); // 'webminds' or 'instagram' or null

    // Update cursor position when mouse moves
    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        if (hoveringItem) {
            window.addEventListener('mousemove', updateCursorPosition);
        }

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        };
    }, [hoveringItem]);

    // Custom cursor content based on which image is being hovered
    const renderCustomCursor = () => {
        if (hoveringItem === 'webminds') {
            return (
                <div className='flex flex-col text-xs md:text-base items-center border border-white rounded-full bg-white/20 p-5 backdrop-blur-sm'>
                    <span>check my</span>
                    <span>company</span>
                    <span>website</span>
                </div>
            );
        } else if (hoveringItem === 'instagram') {
            return (
                <div className='flex flex-col text-xs md:text-base items-center border border-white rounded-full bg-white/20 p-5 backdrop-blur-sm'>
                    <span>See what</span>
                    <span>we do at</span>
                    <span>Webminds</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div id='contact' className='flex flex-col space-y-10 px-12 w-full max-w-[1920px] mx-auto py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'>
            {/* header */}
            <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={{
                    offscreen: { opacity: 0, y: 100 },
                    onscreen: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className='text-center font-reviewheavy text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] text-black'
            >
                LET'S TALK
            </motion.span>

            {/* images */}
            <div className="relative">
                {/* Custom cursor element */}
                {hoveringItem && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="fixed pointer-events-none z-50 flex items-center justify-center"
                        style={{
                            left: `${cursorPosition.x}px`,
                            top: `${cursorPosition.y}px`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        {renderCustomCursor()}
                    </motion.div>
                )}

                {/* Images container */}
                <div className='flex flex-col space-y-2'>
                    <div
                        className="relative"
                        onMouseEnter={() => setHoveringItem('webminds')}
                        onMouseLeave={() => setHoveringItem(null)}
                    >
                        <img
                            src='/images/webminds.webp'
                            className='rounded-xl w-full cursor-none'
                            alt="Webminds Project"
                            onClick={() => window.open('https://webmindsdesigns.com/', '_blank')}
                        />
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setHoveringItem('instagram')}
                        onMouseLeave={() => setHoveringItem(null)}
                    >
                        <img
                            src='/images/instagram.webp'
                            className='rounded-xl w-full cursor-none'
                            alt="Instagram Project"
                            onClick={() => window.open('https://www.instagram.com/webminds.designs', '_blank')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}