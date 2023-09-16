import React from 'react'

import './popular_products.css'

import {Popular_product } from '../../components'

import preroll from '../../assets/preroll.webp'
import airopod from '../../assets/airopod.jpeg'
import banana_punch from '../../assets/banana-punch.jpeg'
import nano_bites from '../../assets/nano-bites.png'

const Popular_products = () => {
  return (
    <div className="popular-products section__padding">
        <div className="headings">
            <div className="heading">
                <h1>Popular Products</h1>
                <br />
            </div>
            <div className="subheading">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit </p>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <br />
            </div>
        </div>
        <div className="popular-products-products">
            <Popular_product imageUrl={preroll} text='Energy Pre-Roll' price='6.49$'/>
            <Popular_product imageUrl={airopod} text='Airopod Black Mamba' price='6.49$'/>
            <Popular_product imageUrl={banana_punch} text='Banana Punch' price='3.49$ per 1g'/>
            <Popular_product imageUrl={nano_bites} text='Nano Bites Mixed Fruits' price='6.49$'/>
        </div>
    </div>
  )
}

export default Popular_products