import React from 'react'

import './style.css' 

export default function IconButton({className, iconPath, onclick }) {
  return (
    <button className={'ico-btn ' + className}   onClick={onclick}>
        <img src={iconPath}/>
    </button>
  )
}
