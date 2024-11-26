// src/services/userService.js
import api from './api';

const userService = {
  login: async (email, password) => {
    const response = await api.post('/users/login', { email, password });
    if (response.data && response.data.Token) {
      localStorage.setItem('token', response.data.Token);
    }
    return response.data;
  },

  register: async (email, data_nasc, password) => {
    const response = await api.post('/users/novouser', { email, data_nasc, password });
    return response.data;
  },

  getAllUsers: async () => {
    const response = await api.get('/users/allusers');
    return response.data;
  },

  getUserById: async (id) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
};

export default userService;
