import axios from 'axios';

const API_URL = '/api/reviews';

const getReviewsByBook = (bookId) => axios.get(`${API_URL}/book/${bookId}`);
const addReview = (review) => axios.post(API_URL, review);
const getReviewById = (id) => axios.get(`${API_URL}/${id}`);
const updateReview = (id, review) => axios.put(`${API_URL}/${id}`, review);

const ReviewService = { getReviewsByBook, addReview, getReviewById, updateReview };
export default ReviewService;
