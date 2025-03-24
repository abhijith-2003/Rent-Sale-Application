import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Property from '../components/Property'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='min-h-screen w-full bg-gray-50'>
      <Navbar/>

      <Hero/>

      <Property/>

      <Contact/>

      <Footer/>

    </div>
  )
}

export default Home
