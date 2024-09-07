import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import AddBook from './components/AddBook';
import UserLogin from './components/UserLogin';
import UserRegister from './components/UserRegister';
import ReviewList from './components/ReviewList';
import AddReview from './components/AddReview';
import EditReview from './components/EditReview';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/book/:id" element={<BookDetail />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/register" element={<UserRegister />} />
                    <Route path="/book/:id/reviews" element={<ReviewList />} />
                    <Route path="/add-review/:id" element={<AddReview />} />
                    <Route path="/edit-review/:id" element={<EditReview />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
