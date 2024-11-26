// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Ajuste conforme necessário
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Armazene o token após o login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
