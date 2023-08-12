import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><span></span></a>

      <ul className='links'>
        <li>
          <a href="#">Home</a>
          <a href="#about"><u>About</u></a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* <div className="f-socials">
        <a href="https://facebook.com" target={'_blank'} rel='noreferrer'><FaFacebookF /></a>
        <a href="https://instagram.com" target={'_blank'} rel="noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com" target={'_blank'} rel="noreferrer"><IoLogoTwitter /></a>
      </div> */}

      <div className="copyright">
        <small style={{ color: 'black' }}>&copy; Crafted by Avirup</small>
      </div>
    </footer>
  )
};


export default Footer