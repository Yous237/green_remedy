import React from 'react'

import './newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter section__padding">
        <div className="newsletter-test">
        <div className="newsletter-heading">
            <h1>Sign up to our Newsletter</h1>
        </div>
        <div className="newsletter-subheading">
            
            <h3>Qui quis magnam consequatur velit rerum eaque atque accusamus 
            Lorem ipsum dolor sit, amet consectetur  </h3>
        </div>
        <div className="newsletter-input">
            <input type="email" placeholder="Your email adress" />
          <button type="button">Sign to Newsletter</button>
        </div>
        </div>
    </div>
  )
}

export default Newsletter