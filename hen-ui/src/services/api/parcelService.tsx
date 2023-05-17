import api from './api';
import { CreateParcelModel } from '../../models/ParcelModel';

export const getParcels = async () => {
  const response = await api.get('/parcels');
  return response.data;
};

export const getParcelById = async (id: number) => {
  const response = await api.get(`/parcels/${id}`);
  return response.data;
};

export const createParcel = async (data: CreateParcelModel) => {
  const response = await api.post('/parcels', data);
  return response.data;
};
