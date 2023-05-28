import React, { useEffect, useState } from 'react';
import { Parcel } from '../../models/GetParcelModel';
import { getParcels } from '../../services/api/parcelService';
import ParcelCard from './componenets/ParcelCard';

function SeePendingDeliveries() {
  const [ParcelList, setParcelList] = useState([] as Parcel[]);
  useEffect(() => {
    getParcels().then((responseData) => {
      setParcelList(responseData);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="display-block">
        {ParcelList.length > 0 &&
          ParcelList.map((parcelInformation, index) => (
            <div className="py-2">
              <ParcelCard
                key={index}
                {...parcelInformation}
              />
            </div>
          ))}
        {ParcelList.length === 0 && <div>No parcels found</div>}
      </div>
    </div>
  );
}

export default SeePendingDeliveries;
