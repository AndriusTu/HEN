import React from 'react';
import { Img, Text } from '../../../components';
import { Parcel } from '../../../models/GetParcelModel';

interface ParcelStatusTableProps {
  parcelInformation: Parcel;
}

function ParcelStatusTable(props: ParcelStatusTableProps) {
  const { parcelInformation } = props;

  return (
    <>
      <div
        className="parcelRowElement mb-3"
        style={{ verticalAlign: 'top' }}
      >
        <div className="flex flex-row gap-5">
          <div className="w-1/3">
            <Text>Status</Text>
          </div>
          <div className="w-1/3">
            <Text>Location</Text>
          </div>
          <div className="w-1/3">
            <Text>Date</Text>
          </div>
        </div>
        {parcelInformation.parcelStatus?.map((status_info, index) => (
          <div
            key={index}
            className="flex flex-row mt-4 gap-5"
          >
            <div className="w-1/3">
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {status_info.status}
              </Text>
            </div>
            <div className="w-1/3">
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {status_info.location.city}
              </Text>
            </div>
            <div className="w-1/3">
              <Text
                style={{ whiteSpace: 'nowrap' }}
                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {status_info.createdAt.slice(0, 10)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ParcelStatusTable;