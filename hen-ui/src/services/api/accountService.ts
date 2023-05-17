import api from './api';
import { CreateCourier } from '../../models/UserModel';

export const createCourier = async (data: CreateCourier) => {
  const response = await api.post('/account/courier', data);
  return response.data;
};
