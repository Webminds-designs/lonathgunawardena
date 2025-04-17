import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export default function Header() {
    const mainRef = useRef(null)

    useEffect(() => {
        // get the App.jsx main div element
        mainRef.current = document.getElementById('main')
    }, [])

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["start start", "end start"]
    })

    return (
        <motion.div 
            style={{
                opacity: useTransform(scrollYProgress, [0, 0.05], [0, 1]),
            }}
            className='fixed flex justify-center w-full border-b-1 border-b-stone-400 bg-stone-300 h-6 md:h-14 lg:h-16 xl:h-20 2xl:h-22 z-10'>

        </motion.div>
    )
}
