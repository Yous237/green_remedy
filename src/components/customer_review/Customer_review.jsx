import React from 'react'

import stars from '../../assets/stars.png'

import './Customer_review.css'

const Customer_review = ({text, name}) => {
  return (
    <div className="customer-review">
        <div className="customer-review-stars">
            <img src={stars} alt="" />
        </div>
        <div className="customer-review-review">
            <p>"{text}"</p> <br />
        </div>
        <div className="customer-review-name">
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Customer_review