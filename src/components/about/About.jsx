import React from 'react'
import "./about.css"
// import ME from "../../assets/me-about.jpg"
import ME from "../../assets/me-about2.jpg"
// import ME from "../../assets/about-me2.jpg"
import { FaAward } from 'react-icons/fa'
import { motion } from 'framer-motion'
// import { FiUsers } from 'react-icons/fi'
// import { VscFolderLibrary } from 'react-icons/vsc'

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
              <small>3 Years of working</small>
            </article>

            {/* <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>*/}

            {/* <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article> */}
          </div>
          <p>
            Hi there!👋 My name is Avirup Banik and I'm currently working for <a href='https://flipkart.com' target='_blank' rel="noreferrer">Flipkart</a> as a Software Engineer. I am a self taught Full Stack developer with 3 years of experience. I have a strong passion for building modern,
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