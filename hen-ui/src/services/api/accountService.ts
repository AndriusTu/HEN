import ROLES from '../../enums/roles';
import { CreateCourier } from '../../models/UserModel';
import api from './api';

export const createCourier = async (data: CreateCourier) => {
  const response = await api.post('/account/courier', data);
  return response.data;
};

export const loadUserRole = async () => {
  const response = await api.get('/account/role');
  localStorage.setItem('userRole', response.data);
};

export const getUserRole = () => {
  let role = localStorage.getItem('userRole');
  if (!role) {
    role = ROLES.GUEST;
  }
  return role;
};
