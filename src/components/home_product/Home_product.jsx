import React from 'react'

import './home_product.css'

const Home_product = ({imageUrl, text}) => {
  return (
    <div className="home_product">
        <div className="product-image">
            <img src={imageUrl} alt="" />
        </div>
        <div className="product-text">
            <a>{text}</a>
        </div>
    </div>
  )
}

export default Home_product