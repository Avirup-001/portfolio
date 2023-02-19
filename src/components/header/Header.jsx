import React from 'react'
import "./header.css"
import CTA from './CTA'
import HaederSocials from './HaederSocials'
import ME from '../../assets/me2.jpg'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Avirup Banik</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <HaederSocials />
        <div className="me">
          <img src={ME} style={{ borderRadius: "12rem 12rem 0 0" }} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header