import { User } from './UserModel';

export interface Parcel {
  id: number;
  sender: User;
  receiver: User;
  deliveryType: string;
  eta: string;
}
