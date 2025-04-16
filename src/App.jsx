import React from 'react'
import Hero from './components/hero.jsx'
import Pixels from './components/pixels.jsx'
import Precision from './components/precision.jsx'
import Designs from './components/designs.jsx'

export default function App() {
  return (
    <div className='flex flex-col items-center'>
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
    </div>
  )
}
