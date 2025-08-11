import React from 'react'
import Hero from './Hero'
import WhyChose from './WhyChose'
import Products from './Products'
import Experiences from './Experiences'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChose />
    <Products headline="Best Selling Products"/>
    <Experiences />
    </div>
  )
}

export default Home