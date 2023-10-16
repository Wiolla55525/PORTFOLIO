import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Violeta</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#ontact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><BsFacebook/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>

    </footer>
  )
}

