import { UserInfo } from './UserInfo';

export interface DeliveryInfo {
  from: ShortAddress;
  to: ShortAddress;
  dimensions: Dimensions;
}

export interface ShortAddress {
  country: string;
  postalCode: string;
}

export interface FullAddress {
  country: string;
  postalCode: string;
  city: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  weight: number;
}

export interface DeliveryOption {
  eta: string;
  deliveryType: string;
  cost: string;
}

export interface CreateParcelForm {
  deliveryInfo: DeliveryInfo;
  deliveryOption: DeliveryOption;
  senderContacts: UserInfo;
  senderFullAddress: FullAddress;
  receiverContacts: UserInfo;
  receiverFullAddress: FullAddress;
}
