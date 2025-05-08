import React from 'react'
import Hero from './components/hero.jsx'
import Pixels from './components/pixels.jsx'
import Precision from './components/precision.jsx'
import Designs from './components/designs.jsx'
import Carousel from './components/carousel.jsx'
import Bgimage from './components/bgimage.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

export default function layout() {
    return (
        <>
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
            <div style={{ backgroundImage: `url(/images/launching.webp)` }} className='bg-cover bg-center w-full h-screen'>
                <Bgimage />
            </div>
            <div className='bg-stone-300 w-full'>
                <Footer />
            </div>
        </>
    )
}
