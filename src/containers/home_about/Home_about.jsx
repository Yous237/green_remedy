import React from 'react'

import './home_about.css'

import weed_plantation from '../../assets/weed_plantation.jpeg'
import weed_dispensary from '../../assets/weed-dispensary.jpeg'

const Home_about = () => {
  return (
    <div className="home-about section__padding">
        <div className="home-about-products">
            <div className="home-about-products-image">
                <img src={weed_plantation} alt="" />
            </div>
            <div className="home-about-products-text">
                <div className="home-about-products-heading">
                    <h1>About our Products</h1>
                    <br />
                </div>
                <div className="home-about-products-subheading">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <br />
                </div>
                <div className="home-about-products-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi temporibus possimus officia. Quidem perferendis id consequuntur, repudiandae ipsam cum debitis</p>
                </div>
                <div className="home-about-products-cta">
                    <a href="">Learn More</a>
                </div>
            </div>
        </div>
        <div className="home-about-shop">
            <div className="home-about-shop-text">
                <div className="home-about-shop-heading">
                    <h1>Our Shop</h1> <br />
                </div>
                <div className="home-about-shop-subheading">
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit</h3><br />
                </div>
                <div className="home-about-shop-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo harum quod cumque, culpa, quisquam ducimus dignissimos eveniet ullam illo </p> 
                </div>
                <div className="home-about-products-cta">
                    <a href="">Learn More</a>
                </div>
            </div>
            <div className="home-about-shop-image">
                <img src={weed_dispensary} alt="" />
            </div>
        </div>

    </div>
  )
}

export default Home_about