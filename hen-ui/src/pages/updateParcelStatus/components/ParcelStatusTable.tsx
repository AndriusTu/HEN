import React from 'react';
import { Text } from '../../../components';
import { Parcel } from '../../../models/GetParcelModel';
import statusOptions from '../data/statusOptions';

interface ParcelStatusTableProps {
  parcelInformation: Parcel;
}

function ParcelStatusTable(props: ParcelStatusTableProps) {
  const { parcelInformation } = props;

  return (
    <>
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
      {parcelInformation.parcelStatus
        ?.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
        ?.map((statusInfo, index) => (
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
                {
                  statusOptions.filter(
                    (option) => option.value === statusInfo.status,
                  )[0].label
                }
              </Text>
            </div>
            <div className="w-1/3">
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {statusInfo.location.city}
              </Text>
            </div>
            <div className="w-1/3">
              <Text
                style={{ whiteSpace: 'nowrap' }}
                className="font-normal not-italic text-bluegray_400 text-left w-auto"
                as="h5"
                variant="h5"
              >
                {statusInfo.createdAt.slice(0, 10)}
              </Text>
            </div>
          </div>
        ))}
    </>
  );
}

export default ParcelStatusTable;
