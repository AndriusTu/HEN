import api from './api';

export const getParcels = async () => {
  const response = await api.get('/parcels');
  return response.data;
};

export const getParcelById = async (id: number) => {
  const response = await api.get(`/parcels/${id}`);
  return response.data;
};
