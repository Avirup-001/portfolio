import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/amazon-clone.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container pf__container">
        <article className='pf__item'>
          <div className="pf__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a Amazon Clone</h3>
          <div className="pf__item-cta">
            <a href="https://github.com/Avirup-001/amazon-clone" target="_blank" rel="noreferrer" className='btn'>GitHub</a>
            <a href="https://clone-80008.web.app/" className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <h5>I will update whenever possible 😁</h5>

      </div>
    </section>
  )
}

export default Portfolio