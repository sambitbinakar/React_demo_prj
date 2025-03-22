import React from 'react'
import Navbar from '../components/Navbar'
import Hero_main from '../components/hero-main'

function Hero_section() {
  return (
    <div className='bg-secondary w-full'>
      <Navbar/>
      <Hero_main/>
    </div>
  )
}

export default Hero_section