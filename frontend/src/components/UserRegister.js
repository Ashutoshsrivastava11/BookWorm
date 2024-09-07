import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const UserRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        AuthService.register(username, password).then(() => alert('User registered successfully!'));
    };

    return (
        <div>
            <h1>Register</h1>
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default UserRegister;
