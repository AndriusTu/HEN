import { DeliveryInfo } from '../../models/DeliveryModel';
import api from './api';

export const getDeliveryOptions = async (deliveryInfo: DeliveryInfo) => {
  const response = await api
    .post('/DeliveryOptions', deliveryInfo)
    .catch((e) => {
      return { data: [] };
    });

  return response.data;
};
