import { CreateUser } from './UserModel';
import {FullAddress, ShortAddress} from "./AddressModel";

export interface DeliveryInfo {
  from: ShortAddress;
  to: ShortAddress;
  dimensions: Dimensions;
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
  senderContacts: CreateUser;
  senderFullAddress: FullAddress;
  receiverContacts: CreateUser;
  receiverFullAddress: FullAddress;
}
