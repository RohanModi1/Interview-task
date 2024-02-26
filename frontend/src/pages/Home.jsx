import React from 'react'
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import ProductItems from '../components/ProductItems'
import Cart from '../components/Cart'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryMenu />
      <ProductItems />
      <Testimonials />
      <Cart />
      
    </div>
  )
}
