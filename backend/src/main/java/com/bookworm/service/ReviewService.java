package main.java.com.bookworm.service;

import com.bookworm.model.Review;
import com.bookworm.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getReviewsByBook(Long bookId) {
        return reviewRepository.findByBookId(bookId);
    }

    public Review editReview(Long reviewId, Review review) {
        Review existingReview = reviewRepository.findById(reviewId).orElseThrow();
        existingReview.setContent(review.getContent());
        existingReview.setRating(review.getRating());
        return reviewRepository.save(existingReview);
    }
}
