import React from 'react'

import './style.css'

export default function Rating({rating, ratesCount}) {
    const maxRating = 5;

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  const fullStarsArray = Array(fullStars).fill(<img src="red-star.svg"/>);
  const halfStarArray = Array(halfStar).fill(<img src="half-star.svg"/>);
  const emptyStarsArray = Array(emptyStars).fill(<img src="gray-star.svg"/>);

  const stars = [...fullStarsArray, ...halfStarArray, ...emptyStarsArray];
    
    return (
    <div className='rate-bar'>
        <p>{rating} </p> <div>{stars.map(star => star)}</div> <p>{ratesCount} отзывов</p>
    </div>
  )
}
