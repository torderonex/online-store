import React from 'react'

import './style.css'

export default function AboutCard({title, body}) {
  return (
    <div className='about-card'>
        <h2 className='about-card-title'>{title}</h2>
        <p className='about-card-body'>{body}</p>
    </div>
  )
}
