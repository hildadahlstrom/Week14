import React from 'react'
import Review from './Review'
import Stars from './Stars'

function averageRating (arr){//finds the average of the ratings within an array of reviews
    let ratings = [];
    let sum = 0;
    for(const item of arr){
        ratings.push(+item.rating);
    }
    if(ratings.length !== 0){
        for(let i = 0; i < ratings.length; i ++){
            sum += ratings[i];
            
        }
        let avg = sum/ratings.length;
        avg = Math.round(avg*10)/10;
        return avg;
    }
    else{
        return 0;
    }
}

function ReviewList({reviews}) {

    if(!reviews || reviews.length === 0){
        return (
            <>
            <h4>There are no reviews for this movie yet</h4>
            <h4>Leave your own!</h4>
            </>
            )
            
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-9">
                    <h4>Average Rating: <Stars number = {averageRating(reviews)}/></h4>
                </div>
                <div className="col-sm-3">
                    <h4>Reviews: ({reviews.length})</h4>
                </div>
            </div>
            {reviews.map((review, index) => (
                <Review 
                key ={0 + index}
                review = {review}
                />
            ))}
        </div>
    )
}

export default ReviewList