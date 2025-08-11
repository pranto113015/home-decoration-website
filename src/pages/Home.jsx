import React from 'react'
import Hero from './Hero'
import WhyChose from './WhyChose'
import Products from './Products'
import Experiences from './Experiences'
import Materials from './Materials'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChose />
    <Products headline="Best Selling Products"/>
    <Experiences />
    <Materials />
    <Testimonials/>
    </div>
  )
}

export default Home