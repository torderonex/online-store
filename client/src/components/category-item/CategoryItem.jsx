import React from 'react'
import './style.css'

export default function CategoryItem({img, category}) {
  return (
    <div className='category-item'>
            <img className='category-img' src={img}/>    
        <p>{category}</p>
    </div>
  )
}
