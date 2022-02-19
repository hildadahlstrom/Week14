import React from 'react'
import Review from './Review'
import Stars from './Stars'

function averageRating (arr){
    let ratings = [];
    for(const item of arr){
        ratings.push(+item.rating);
    }

    // console.log(ratings);
    let sum = 0;
    if(ratings.length !== 0){
        for(let i = 0; i < ratings.length; i ++){
            sum += ratings[i];
            
        }
        let avg = sum/ratings.length;
        avg = Math.round(avg*10)/10;
        // console.log(avg);
        return avg;
    }
    else{
        return 0;
    }
    
}

function ReviewList({reviews}) {

    // let ratingArray = createRatingArray(reviews);

    // const total = ratingArray.reduce((acc, curr) => {
    //     return acc + curr;
    // },0);

    // let sum = 0;
    // for(let n of ratingArray){
    //     sum += n;
    // }
    // console.log(sum);
    // const total = ratingArray.reduce(
    //     (prev, cur) => prev + cur);
    // console.log(total);

    if(!reviews || reviews.length === 0){
        return <h4>There are no reviews for this movie yet</h4>
    }
    return (
        <div>

            <h4>Reviews({reviews.length})</h4>
            <h4>Average Rating: <Stars number = {averageRating(reviews)}/> ({averageRating(reviews)})</h4>
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