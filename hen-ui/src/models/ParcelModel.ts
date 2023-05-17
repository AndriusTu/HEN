import { CreateUser, User } from './UserModel';
import { Dimensions } from './DeliveryModel';
import { FullAddress } from './AddressModel';

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

export interface CreateParcelModel {
  sender: CreateUser;
  receiver: CreateUser;
  dimensions: Dimensions;
  type: string;
  description?: string;
  eta: string;
}