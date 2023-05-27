import React, {useEffect, useState} from 'react';
import {StatusUpdateModel} from "../../../models/StatusUpdateModel";
import {getParcelById, updateParcelStatus} from "../../../services/api/parcelService";
import {Parcel, ParcelStatus} from "../../../models/GetParcelModel";
import ROUTES from "../../../routes";
import {useNavigate} from "react-router-dom";
function ExceptionModal(state: any){
    const [hasError, setHasError] = useState(state.hasError);
    const [transferObject, setTransferObject] = useState(state.transferObject as StatusUpdateModel);
    const [responseVersion, setResponseVersion] = useState(state.modalResponseVersion);
    const [lastState, setLastState] = useState({} as StatusUpdateModel)//state.transferObject as StatusUpdateModel);
    const [parcelId, setParcelId] = useState(state.id);
    const [updateMessage, setUpdateMessage] = useState("")
    const [reload, setReload] = useState(state.reload);
    const [compare, setCompare] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        let lastStateObject = getLastState();
       setLastState({
              locationId: lastStateObject.locationId,
                status: lastStateObject.status,
                version: lastStateObject.version
       });
    }, [transferObject, hasError, reload])
    const handleClose = () => {
        setHasError(false);
    }
    const handleReload = () => {
        setReload(!reload);
        setHasError(false);
    }
    const handleCompare = () => {
        setReload(!reload)
        setCompare(!compare);
    }
    const handleOverwrite = () => {
        setTransferObject({
            locationId: transferObject.locationId,
            status: transferObject.status,
            version: responseVersion
        })
        updateParcelStatus(state.id, transferObject).then((responseData) => {
            setUpdateMessage(responseData.data.message);
            setReload(!reload);
            setHasError(false);
        }).catch((error) => {
            if (error.response.status === 409) {
                setHasError(true);
                setResponseVersion(error.response.data.version);
            }
            }
        );
        setReload(!reload);
        navigate(ROUTES.PARCEL_STATUS_UPDATE, { state: { id: parcelId } });
    }
    const getLastState = () => {
        let lastDateState = {} as ParcelStatus;
        getParcelById(parcelId).then((responseData : Parcel) => {
            const latestDate = new Date(Math.max(...responseData.parcelStatus.map(e => new Date(e.createdAt).getTime())));
            lastDateState = responseData.parcelStatus.find((obj) => {
                return new Date(obj.createdAt).getTime() === latestDate.getTime();
            }) as ParcelStatus;
            setLastState({
                locationId: lastDateState.location.id,
                status: lastDateState.status,
                version: responseData.version!
            })
            return lastState;
        });
        return lastState;
    }
    if(hasError){
        return (
            <div className="relative align-middle w-1/5" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"></div>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-[20%] text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[80%]">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Status update has been interrupted</h3>
                                        <p className="text-sm text-gray-500">Error occurred while trying to submit your parcel status update. You can either try again or cancel current status update submission</p>
                                        { compare ? (
                                        <div className="sm:flex-col content-stretch">
                                            <div className="mt-2 w-[46%] p-[1%] inline-block align-text-top pt-0">
                                                <h2 className="text-sm text-gray-500">State you tried to submit: </h2>
                                                <p>{state.transferObject.status}</p>
                                                <p className="text-sm text-gray-500">Your parcel version: </p>
                                                <p>{state.transferObject.version}</p>
                                            </div>
                                            <div className="mt-2 w-[46%] inline-block align-text-top border-l-2 pl-3 pt-0">
                                                <h2 className="text-sm text-gray-500">Last confirmed state:  </h2>
                                                <p>{lastState.status}</p>
                                                <p className="text-sm text-gray-500">Database parcel version:</p>
                                                <p> {responseVersion} </p>
                                            </div>
                                        </div>) : <></>
                                    }
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6  border-t-2">
                                <div className="sm:flex-col content-stretch">
                                    <button  type="button"
                                             className="w-[45%] mr-[5%] justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-1/3"
                                             onClick={handleReload}>
                                        Reload page and try again
                                    </button>

                                    <button  type="button"
                                             className="w-[45%] ml-[5%] justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-1/3"
                                             onClick={handleCompare}>
                                        Compare last state with your state
                                    </button>
                                    <button  type="button"
                                             className="mt-[5%] inline-flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 sm:ml-3 sm:w-1/3"
                                             onClick={handleOverwrite}>
                                        Ignore and submit anyway
                                    </button>
                                    <button type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 sm:mt-0 sm:w-auto"
                                            onClick={handleClose}>
                                        Cancel update
                                    </button>
                                </div>
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
