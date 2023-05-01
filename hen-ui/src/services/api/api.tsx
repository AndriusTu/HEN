import axios from 'axios';
import authService from './authService';

const api = axios.create({
  baseURL: `http://localhost:40008/`,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('apiToken');
    console.log('apiToken', token);
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      authService.logout();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default api;
