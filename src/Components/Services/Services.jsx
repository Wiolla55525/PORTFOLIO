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
            <h3>What can I offer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Enthusiasm and Eagerness to Learn </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solid Foundation </p>
            </li>
            {/* Design the way users interact with the product/service, 
            including user flows, transitions, and animations */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Fresh Perspectives </p>
            </li>
            {/* Ensure that the design is usable and visually appealing on
             different devices and screen sizes through responsive design */}
            <li>
              <BiCheck className='service__list-icon' />
              <p>Professionalism </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Initiative </p>
            </li>
      
         
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
            <li>
              <BiCheck className='service__list-icon' />
              <p>Constant skills evolution </p>
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
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

