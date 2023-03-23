import React from 'react'
import Apprating from '../components/Apprating'
import BrandsLove from '../components/BrandsLove'
import Header from '../components/common/Header'
import CredExperience from '../components/CredExperience'
import CredSecurity from '../components/CredSecurity'
import CredStory from '../components/CredStory'
import FeelSpecial from '../components/FeelSpecial'
import HeroSection from '../components/HeroSection'
import MobileScroll from '../components/MobileScroll'
import ProductShowCase from '../components/ProductShowCase'
import WindowPeak from '../components/WindowPeak'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProductShowCase/>
      <FeelSpecial/>
      <BrandsLove/>
      <CredExperience/>
      <MobileScroll/>
      <div className='non-mobile'>
        <WindowPeak/>
      </div>
      <CredSecurity/>
      <CredStory/>
      <Apprating/>
    </div>
  )
}

export default Homepage
