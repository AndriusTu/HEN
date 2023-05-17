export interface ShortAddress {
  country: string;
  postalCode: string;
}

export enum LocationType {
  DISTRIBUTION_POINT = 'DISTRIBUTION_POINT',
  ADDRESS = 'ADDRESS',
}

export interface FullAddress {
  type: LocationType;
  country: string;
  city: string;
  street: string;
  postalCode: string;
  description?: string;
  houseNumber: string;
  flatNumber: string;
}