import React from 'react'

import './style.css'
import Rating from '../rating/Rating'

export default function Review({}) {
  var username = "Антон"
  var title = "Хороший товар"
  var body = "В целом за свою цену очень даже неплохо, но есть минусы"
  var rating = 3.7;
  return (
    <div className='review'>
      <h4 className="review_author">{username}</h4>
      <Rating rating={rating}/>
      <h4 className="review_title">{title}</h4>
      <div className="review_body">{body}</div>
    </div>
  )
}
