import React from 'react'
import './style.css'

import Rating from '../rating/Rating'

export default function ProductCard({product}) {
  return (
    <div className='product-card'>
        <h5>{product.type}</h5>
        <h3>{product.name}</h3>
        <div className='product-info'>
          <img src={product.img}/>
          <div className='price-rating'>
            <p>от {product.price}р.</p> 
            <Rating rating={product.rating} ratesCount={product.ratesCount}/>
          </div>
        </div>
    </div>
  )
}

