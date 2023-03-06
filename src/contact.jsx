import React from 'react'
import './contact.css'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

import Typed from 'react-typed';

import Location from './img/location.png'
// import Email from './img/email.png'
import Shape from './img/shape.png'


function Contact() {

  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1rjd4jt', 'template_96pgakh', form.current, 'YGNYceF3vB1zC4aT_')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div>
      <div className='All-header'>  
                <Typed strings={['CONTACT']} typeSpeed={250}/>
      </div>
      <div className="container-c">
      <span className="big-circle"></span>
      <img src={Shape} className="square" alt="" />
      <div className="form" data-aos="flip-left" data-aos-duration="3000" style={{transformOrigin: '0px 0px'}}>
        <div className="contact-info">
          <h3 className="title">Let's get connected</h3>
          <p className="text">
            Join me in a conversation filled with technology and science, let's connect and explore the world together.!
          </p>

          <div className="info">
            <div className="information">
              <img src={Location} className="icon" alt="" />
              <p style={{fontSize:'1rem'}}>Indian Institute of Technology, Mandi</p>
            </div>
            {/* <div className="information">
              <img src={Email} className="icon" alt="" />
              <p style={{fontSize:'1rem'}}>b20095@students.iitmandi.ac.in</p>
            </div> */}
           
          </div>

        <div className="social-media">
            <p className='cwm' style={{textAlign:'center'}}>Connect with me</p>
            <div className="social-icons" style={{justifyContent:'center'}}>
              <a href="https://www.facebook.com/yogesh.bari.1069" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/pranav_dharme_" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/pranav_dharme_/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://discordapp.com/users/pieCharm" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
          <p className='FAQ' style={{fontSize:'.7rem', paddingTop:'.8rem', marginBottom:'-.5rem'}}>Have any question or suggestion! Please let us know.</p>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form ref={form} onSubmit={sendEmail}>
            <h3 className="title">Contact Us</h3>
            <div className="input-container-c">
              <input type="text" name="name" className="input" placeholder='Name' pattern="[a-zA-Z]{3,50}" required/>
              {/* <label for=""></label> */}
              {/* <span>Name</span> */}
            </div>
            <div className="input-container-c">
              <input type="email" name="email" className="input" placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
              {/* <label for=""></label> */}
              {/* <span>Email</span> */}
            </div>
            <div className="input-container-c">
              <input type="tel" name="mobile" className="input" placeholder='Mobile (optional)' pattern="[6-9]{1}[0-9]{9}"/>
              {/* <label for=""></label> */}
              {/* <span>Mobile</span> */}
            </div>
            <div className="input-container-c textarea">
              <textarea name="message" className="input" placeholder='Message' pattern="[a-zA-Z]{500}" required></textarea>
              {/* <label for=""></label> */}
              {/* <span>Message</span> */}
            </div>
            <input type="submit" value="Send" className="button s-button" />
          </form>
          <span style={{fontWeight: 'bold', marginLeft:'6%', color:'#fff'}}>{done && "Thank you for Contacting me!"}</span>
        </div>
      </div>
    </div>
    <div className="blur-c"></div>
    </div>
  )
}

export default Contact

