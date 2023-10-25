import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <section id='services'>
      <h2>My vision</h2>

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
            <h3>Goals as Front End Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Combine technology and design to create inviting, <br/>
                easy-to-use websites for consumers </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implement the requested design based on the <br/> requirements provided 
                on the specified devices for <br/> the supported browsers </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Stay up-to-date with the latest trends and technologies </p>
            </li>
                  
          </ul>
        </article>

        {/*Content Creation */}
        <article className='service'>
          <div className="service__head">
            <h3>Skills valued the most</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communication </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creativity </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptability </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work ethic </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Time management </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Problem solving </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

