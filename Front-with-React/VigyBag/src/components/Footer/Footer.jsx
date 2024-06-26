//import React from 'react'

//function Footer() {
  //return (
    //<div>This is footer section</div>
  //)
//}

//export default Footer
import React from 'react';
import './Footer.css';  // Make sure to create this CSS file with the styles
//import { FaInstagram } from "react-icons/fa";
import instagramIcon from './image/in.png';
import xIcon from './image/tw.png';
import linkedinIcon from './image/li.png';
import facebookIcon from './image/meta.png';
import logo from './image/logo.png';
import home from './image/hi.png';
import message from './image/msg.png';
import call from './image/ci.png';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="social-media">
          <p>Follow us on</p>
          <div className="social-icons">
            <a href="https://www.instagram.com">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.x.com">
              <img src={xIcon} alt="X" />
            </a>
            <a href="https://www.linkedin.com">
              <img src= {linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="contact-info">
          <p>About us</p>
          <p>Contact us</p>
          <p>Order</p>
          <p>Help</p>
        </div>
        <div className="address">
        <p>
        <img src={home} alt="Address" /> Aung Fatehpur, Uttar Pradesh India-212665
      </p>
      <p>
        <img src={message} alt="Email" /> contact@vigybag.com
      </p>
      <p>
        <img src={call} alt="Phone" /> +91 1234567890
      </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 VigyBag. All rights reserved</p>
        <nav>
          <a href="/home">Home</a>
          <a href="/our-services">Our Services</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/faq">FAQ</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
