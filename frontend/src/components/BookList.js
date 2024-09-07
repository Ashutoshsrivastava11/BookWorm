import React, { useEffect, useState } from 'react';
import BookService from '../services/BookService';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        BookService.getAllBooks().then(response => setBooks(response.data));
    }, []);

    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map(book => <li key={book.id}>{book.title}</li>)}
            </ul>
        </div>
    );
};

export default BookList;
