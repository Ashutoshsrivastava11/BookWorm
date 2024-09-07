import axios from 'axios';

const API_URL = '/api/books';

const getAllBooks = () => axios.get(API_URL);
const getBookById = (id) => axios.get(`${API_URL}/${id}`);
const addBook = (book) => axios.post(API_URL, book);

const BookService = { getAllBooks, getBookById, addBook };
export default BookService;
