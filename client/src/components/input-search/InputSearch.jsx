import React from 'react'
import './style.css'

export default function InputSearch({placeholder}) {
  return (
    <form action='' method='get'>
        <button className='search_button' src='./search-normal.svg'><img src="search-normal.svg"/></button>
        <input className='input_search' placeholder={placeholder} type='search' name='s'/>

    </form>
  )
}