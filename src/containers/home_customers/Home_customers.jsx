import React from 'react'

import './home_customers.css'

import {Customer_review} from '../../components'

const Home_customers = () => {
  return (
    <div className="home-customers section__padding ">
        <div className="home-customers-headings">
            <h1>Your Trust Is Our Top Concern</h1> <br />
            <h3>Lorem ipsum, dolor sit amet consectetur  <br />adipisicing elit  Voluptatum, iste  </h3> <br /> <br />
        </div>
        <div className="home-customers-reviews">
            <Customer_review text='Green remedy always have a fresh and high quality product ' name='Jhon Smith'/>
            <Customer_review text='The staff always greet me well and they got the most reliable products' name='Niko Rahal'/>
            <Customer_review text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet enim, laudantium autem ' name='Menace Santana'/>
        </div>

    </div>
  )
}

export default Home_customers