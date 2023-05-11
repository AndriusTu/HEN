import { User } from './UserModel';
import {FullAddress} from "./DeliveryModel";

export interface Parcel {
  id: number;
  sender: User;
  receiver: User;
  description: string;
  deliveryType: string;
  eta: string;
  parcelStatus: ParcelStatus[];
}

export interface ParcelStatus {
  id: number;
  status: string;
  address: FullAddress;
  deliveryType: string;
  eta: string;
}
