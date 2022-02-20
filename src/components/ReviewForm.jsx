import React from 'react'
import Rating from './Rating';
import { useState } from 'react'

function ReviewForm({handleAdd}) {
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    const handleNameChange = (e) =>{
        setUsername(e.target.value);
    }
    const handleContentChange = (e) =>{
        setContent(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(content.trim().length > 0) {
            const newReview = {
                username,
                content,
                rating
            }
            console.log(newReview);
            handleAdd(newReview);
            setUsername('');
            setContent('');
            // setRating(1);
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card card-header">
                    <h4>Leave your review of this movie</h4>
                </div>
                <div className="card card-body">
                    <form onSubmit = {handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username-input">Name or Username </label>
                            <input 
                            className = "form-control"
                            id = "username-input"
                            type="text" 
                            onChange={handleNameChange}
                            placeholder = 'Name or Username'
                            value = {username}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='content-input'>Your Review</label>
                            <textarea 
                            id = "content-input"
                            className = "review-content form-control"
                            rows = "4"
                            type="text" 
                            onChange={handleContentChange}
                            placeholder = 'Write your review'
                            value = {content}
                            />
                        </div>
                        <div className = "form-group">
                            <Rating select = {(rating) => setRating(rating)}/>
                        </div>
                        <div>
                            <button className = "btn btn-primary" type="submit">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default ReviewForm