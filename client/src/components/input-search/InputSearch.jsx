import React from 'react'
import './style.css'
import search from "../../assets/search-normal.svg"
export default function InputSearch({placeholder}) {
  return (
    <form action='' method='get'>
        <button className='search_button' src='./search-normal.svg'><img src={search}/></button>
        <input className='input_search' placeholder={placeholder} type='search' name='s'/>

    </form>
  )
}