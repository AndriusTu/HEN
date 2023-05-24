import React from 'react';
import { Text } from '../../../components';
import { Parcel } from '../../../models/GetParcelModel';

interface ReceiverInformationProps {
  parcelInformation: Parcel;
}

function ReceiverInformation(props: ReceiverInformationProps) {
  const { parcelInformation } = props;

  function getPhone() {
    if (
      parcelInformation.receiver?.phone == null ||
      parcelInformation.receiver?.phone === ''
    )
      return 'Not provided';
    else return parcelInformation.receiver?.phone;
  }

  return (
    <>
      <Text style={{ whiteSpace: 'nowrap' }}>Receiver</Text>
      <Text
        className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
        as="h5"
        variant="h5"
      >
        {parcelInformation.receiver?.name}
      </Text>
      <div className="mt-4">
        <Text style={{ whiteSpace: 'nowrap' }}>Receiver Information</Text>
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
          as="h5"
          variant="h5"
        >
          Phone number: {getPhone()}
        </Text>
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
          as="h5"
          variant="h5"
        >
          Email: {parcelInformation.receiver?.email}
        </Text>
      </div>
    </>
  );
}

export default ReceiverInformation;
