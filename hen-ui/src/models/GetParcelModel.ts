import { User } from './UserModel';
import { Courier } from './CourierModel';

export interface Parcel {
  id: number;
  sender: User; //internal structure does not match the API
  receiver: User;
  courier: Courier;
  size: string;
  type: string;
  description: string;
  eta: string;
  parcelStatus: ParcelStatus[];
}

export interface ParcelStatus {
  id: number;
  status: string;
  location: ParcelLocation;
  deliveryType: string;
  createdAt: string;
}

export interface ParcelLocation {
  id: number;
  type: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  flatNumber: number;
  postalCode: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
