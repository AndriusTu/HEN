import React from 'react';
import { Table, TableCell, TableRow } from '@mui/material';

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

function Delivery(props: DeliveryProps) {
  const {
    id,
    destinationAddress,
    currentAddress,
    status,
    receiverContactInformation,
  } = props;

  return (
    <Table sx={{ maxWidth: 650 }}>
      <TableRow>
        <TableCell variant="head">ID</TableCell>
        <TableCell>{id}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant="head">Destination address</TableCell>
        <TableCell>{`${destinationAddress.street}, ${destinationAddress.city}`}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant="head">Current address</TableCell>
        <TableCell>{`${currentAddress.street}, ${currentAddress.city}`}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant="head">Status</TableCell>
        <TableCell>{status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell variant="head">Receiver phone number</TableCell>
        <TableCell>{receiverContactInformation.phone}</TableCell>
      </TableRow>
    </Table>
  );
}

export default Delivery;
