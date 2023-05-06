import { DeliveryOption } from '../models/DeliveryInfo';

const deliveryMethodsMock: DeliveryOption[] = [
  {
    eta: '1-2 days',
    deliveryType: 'Standard',
    price: '1.09',
  },
  {
    eta: '1 day',
    deliveryType: 'Express',
    price: '5.99',
  },
  {
    eta: '1 hour',
    deliveryType: 'Same day',
    price: '9.99',
  },
];

export default deliveryMethodsMock;
