import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Information architecture </p>
            </li>
            {/* Develop an information architecture that structures the content, 
            navigation, and functionality of the product/service */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interaction design </p>
            </li>
            {/* Design the way users interact with the product/service, 
            including user flows, transitions, and animations */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive design </p>
            </li>
            {/* Ensure that the design is usable and visually appealing on
             different devices and screen sizes through responsive design */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-end development </p>
            </li>
            {/* Translate the design into code and implement 
            the UI/UX on the website or app */}
         
          </ul>
        </article>
        {/* WEB DEV*/}
        <article className='service'>
          <div className="service__head">
            <h3>WEB Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom Web Design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Responsive and Mobile-Friendly Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Accessibility Compliance </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Single Page Applications </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Frontend Framework (React) </p>
            </li>
            
          </ul>
        </article>

        {/*Content Creation */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using CSS Preprocessors </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using APIs and RESTful Services </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating Maintaining Mobile and Responsive Design </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur </p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

