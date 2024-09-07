import React, { useState } from 'react';
import ReviewService from '../services/ReviewService';

const AddReview = ({ bookId }) => {
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        const review = { content, rating, bookId };
        ReviewService.addReview(review).then(() => alert('Review added successfully!'));
    };

    return (
        <div>
            <h2>Add a Review</h2>
            <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
            <input type="number" placeholder="Rating" value={rating} onChange={e => setRating(e.target.value)} />
            <button onClick={handleSubmit}>Add Review</button>
        </div>
    );
};

export default AddReview;
