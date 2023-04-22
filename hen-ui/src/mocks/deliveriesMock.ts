interface UserContactInformation {
  phone: string;
}

interface Address {
  street: string;
  city: string;
  zip: string;
  country: string;
}

export interface DeliveryProps {
  id: string;
  destinationAddress: Address;
  currentAddress: Address;
  status: string;
  receiverContactInformation: UserContactInformation;
}

const deliveriesMock: DeliveryProps[] = [
  {
    id: '1',
    destinationAddress: {
      street: 'Street 1',
      city: 'City 1',
      zip: 'Zip 1',
      country: 'Country 1',
    },
    currentAddress: {
      street: 'Street 1',
      city: 'City 1',
      zip: 'Zip 1',
      country: 'Country 1',
    },
    status: 'In Transit',
    receiverContactInformation: {
      phone: '123456789',
    },
  },
  {
    id: '2',
    destinationAddress: {
      street: 'Street 2',
      city: 'City 2',
      zip: 'Zip 2',
      country: 'Country 2',
    },
    currentAddress: {
      street: 'Street 2',
      city: 'City 2',
      zip: 'Zip 2',
      country: 'Country 2',
    },
    status: 'In Transit',
    receiverContactInformation: {
      phone: '123456789',
    },
  },
];

export default deliveriesMock;
