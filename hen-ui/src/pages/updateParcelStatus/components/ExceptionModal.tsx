import React, {useEffect, useState} from 'react';
import {StatusUpdateModel} from "../../../models/StatusUpdateModel";
import {updateParcelStatus} from "../../../services/api/parcelService";
function ExceptionModal(state: any){
    const [hasError, setHasError] = useState(state.hasError);
    const [transferObject, setTransferObject] = useState(state.transferObject as StatusUpdateModel);
    useEffect(() => {

    }, [transferObject])
    const handleClose = () => setHasError(false);
    const handleUpdate = () => {
        updateParcelStatus(state.id, transferObject).then((responseData) => {
            switch (responseData.status){
                case 200:
                    setTransferObject({
                        locationId: responseData.data.status.locationId,
                        status: responseData.data.status.status,
                    })
                    setHasError(true);
                    break;
                case 409:
                    setTransferObject({
                        locationId: transferObject.locationId,
                        status: transferObject.status,
                    })
                    setHasError(true);
                    break;
                default:
                    setHasError(true);
                    setTransferObject({
                        locationId: "-",
                        status: "-",
                    })
            }
        });
    }
    if(hasError){
        return (
            <div className="relative align-middle w-1/5" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-[20%] text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[40%]">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Status update has been interrupted</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Cannot perform latest update: {state.transferObject.status} {hasError}</p>
                                            <p className="text-sm text-gray-500">Error occurred while trying to submit your parcel status update. You can either try again or cancel current status update submission</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button  type="button"
                                         className="inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-1/3"
                                         onClick={handleUpdate}>
                                    Try again
                                </button>
                                <button type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={handleClose}>
                                    Cancel update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>
    }

}
export default ExceptionModal;
