import React from 'react'
import Banner from '../components/hero-section/Banner'
import HeroFeatures from '../components/hero-section/HeroFeatures'
import HeroPricing from '../components/hero-section/HeroPricing'
import HeroFooter from '../components/hero-section/HeroFooter'

export default function Hero() {
  return (
    <>
    <Banner/>
    <HeroFeatures/>
    <HeroPricing/>
    <HeroFooter/>
    </>
  )
}
