import React from 'react';
import { Button, Img, Text } from '../../../components';

export interface PendingParcelProps {
  id: number;
  status: string;
  location: string;
  eta: string;
  onClick?: () => void;
}
function ParcelCard(props: PendingParcelProps) {
  const { id, status, location, eta } = props;

  return (
    <div className="">
      <div className="row bg-gray_100 p-3.5 rounded-[20px] w-full ">
        <div className="parcelRowElement ">
          <div className="parcelIcon">
            <Img
              src="images/img_mail_indigo_600.svg "
              className="w-[30px] bg-clip-padding"
              alt="mail"
            />
          </div>
        </div>
        <div className="parcelRowElement ">
          Parcel
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {id}
          </Text>
        </div>

        <div className="parcelRowElement ">
          Status
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {status}
          </Text>
        </div>
        <div className="parcelRowElement ">
          Location
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {location}
          </Text>
        </div>
        <div className="parcelRowElement ">
          ETA
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {eta}
          </Text>
        </div>
        <div className="parcelRowElement">
          <Button
            className="parcelRowElementDetails top-[1px]"
            shape="RoundedBorder25"
            size="sm"
            variant="OutlineIndigo500"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
export default ParcelCard;
