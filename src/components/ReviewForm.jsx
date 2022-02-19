import React from 'react'
import Rating from './Rating';
import { useState } from 'react'
// import Stars from './Stars';


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
            handleAdd(newReview);
            setUsername('');
            setContent('');
            setRating(1);
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
                        <Rating select = {(rating) => setRating(rating)}/>
                        <div className="input-group">
                            <label htmlFor="username-input">Username </label>
                            <input 
                            id = "username-input"
                            type="text" 
                            onChange={handleNameChange}
                            placeholder = 'Name or Username'
                            value = {username}
                            />
                            <input 
                            className = ""
                            type="text" 
                            onChange={handleContentChange}
                            placeholder = 'Write your review'
                            value = {content}
                            />
                            <br/>
                            <button className = "btn" type="submit">Submit Review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
    debugger;
}

export default ReviewForm