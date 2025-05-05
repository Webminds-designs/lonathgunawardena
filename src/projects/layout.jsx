import React from 'react'
import Header from './components/header'
import HeroText from './components/heroText'
import HeroImage from './components/heroImage'
import ToggleBar from './components/toggleBar'
import SocialMedia from './components/socialMedia'
import OnlyIconsText from './components/onlyIconsText'
import ComingSoonPosters from './components/comingSoonPosters'
import SsProductions from './components/ssProductions'
import CrepeRunner from './components/crepeRunner'
import DiagonAlley from './components/diagonAlley'
import DroneLab from './components/droneLab'
import Visuals from './components/visuals'
import Carousel from './components/carousel'
import LetsTalk from './components/letsTalk'
import Footer from './components/footer'

export default function layout() {
  return (
    <div className='bg-stone-300 w-full'>
      <Header />
      <HeroText />
      <ToggleBar />
      <HeroImage />
      <SocialMedia />
      <OnlyIconsText />
      <ComingSoonPosters />
      <SsProductions />
      <CrepeRunner />
      <DiagonAlley />
      <DroneLab />
      <Visuals />
      <Carousel />
      <LetsTalk />
      <Footer />
    </div>
  )
}
