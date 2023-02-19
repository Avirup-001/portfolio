import { React, useState } from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"


const Nav = () => {

  window.onscroll = function () { myFunction() };

  function myFunction() {

    if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 699) {
      setActiveNav('#');
    } else if (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop < 1399) {
      setActiveNav('#about');
    } else if (document.documentElement.scrollTop >= 1400 && document.documentElement.scrollTop < 2099) {
      setActiveNav('#experience');
    } else if (document.documentElement.scrollTop >= 2100 && document.documentElement.scrollTop < 2900) {
      setActiveNav('#services');
    } else {
      setActiveNav('#contact');
    }
  }


  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a id='h' href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a id='a' href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a id='e' href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a id='s' href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a id='c' href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav