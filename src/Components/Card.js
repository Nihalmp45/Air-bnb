import React from 'react'
import './card.css'

function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }


  return (
    <div className='card'>
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className='card-image' src={`../${props.coverImg}`}></img>
        <div className='card-stats'>
            <img className='star' src='./Star 1.png'></img>
            <span>{props.stats.rating}</span>
            <span className='gray'>({props.stats.reviewCount})</span>
            <span className='gray'>{props.location}</span>
        </div>
        <p>
            {props.title}
        </p>
        <div className='amount'>
            <span className='bold'>From ${props.price}</span>
            <span>/person</span>

        </div>

    </div>
  )
}

export default Card