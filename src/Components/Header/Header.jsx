import React from 'react';
import {Component} from './Component';
import photo from '../../Assets/photo.jpg';
import Socials from './Socials';
import './header.css';

export const Header = () => {
  return (
    <div className='header'>
       <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Violeta</h1>
        <div className="text-light">Front-end developer</div>
        <Component/>
        <Socials/>

        <div className="me">
          {/* <img src={photo} alt=''/> */}
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
       </div>
    </div>
  )
}

