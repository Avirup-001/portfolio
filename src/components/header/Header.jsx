import React from 'react'
import "./header.css"
import CTA from './CTA'
import HaederSocials from './HaederSocials'
import ME from '../../assets/me2.jpg'
import { motion } from "framer-motion"


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Hello I'm
        </motion.h5>
        <motion.div />
        <motion.h1
          whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8 }}
        >Avirup Banik
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-light">
          Passionate developer turning caffeine into code and ideas into reality
        </motion.h5>
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