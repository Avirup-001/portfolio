import React from 'react'
import "./experience.css"
import { FaReact, FaBootstrap, FaCss3, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { GrMysql } from 'react-icons/gr'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <AiFillHtml5 className='exp__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <FaCss3 className='exp__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediete</small>
              </div>
            </article>

            <article className="exp__details">
              <IoLogoJavascript className='exp__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <FaReact className='exp__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>
            <article className="exp__details">
              <FaBootstrap className='exp__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <SiTailwindcss className='exp__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediete</small>
              </div>

            </article>



          </div>
        </div>


        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <FaNodeJs className='exp__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>

            <article className="exp__details">
              <SiMongodb className='exp__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>

            </article>

            <article className="exp__details">
              <GrMysql className='exp__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediete</small>
              </div>

            </article>

            <article className="exp__details">
              <SiExpress className='exp__details-icon' />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediete</small>
              </div>
            </article>

            <article className="exp__details">
              <FaPython className='exp__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediete</small>
              </div>

            </article>
            <article className="exp__details">
              <SiFirebase className='exp__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediete</small>
              </div>

            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience