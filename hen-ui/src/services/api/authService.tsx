import api from './api';
import ROUTES from '../../routes';

export interface LoginRequest {
  username: string;
  password: string;
}

const login = (request: LoginRequest) =>
  api.post('/Auth/login', request).then((response) => {
    localStorage.setItem('apiToken', response.data.accessToken);
  });

const logout = () => {
  localStorage.removeItem('apiToken');
  localStorage.removeItem('userRole');
  window.location.href = ROUTES.CREATE_PARCEL;
};

const getToken = () => {
  return localStorage.getItem('apiToken');
};

const isLoggedIn = () => {
  return !!getToken();
};

export default { login, logout, isLoggedIn };
