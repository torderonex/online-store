import React from 'react'

import halfStarSvg from '../../assets/half-star.svg'
import redStarSvg from '../../assets/red-star.svg'
import grayStarSvg from '../../assets/gray-star.svg'

import './style.css'

export default function Rating({rating, ratesCount}) {
    const maxRating = 5;

  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  const fullStarsArray = Array(fullStars).fill(<img src={redStarSvg} alt="*"/>);
  const halfStarArray = Array(halfStar).fill(<img src={halfStarSvg} alt="*"/>);
  const emptyStarsArray = Array(emptyStars).fill(<img src={grayStarSvg} alt="-"/>);

  const stars = [...fullStarsArray, ...halfStarArray, ...emptyStarsArray];
    
    return (
    <div className='rate-bar' style={{backgroundColor: !ratesCount ? "white" : null}}>
        <p>{rating} </p>
        <div>
          {stars.map(star => <React.Fragment key={Math.random()}>{star}</React.Fragment>)}
        </div>
        {ratesCount && <p>{ratesCount} отзывов</p>}
    </div>
  )
}
