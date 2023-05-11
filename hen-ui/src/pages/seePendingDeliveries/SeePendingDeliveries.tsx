import React from 'react';
import ParcelCard from "./componenets/ParcelCard";
import SearchField from "./componenets/SearhField";
import pendingParcelMock from "../../mocks/pendingParcelMock";

function SeePendingDeliveries() {

    return (
        <div className="w-full">
            <div className="display-block">
                {pendingParcelMock.map((parcelInformation, index) => (
                    <ParcelCard
                        key={index}
                        {...parcelInformation}

                    />
                ))}
            </div>
        </div>
    )
}

export default SeePendingDeliveries;
