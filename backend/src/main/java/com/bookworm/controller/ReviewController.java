package com.bookworm.controller;

import com.bookworm.model.Review;
import com.bookworm.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        return reviewService.addReview(review);
    }

    @GetMapping("/book/{bookId}")
    public List<Review> getReviewsByBook(@PathVariable Long bookId) {
        return reviewService.getReviewsByBook(bookId);
    }

    @PutMapping("/{reviewId}")
    public Review editReview(@PathVariable Long reviewId, @RequestBody Review review) {
        return reviewService.editReview(reviewId, review);
    }
}
