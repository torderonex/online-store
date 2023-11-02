import React from 'react'

import './style.css' 

export default function IconButton({onClick, className, iconPath, small }) {
  return (
    <button className={['ico-btn', className, small ? 'small' : '' ].join(' ')}   onClick={onClick}>
        <img src={iconPath}/>
    </button>
  )
}
