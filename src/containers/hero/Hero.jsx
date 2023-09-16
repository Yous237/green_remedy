import React from 'react'

import './hero.css'

import hero_image from '../../assets/hero-image.png'

const Hero = () => {
  return (
    <div className="hero section__padding" id="home" >
        <div className="hero-content">
            <div className="hero-heading">
                <h1>Looking for the best cannabis products in Colorado? <br /><span className='gradient-text'>Green Remedy</span> is here for you </h1>
            </div>
            {/* <div className="hero-subheading">
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
            </div> */}
            <div className="hero-subheading">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem minus deleniti, natus optio omnis eveniet </p>
            </div>
            <div className="hero-cta">
                <a href="">Start Ordering</a>
            </div>
        </div> 
        <div className="hero-image">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero