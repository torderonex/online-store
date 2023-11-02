import React from 'react'
import './style.css'

import Rating from '../rating/Rating'
import Button from '../button/Button'
import IconButton from "../ico-btn/IconButton";

export default function ProductCard({product, long}) {
  return (
      long ?
      <div className='product-card long'>
        <img className='product-img' src={product.img}/>
        <div className="product-info">
          <div className="rating-icons">
            <Rating rating={product.rating} ratesCount={product.ratesCount}/>
            <div className={'product-icons'}>
                    <IconButton small iconPath={'heart.svg'}/> <IconButton small iconPath={'chart.svg'}/>
            </div>
          </div>
          <div className="name-price">
            <h3>{product.name}</h3>
            <p>от {product.price}р.</p>
          </div>
          <Button text={'Перейти к товару'}/>
        </div>
        
        
      </div> 
      : 
      <div className={['product-card'].join(' ')}>
      <div className='category-name'>
        <div className={'h5-icons'}>
            <h5>{product.type}</h5>
            <div className={'product-icons'}>
                <IconButton small iconPath={'heart.svg'}/> <IconButton small iconPath={'chart.svg'}/>
            </div>
        </div>
        <h3>{product.name}</h3>
      </div>
      <div className='product-info'>
        <img className='product-img' src={product.img}/>

        <div className='price-rating'>
            <div className='price-cart'><p>от {product.price}р.</p>
                <Button text={'К описанию'}/></div>

          <Rating rating={product.rating} ratesCount={product.ratesCount}/>
        </div>
      </div>
  </div>
  )
}

