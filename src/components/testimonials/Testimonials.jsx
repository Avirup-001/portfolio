import React from 'react'
import './testimonials.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testi__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }}
>
        <SwiperSlide className='testi'>
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
            <h5 className='client__name'>Eenestt Achiver</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo iure suscipit in dolore dolorum quisquam magni, soluta saepe eveniet natus est iste et neque. Quae commodi voluptatibus libero ea?
            </small>
          
        </SwiperSlide>
        <SwiperSlide className='testi'>
          <div className="client__avatar">
            <img src={AVTR2} alt="" />
          </div>
            <h5 className='client__name'>Shatte Wale</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo iure suscipit in dolore dolorum quisquam magni, soluta saepe eveniet natus est iste et neque. Quae commodi voluptatibus libero ea?
            </small>
          
        </SwiperSlide>
        <SwiperSlide className='testi'>
          <div className="client__avatar">
            <img src={AVTR3} alt="" />
          </div>
            <h5 className='client__name'>Kewame Despite</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo iure suscipit in dolore dolorum quisquam magni, soluta saepe eveniet natus est iste et neque. Quae commodi voluptatibus libero ea?
            </small>
        
        </SwiperSlide>
        <SwiperSlide className='testi'>
          <div className="client__avatar">
            <img src={AVTR4} alt="" />
          </div>
            <h5 className='client__name'>Jessica Smith</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo iure suscipit in dolore dolorum quisquam magni, soluta saepe eveniet natus est iste et neque. Quae commodi voluptatibus libero ea?
            </small>
          
        </SwiperSlide>  
      </Swiper> 
    </section>
  )
}

export default Testimonials