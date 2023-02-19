import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zu5qh7n', 'template_fv9un6t', form.current, 'XZSSBH_uoV30VvGbH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>With Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact-icon' />
            <h4>Email</h4>
            <h5>avirup.banik2017@gmail.com</h5>
            <a href="mailto:avirup.banik2017@gmail.com">Send a messege</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9073126270</h5>
            <a href="https://wa.me/919073126270" target={'_blank'} rel='noreferrer'>Send a messege</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='mail' placeholder='Your Mail' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact