import React from 'react'

import {Home_product} from '../../components'

import './home_products.css'

import flowers from '../../assets/flowers.jpeg'
import cartridge from '../../assets/cartridge.png'
import concentrate from '../../assets/concentrate.png'
import edible from '../../assets/edible2.jpeg'
import oil from '../../assets/oil2.jpeg'
import gear from '../../assets/gear.jpeg'

const Home_products = () => {
  return (
    <div className="home-products section__padding">
        <div className="products">
            <Home_product imageUrl={flowers} text='Flower'/>
            <Home_product imageUrl={cartridge} text='Cartridge'/>
            <Home_product imageUrl={concentrate} text='Concentrate'/>
            <Home_product imageUrl={oil} text='Oil'/>
            <Home_product imageUrl={edible} text='Edibles'/>
            <Home_product imageUrl={gear} text='Gear'/>
        </div>
        {/* <div className="home-products-mobile">
          <div className="home-column">
            <Home_product imageUrl={flowers} text='Flower'/>
            <Home_product imageUrl={cartridge} text='CartRidge & Pen'/>
            <Home_product imageUrl={concentrate} text='Concentrate'/>
          </div>
          <div className="home-column">
            <Home_product imageUrl={oil} text='Oil'/>
            <Home_product imageUrl={edible} text='Edible'/>
            <Home_product imageUrl={gear} text='Gear'/>
          </div>
        </div> */}
        

    </div>
  )
}

export default Home_products