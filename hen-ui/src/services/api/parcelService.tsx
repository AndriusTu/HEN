import { CreateParcelModel } from '../../models/ParcelModel';
import api from './api';

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
export const getParcelLocations = async (id: number) => {
  const response = await api.get(`/parcels/${id}/locations`);
  return response.data;
};

export const updateParcelStatus = async (id: number, data: any) => {
  const response = await api.put(`/parcels/${id}/status`, data);
  return response;
};
