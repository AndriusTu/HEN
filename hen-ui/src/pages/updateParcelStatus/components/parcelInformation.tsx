import React from 'react';
import { Img, Text } from '../../../components';
import {Parcel} from "../../../models/GetParcelModel";

interface ParcelInformationProps {
  parcelInformation: Parcel;
}

function ParcelInformation(props: ParcelInformationProps) {
  const { parcelInformation } = props;

  return (
   <>
     <div
       className="parcelRowElement"
       style={{ verticalAlign: 'top' }}
     >
       <div className="parcelIcon parcelRowElement">
         <Img
           src="images/img_mail_indigo_600.svg "
           className="w-[30px] bg-clip-padding p-1"
           alt="mail"
         />
       </div>
     </div>

     <div
       className="parcelRowElement w-1/6"
       style={{ verticalAlign: 'top' }}
     >
       <div style={{ verticalAlign: 'top' }}>
         Parcel
         <Text
           className="font-normal not-italic text-bluegray_400 text-left w-fit"
           as="h5"
           variant="h5"
         >
           {parcelInformation.id}
         </Text>
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
   </>
  );
}

export default ParcelInformation;
