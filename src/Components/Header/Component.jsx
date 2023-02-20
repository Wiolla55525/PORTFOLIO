import React from 'react'
import CV_Violeta from '../../Assets/CV_Violeta.pdf'

export const Component = () => {
  return (
    <div className='component'>
        <a href={CV_Violeta} className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

