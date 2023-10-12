import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/Portfolio1.jpg'
import IMG2 from '../../Assets/Portfolio2.jpg'
import IMG3 from '../../Assets/Portfolio3.jpg'
import IMG4 from '../../Assets/Portfolio4.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio 1',
    github: 'https://github.com/wiolla55525',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Portfolio 2',
    github: 'https://github.com/wiolla55525',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio 3',
    github: 'https://github.com/wiolla55525',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Portfolio 4',
    github: 'https://github.com/wiolla55525',
    demo: 'https://github.com'
  },
]


export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}></img>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                      <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                      <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

