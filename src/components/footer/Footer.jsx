import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
 
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><span></span></a>

      <ul className='links'>
        <li>
          <a href="#">Home</a>
          <a href="#about"><u>About</u></a>
          <a href="#experience">Experience</a>
          <a href="#ervices">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="f-socials">
        <a href="https://facebook.com" target={'_blank'} rel='noreferrer'><FaFacebookF/></a>
        <a href="https://instagram.com" target={'_blank'} rel="noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com" target={'_blank'} rel="noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="copyright">
        <small>&copy; BlackHeart. All rights reserved.</small>
      </div>
    </footer>
  )};


export default Footer