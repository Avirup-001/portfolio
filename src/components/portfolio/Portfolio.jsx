import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/amazon-clone.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'
import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container pf__container">
        <article className='pf__item'>
          <div className="pf__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>An Amazon Clone</h3>
          <div className="pf__item-cta">
            <a href="https://github.com/Avirup-001/amazon-clone" target="_blank" rel="noreferrer" className='btn'>GitHub</a>
            <a href="https://clone-80008.web.app/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='pf__item'>
          <div className="pf__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>A Web App for a Resturant</h3>
          <div className="pf__item-cta">
            {/* <a href="https://github.com/Avirup-001/amazon-clone" target="_blank" rel="noreferrer" className='btn'>GitHub</a> */}
            <a href="https://dabbawala.iosx.in/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='pf__item'>
          <div className="pf__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>A Social Media</h3>
          <div className="pf__item-cta">
            {/* <a href="https://github.com/Avirup-001/amazon-clone" target="_blank" rel="noreferrer" className='btn'>GitHub</a> */}
            <a href="https://ceofront.iosx.in/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <h5>I will update whenever possible 😁</h5>

      </motion.div>
    </section>
  )
}

export default Portfolio