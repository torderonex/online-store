import React from 'react'
import arrow from '../../assets/arrow-right.svg'
import './style.css'

export default function Button({text,onClick, white}) {
  return (
    <button className={['main-btn', white ? 'white' : ' '  ].join(' ')} onClick={onClick}>
        {text} 
        <img src={arrow}/>
    </button>
);
}
