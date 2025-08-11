import React from 'react'
import Hero from './Hero'
import WhyChose from './WhyChose'
import Products from './Products'
import Experiences from './Experiences'
import Materials from './Materials'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChose />
    <Products headline="Best Selling Products"/>
    <Experiences />
    <Materials />
    </div>
  )
}

export default Home