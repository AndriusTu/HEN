import api from './api';
import { DeliveryInfo } from '../../models/DeliveryModel';

export const getDeliveryOptions = async (deliveryInfo: DeliveryInfo) => {
  const response = await api
    .post('/DeliveryOptions', deliveryInfo)
    .catch((e) => {
      console.log(e);
      return { data: [] };
    });

  return response.data;
};
