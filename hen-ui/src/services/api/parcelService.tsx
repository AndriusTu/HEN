import api from './api';

const getParcels = async () => {
  const response = await api.get('/parcels');
  return response.data;
};

export default { getParcels };
