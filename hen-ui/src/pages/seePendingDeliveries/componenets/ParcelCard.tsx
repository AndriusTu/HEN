import React from 'react';
import { Button, Img, Text } from '../../../components';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../../routes';
import { Parcel } from '../../../models/GetParcelModel';
import statusOptions from '../../updateParcelStatus/data/statusOptions';

function ParcelCard(this: any, props: Parcel) {
  const parcel = props;
  const navigate = useNavigate();
  const navigateToParcelStatusUpdate = () => {
    navigate(ROUTES.PARCEL_STATUS_UPDATE, { state: { id: parcel.id } });
  };
  const parcelStatus = parcel.parcelStatus.pop();

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
            {parcel.id}
          </Text>
        </div>

        <div className="parcelRowElement ">
          Status
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {
              statusOptions.filter(
                (option) => option.value === parcelStatus?.status,
              )[0]?.label
            }
          </Text>
        </div>
        <div className="parcelRowElement ">
          Location
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {parcelStatus?.location.type}
          </Text>
        </div>
        <div className="parcelRowElement ">
          ETA
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h5"
            variant="h5"
          >
            {parcel.eta.toString().slice(0, 10)}
          </Text>
        </div>
        <div className="parcelRowElement">
          <Button
            className="parcelRowElementDetails top-[1px]"
            shape="RoundedBorder25"
            size="sm"
            variant="OutlineIndigo500"
            onClick={navigateToParcelStatusUpdate}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ParcelCard;
