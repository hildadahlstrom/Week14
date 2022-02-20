import React from 'react'
import ReviewList from './ReviewList'
import ReviewForm from './ReviewForm'
import { useState } from 'react';

function Movie({movie, reviews,setReviews}) {
    const [reviewlist, setReviewlist] = useState(reviews)    

    const addReview = (newReview) => {//add a new review to the list of reviews
        newReview.id = Math.random()*1000;
        setReviews = setReviewlist([...reviewlist,newReview])
        console.log(reviewlist);
    }
    // Doesn't re-render the component, but if you console log, it is added to the review list

    return (
        <div className="card container-fluid">
            <div className="card card-header">
                <h2 className = "movie-title">{movie.name}</h2>
            </div>
            <div className = "card card-body">
                <div className = "row information">
                    <div className = "col-sm-5 image">
                        <img src = {movie.image} alt = ''/>
                        <div className = "row release-date">
                            <p><b>Release Date:</b> {movie.releaseDate}</p>
                            <p><b>Rated:</b> {movie.ageRating}</p>
                            <p><b>Run time:</b> {movie.minutes}</p>
                            <p><b>About:</b> {movie.synopsis}</p>
                        </div>
                        <div className = "row synopsis">
                        </div>
                        <div className="row review-form">
                            <ReviewForm handleAdd = {addReview}/>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className = "row rating">
                            <div className="row review-list">
                                <ReviewList reviews = {reviews}/>
                            </div>
                        </div>
                    </div>
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