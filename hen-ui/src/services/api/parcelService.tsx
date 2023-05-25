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
export const getParcelLocations = async (id: number) => {
  const response = await api.get(`/parcels/${id}/locations`);
  return response.data;
};

export const updateParcelStatus = async (id: number, data: any) => {
  const response = await api.put(`/parcels/${id}/status`, data);
  return response;
};

export function updateParcelStatusModal(id, transferObject, setHasError, setTransferObject, parcelLocation, parcelStatus) {
  updateParcelStatus(id, transferObject).then((responseData) => {
    setTransferObject({
      locationId: parcelLocation,
      status: parcelStatus,
    })
    switch (responseData.status){
      case 200:
        setHasError(false);
        break;
      case 409:
        setTransferObject({
          locationId: parcelLocation,
          status: "`409",
        })
        setHasError(true);
        break;
      default:
        setHasError(true);
        setTransferObject({
          locationId: '',
          status: "unhandled error"
        })
    }
  });
}
