import { FullAddress } from './AddressModel';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface CreateUser {
  name: string;
  email: string;
  phone: string;
  location: FullAddress;
}

export interface CreateCourier {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
