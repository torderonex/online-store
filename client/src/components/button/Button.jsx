import React from 'react'
import './style.css'

export default function Button({text,onlclick, white}) {
  return (
    <button className={['main-btn', white ? 'white' : ' '  ].join(' ')} onClick={onlclick}>
        {text} 
        <img src="arrow-right.svg"/>
    </button>
);
}
