import React from 'react'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import { useState } from 'react';

function Movie({movie, reviews}) {
    const [reviewlist, setReviewlist] = useState(reviews)    

    const addReview = (newReview) => {
        // debugger;
        newReview.id = Math.random()*1000;
        setReviewlist([newReview, ... reviewlist])
        // console.log(reviewlist);
    }
    console.log(reviewlist);
    return (
        <div className="card">
            <div className="card card-header">
                {movie.name}
            </div>
            <div className = "card card-body">
                <div className = "container">
                    <div className = "row information">
                        <div className = "col-sm-6">
                            <div className = "row release-date">
                                <i>Release Date: {movie.releaseDate}</i>
                            </div>
                            <br/>
                            <div className = "row synopsis">
                                {movie.synopsis}
                            </div>
                            <br/>
                            <div className = "row rating">
                                Average Rating: {movie.rating}
                            </div>
                        </div>
                        <div className = "col-sm-6 image">
                            <img src = {movie.image}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-footer">
                
                <div className="row review-list">
                    <ReviewList 
                        reviews = {movie.reviews}
                    />
                </div>
                <div className="row review-form">
                    <ReviewForm handleAdd = {addReview}/>
                </div>
            </div>
        </div>
    )
}



Movie.defaultProps = {
    reviews: [],
    rating: 0
}


export default Movie