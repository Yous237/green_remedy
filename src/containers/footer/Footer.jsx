import React from 'react'

import './footer.css'

import logo from '../../assets/green-remedy-logo.png'

const Footer = () => {
  return (
    <div className="footer section__padding">
        {/* <div className="footer-heading">
          <h1 className="">Green Remedy</h1>
        </div> */}

    {/* <div className="footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={logo} alt="logo" />
        <p>1052 S Quebec St, Denver, CO 80231, <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 Yousuf Salouhou. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer