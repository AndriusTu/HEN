import { DeliveryOption } from '../models/DeliveryModel';

const deliveryMethodsMock: DeliveryOption[] = [
  {
    eta: '1-2 days',
    deliveryType: 'Standard',
    cost: '1.09',
  },
  {
    eta: '1 day',
    deliveryType: 'Express',
    cost: '5.99',
  },
  {
    eta: '1 hour',
    deliveryType: 'Same day',
    cost: '9.99',
  },
];

export default deliveryMethodsMock;
