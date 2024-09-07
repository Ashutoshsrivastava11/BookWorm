import React, { useState } from 'react';
import BookService from '../services/BookService';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const book = { title, author, description };
        BookService.addBook(book).then(() => alert('Book added successfully!'));
    };

    return (
        <div>
            <h1>Add a Book</h1>
            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Add Book</button>
        </div>
    );
};

export default AddBook;
