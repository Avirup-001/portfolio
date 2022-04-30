import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

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
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediete</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediete</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediete</small>
              </div>
            </article>
            
            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediete</small>
              </div>
              
            </article>
            
            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediete</small>
              </div>
              
            </article>
          </div>
        </div>


        <div className="exp__backend">
        <h3>Backend Development</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
              
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediete</small>
              </div>
              
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediete</small>
              </div>
              
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediete</small>
              </div>
              
            </article>
            
            <article className="exp__details">
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
                <h4>PHP</h4>
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