import axios from 'axios';

const API_URL = '/api/auth';

const login = (username, password) => axios.post(`${API_URL}/login`, { username, password });
const register = (username, password) => axios.post(`${API_URL}/register`, { username, password });

const AuthService = { login, register };
export default AuthService;
