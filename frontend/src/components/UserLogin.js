import React, { useState, useContext } from 'react';
import AuthService from '../services/AuthService';
import AuthContext from '../context/AuthContext';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthData } = useContext(AuthContext);

    const handleLogin = () => {
        AuthService.login(username, password).then(response => {
            if (response.data) {
                setAuthData({ username });
            }
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default UserLogin;
