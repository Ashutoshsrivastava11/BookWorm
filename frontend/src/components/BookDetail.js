import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookService from '../services/BookService';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        BookService.getBookById(id).then(response => setBook(response.data));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetail;
