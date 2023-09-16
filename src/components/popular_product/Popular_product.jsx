import React from 'react'


import './popular_product.css'

import stars from '../../assets/stars.png'


const Popular_product = ({imageUrl, text, price}) => {
  return (
    <div className="popular-product">
        <div className="popular-product-image">
            <img src={imageUrl} alt="" />
        </div>
        <div className="popular-product-stars">
            <img src={stars} alt="" />
        </div>
        <div className="popular-product-name">
            <p>{text}</p>
        </div>
        <div className="popular-product-price">
            <p>{price}</p>
        </div>
    </div>
  )
}

export default Popular_product