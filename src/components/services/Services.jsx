import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container serv__container">
        <article className="serv">
          <div className="serv__haed">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="serv__list">
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            
          </ul>
        </article>

        <article className="serv">
          <div className="serv__haed">
            <h3>Web Development</h3>
          </div>

          <ul className="serv__list">
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            
          </ul>
        </article>

        <article className="serv">
          <div className="serv__haed">
            <h3>Content creation</h3>
          </div>

          <ul className="serv__list">
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='serv__list-icon'/>
              <p>Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services