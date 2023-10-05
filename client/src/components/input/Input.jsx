import React from 'react'

import './style.css'

export default function Input({title, placeholder, type}) {
  return (
    <div >
    <h6 className='input-title'>
        {title}
    </h6>
    <input className='custom-input' placeholder={placeholder} type={type}/>
    </div>
  )
}
