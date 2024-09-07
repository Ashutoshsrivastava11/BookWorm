import React, { useEffect, useState } from 'react';
import ReviewService from '../services/ReviewService';

const ReviewList = ({ bookId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        ReviewService.getReviewsByBook(bookId).then(response => setReviews(response.data));
    }, [bookId]);

    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.content} - Rating: {review.rating}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewList;
