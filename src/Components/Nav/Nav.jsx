import React from 'react'
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMessage} from 'react-icons/md'
import {RiServiceLine} from 'react-icons/ri';
import { useState } from 'react';

export const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }> <AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : '' }> <AiOutlineUser/></a>
      <a href='#experience'> <BiBook/></a>
      <a href='#services'> <RiServiceLine/></a>
      <a href='#contact'> <MdOutlineMessage/></a>
    </nav>
  )
}

