import React from 'react'

import {Navbar, Hero, Home_products, Popular_products, Home_about, Home_customers, Newsletter, Footer} from '../../containers'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Home_products/>
        <Popular_products/>
        <Home_about/>
        <Home_customers/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home