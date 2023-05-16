import React from 'react';
import { Img, Text } from '../../../components';
import { useLocation } from 'react-router-dom';

function ParcelInformation() {
  const { state } = useLocation();
  return (
    <div className="parcelIcon">
      <Img
        src="images/img_mail_indigo_600.svg "
        className="w-[30px] bg-clip-padding"
        alt="mail"
      />
      <Text>{state.id}</Text>
      <Text>{state.eta}</Text>
    </div>
  );
}

export default ParcelInformation;
