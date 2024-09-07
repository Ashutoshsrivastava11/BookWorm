import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewService from '../services/ReviewService';

const EditReview = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);

    useEffect(() => {
        ReviewService.getReviewById(id).then(response => {
            setContent(response.data.content);
            setRating(response.data.rating);
        });
    }, [id]);

    const handleSubmit = () => {
        const review = { content, rating };
        ReviewService.updateReview(id, review).then(() => alert('Review updated successfully!'));
    };

    return (
        <div>
            <h2>Edit Review</h2>
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <input type="number" value={rating} onChange={e => setRating(e.target.value)} />
            <button onClick={handleSubmit}>Update Review</button>
        </div>
    );
};

export default EditReview;
