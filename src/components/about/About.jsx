import React from 'react'
import "./about.css"
import ME from "../../assets/me-about2.jpg"
import { FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { calculateWorkExperience } from '../../utils'

const About = () => {
  return (
    <section id='about' >
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years of working</small>
            </article>
          </div>
          <p>
            Hi there!👋 My name is Avirup Banik and I'm currently working for <b><a href='https://flipkart.com' target='_blank' rel="noreferrer">Flipkart</a></b> as a <b>Software Engineer</b>. I am a self taught Full Stack developer with <b>2+ years</b> of experience. I have a strong passion for building modern,
            interactive web applications that provide a seamless user experience. In my time as a developer, I have learned how to effectively use a variety of technologies, including React, Node.js, Express, MongoDB and MySQL, to build full stack solutions.
            I am constantly learning and staying up-to-date on the latest developments in the web development ecosystem, and I am always looking for new challenges to help me grow as a developer.
            In my free time, I enjoy experimenting with new technologies and participating
            in online coding challenges to keep my skills sharp. I am excited to continue my journey as a Full Stack developer and to work on exciting projects that push the boundaries of what is possible on the web.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </motion.div>
    </section>
  )
}

export default About