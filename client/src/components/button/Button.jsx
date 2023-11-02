import React from 'react'
import './style.css'

export default function Button({text,onClick, white}) {
  return (
    <button className={['main-btn', white ? 'white' : ' '  ].join(' ')} onClick={onClick}>
        {text} 
        <img src="arrow-right.svg"/>
    </button>
);
}
