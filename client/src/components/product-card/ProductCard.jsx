import React from 'react'
import './style.css'

import heart from '../../assets/heart.svg'
import chart from '../../assets/chart.svg'
import Rating from '../rating/Rating'
import Button from '../button/Button'
import IconButton from "../ico-btn/IconButton";
import { formatPrice } from '../../utils/formatPrice';
import { useNavigate } from 'react-router-dom'
import { PRODUCT_ROUTE } from '../../utils/consts'
export default function ProductCard({product, long}) {
  const navigator = useNavigate();
  return (
      long ?
      <div className='product-card long'>
        <img className='product-img' src={product.img}/>
        <div className="product-info">
          <div className="rating-icons">
            <Rating rating={product.rating} ratesCount={product.ratesCount}/>
            <div className={'product-icons'}>
                    <IconButton small iconPath={heart}/> <IconButton small iconPath={chart}/>
            </div>
          </div>
          <div className="name-price">
            <h3>{product.name}</h3>
            <p>от {formatPrice(product.price)}₽</p>
          </div>
          <Button onClick={() => {navigator(PRODUCT_ROUTE + product.id)}} text={'Перейти к товару'}/>
        </div>
        
        
      </div> 
      : 
      <div className={['product-card'].join(' ')}>
      <div className='category-name'>
        <div className={'h5-icons'}>
            <h5>{product.type}</h5>
            <div className={'product-icons'}>
                <IconButton small iconPath={heart}/> <IconButton small iconPath={chart}/>
            </div>
        </div>
        <h3>{product.name}</h3>
      </div>
      <div className='product-info'>
        <img className='product-img' src={product.img}/>

        <div className='price-rating'>
            <div className='price-cart'><p>от {formatPrice(product.price)}₽</p>
                <Button onClick={() => {navigator(PRODUCT_ROUTE + product.id)}} text={'К описанию'}/></div>

          <Rating rating={product.rating} ratesCount={product.ratesCount}/>
        </div>
      </div>
  </div>
  )
}

