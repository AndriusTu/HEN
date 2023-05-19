import React, {useEffect, useState} from 'react';
import ParcelCard from './componenets/ParcelCard';
import {Parcel} from "../../models/GetParcelModel";
import {getParcels} from "../../services/api/parcelService";




function SeePendingDeliveries() {
    const [ParcelList, setParcelList] = useState([] as Parcel[]);
    useEffect(() => {
        getParcels().then((responseData) => {
            setParcelList(responseData);
        });
    });

    return (
        <div className="w-full">
            <div className="display-block">
                {ParcelList.map((parcelInformation, index) => (
                    // <div>
                    //     <p>{parcelInformation.id}</p>
                    // </div>
                    <div>
                        <ParcelCard
                            key={index}
                            {...parcelInformation}
                        />
                        {index}
                    </div>
                ))}
             </div>
        </div>
    );
}

export default SeePendingDeliveries;
