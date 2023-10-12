import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'


export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>violeta.vinogrodska@gmail.com</h5>
            <a href="mailto:violeta.vinogrodska@gmail.com">Send a message</a>

          </article>
          <article className="contact__option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <a href="https://m.me/vvinogrodska321">Send a message</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>Email</h4>
            <h5>violeta.vinogrodska@gmail.com</h5>
            <a href="mailto:violeta.vinogrodska@gmail.com">Send a message</a>

          </article>
        </div>

        <form action=''></form>
      </div>

    </section>
  )
}

