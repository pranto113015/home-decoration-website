import React from 'react'
import Hero from './Hero'
import WhyChose from './WhyChose'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChose />
    <Products headline="Best Selling Products"/>
    </div>
  )
}

export default Home