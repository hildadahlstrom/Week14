import React from 'react'
import Stars from './Stars'

function Review({review}) {
  return (
    <div className="card">
      <div className="card-header">
            <p>{review.username}</p>
            <p>{review.dateReviewed}</p>
      </div>
      <div className = "card-body container">
          <div className="row rating">
              <p>Rating: <Stars number = {review.rating}/> </p>
          </div>
          <div className = "row content">
              <p>{review.content}</p>
          </div>
      </div>
    </div>
  )
}

export default Review