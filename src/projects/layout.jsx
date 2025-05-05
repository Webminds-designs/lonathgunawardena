import React from 'react'
import Header from './components/header'
import HeroText from './components/heroText'
import HeroImage from './components/heroImage'
import ToggleBar from './components/toggleBar'
import SocialMedia from './components/socialMedia'
import OnlyIconsText from './components/onlyIconsText'
import ComingSoonPosters from './components/comingSoonPosters'

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
    </div>
  )
}
