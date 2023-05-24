import React, { useEffect, useState } from 'react';
import { Button, Img, Text } from '../../components';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import statusOptions from './data/statusOptions';
import { getLocationOptions } from './data/statusOptions';
import Select from 'react-select';
import {
  getParcelById,
  getParcelLocations,
  updateParcelStatus,
} from '../../services/api/parcelService';
import { Parcel, ParcelLocation } from '../../models/GetParcelModel';
import { StatusUpdateModel } from '../../models/StatusUpdateModel';
import ParcelStatusTable from "./components/parcelStatusTable";
import ParcelInformation from "./components/parcelInformation";
function UpdateParcelStatus() {
  const { state } = useLocation();
  const [ParcelLocationList, setParcelLocationList] = useState(
    [] as ParcelLocation[],
  );

  useEffect(() => {
    getParcelLocations(state.id).then((responseData) => {
      setParcelLocationList(responseData);
    });
    getParcelById(state.id).then((responseData) => {
      setParcelInformation(responseData);
    });
  }, [state.id]);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [parcelStatus, setParcelStatus] = useState('');
  const [parcelLocation, setParcelLocation] = useState('');
  const [parcelInformation, setParcelInformation] = useState({} as Parcel);
  function getPhone() {
    if (
      parcelInformation.receiver?.phone == null ||
      parcelInformation.receiver?.phone === ''
    )
      return 'Not provided';
    else return parcelInformation.receiver?.phone;
  }

  const onSubmit = (data) => {
    console.log(data);
    const transferObject = {
      locationId: parcelLocation,
      status: parcelStatus,
    } as StatusUpdateModel;
    updateParcelStatus(state.id, transferObject).then((responseData) => {
      console.log(responseData);
    });
  };
  return (
    <div className="w-full">
      <div className="mt-5 mb-5 ml-5">
        <Text
          className="text-indigo_600 w-auto text-left "
          as="h2"
          variant="h2"
        >
          Update Parcel Status
        </Text>
      </div>
      <div className="row bg-gray_100 p-3.5 rounded-[20px] w-full parcel">
        <ParcelInformation parcelInformation={parcelInformation} />
        <ParcelStatusTable parcelInformation={parcelInformation} />
        <div className="inline-block h-80 w-0.5 self-stretch bg-indigo_600 mr-5"></div>
        <div className="parcelRowElement w-1/5">
          <div className="">
            <Text style={{ whiteSpace: 'nowrap' }}>Receiver</Text>
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
              as="h5"
              variant="h5"
            >
              {parcelInformation.receiver?.name}
            </Text>
            <div className="mt-4">
              <Text style={{ whiteSpace: 'nowrap' }}>Receiver Information</Text>
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
                as="h5"
                variant="h5"
              >
                Phone number: {getPhone()}
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
                as="h5"
                variant="h5"
              >
                Email: {parcelInformation.receiver?.email}
              </Text>
            </div>
            <div
              style={{ marginTop: '1%' }}
              className="w-[100%]"
            >
              <Text
                className="text-indigo_600 w-auto text-left "
                as="h2"
                variant="h2"
              >
                Update Parcel Status
              </Text>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row mt-4 max-w-fit">
                  <div className="basis-1/2 md:basis-1/3 mr-5">
                    <Select
                      className="text-ellipsis w-[150px]"
                      options={statusOptions}
                      placeholder="Status"
                      required={true}
                      onChange={(e: any) => {
                        setParcelStatus(e.value);
                      }}
                    />
                  </div>
                  <div className="basis-1/2 md:basis-1/3 w-[225px]">
                    <Select
                      className="text-ellipsis"
                      options={getLocationOptions(ParcelLocationList)}
                      placeholder="Location"
                      required={true}
                      onChange={(e: any) => {
                        setParcelLocation(e.value);
                      }}
                    />
                  </div>
                </div>
                <Button
                  className="content-start cursor-pointer font-medium mt-[30px] text-white_A700 w-full disabled:opacity-25"
                  shape="RoundedBorder25"
                  size="md"
                  variant="FillIndigo600"
                  type="submit"
                  // disabled={!isValid}
                >
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateParcelStatus;
