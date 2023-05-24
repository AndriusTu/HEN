import React from 'react';
import { Text } from '../../../components';
import { Parcel } from '../../../models/GetParcelModel';

interface ParcelInformationProps {
  parcelInformation: Parcel;
}

function ParcelInformation(props: ParcelInformationProps) {
  const { parcelInformation } = props;

  return (
    <div
      className="flex flex-col gap-3"
      style={{ verticalAlign: 'top' }}
    >
      <div>
        Parcel
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-fit"
          as="h5"
          variant="h5"
        >
          {parcelInformation.id}
        </Text>
      </div>
      <div>
        ETA
        <Text
          className="font-normal not-italic text-bluegray_400 text-left pr-0 text-ellipsis"
          as="h5"
          variant="h5"
          style={{ whiteSpace: 'nowrap' }}
        >
          {parcelInformation.eta?.slice(0, 10)}
        </Text>
      </div>
    </div>
  );
}

export default ParcelInformation;
