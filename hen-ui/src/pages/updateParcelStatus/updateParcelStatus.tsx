import React from 'react';
import { Button, Img, Text } from '../../components';
import { useLocation } from 'react-router-dom';
import parcelDetailsMock, {
  StatusHistory,
} from '../../mocks/parcelDetailsMock';

import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

// export interface getParcelDetails
// {
//     // tailwind
//     // https://tailwindcss.com/docs/flex
//     //     Viktorija Baikauskaitė1:42 PM
//     // https://www.npmjs.com/package/react-select
//     //     https://mui.com/material-ui/getting-started/installation/
//     //     Viktorija Baikauskaitė1:50 PM
//     // React context
//     id : number,
//     eta : string;
//     status_history: //atskiras interfeisas
//
//             StatusHistory [],
//     receiver:
//         {
//             name: string;
//             surname: string;
//             phone: string;
//             address: Addre;
//         };
// }
function UpdateParcelStatus() {
  const { state } = useLocation();

  function getParcelDetails(id) {
    return parcelDetailsMock;
  }
  const status_div = document.getElementById('status_div')?.offsetWidth;
  const parcel_loc_div = document.getElementById('parcel_loc_div')?.offsetWidth;
  const date_div = document.getElementById('date_div')?.offsetWidth;
  const parcelDetailObject = getParcelDetails(state.id);
  return (
    <div className="w-full">
      <div>
        <div //HEADER
          style={{ marginTop: '1%' }}
        >
          <Text
            className="text-indigo_600 w-auto text-left "
            as="h2"
            variant="h2"
          >
            Update Parcel Status {state.id}
          </Text>
        </div>
      </div>
      <div className="row bg-gray_100 p-3.5 rounded-[20px] w-full parcel">
        <div
          className="parcelRowElement"
          style={{ verticalAlign: 'top' }}
        >
          <div className="parcelIcon parcelRowElement ">
            <Img
              src="images/img_mail_indigo_600.svg "
              className="w-[30px] bg-clip-padding p-1"
              alt="mail"
            />
          </div>
        </div>

        <div
          className="parcelRowElement"
          style={{ verticalAlign: 'top' }}
        >
          <div style={{ verticalAlign: 'top' }}>
            Parcel
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h5"
              variant="h5"
            >
              {parcelDetailsMock.id}
            </Text>
            ETA
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h5"
              variant="h5"
              style={{ whiteSpace: 'nowrap' }}
            >
              {parcelDetailsMock.eta}
            </Text>
          </div>
        </div>
        <div
          className="parcelRowElement mb-3"
          style={{ verticalAlign: 'top' }}
        >
          <div className="flex flex-row ">
            <div className="basis-1/3 md:basis-1/3">
              <Text style={{ whiteSpace: 'nowrap' }}>Status</Text>
            </div>
            <div className="basis-1/3 md:basis-1/3">
              <Text style={{ whiteSpace: 'nowrap' }}>Parcel location</Text>
            </div>
            <div className="basis-1/3 md:basis-1/3 pl-5">
              <Text style={{ whiteSpace: 'nowrap' }}>Date</Text>
            </div>
          </div>
          {parcelDetailsMock.status_history.map((status_info, index) => (
            <div
              key={index}
              className="flex flex-row mt-4"
              style={{ paddingTop: '0' }}
            >
              <div className="basis-1/3 md:basis-1/3">
                {/*<Text style={{whiteSpace:"nowrap"}}>Date</Text>*/}
                <Text
                  style={{ whiteSpace: 'nowrap' }}
                  className="font-normal not-italic text-bluegray_400 text-left w-auto mr-2"
                  as="h5"
                  variant="h5"
                >
                  {status_info.status}
                </Text>
              </div>
              <div
                className="basis-1/3 md:basis-1/3"
                style={{ paddingTop: '0' }}
              >
                <Text
                  style={{ whiteSpace: 'nowrap' }}
                  className="font-normal not-italic text-bluegray_400 text-left w-auto mr-2"
                  as="h5"
                  variant="h5"
                >
                  {status_info.location}
                </Text>
              </div>
              <div
                className="basis-1/3 md:basis-1/3 pl-5"
                style={{ paddingTop: '0' }}
              >
                <Text
                  style={{ whiteSpace: 'nowrap' }}
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  {status_info.date}
                </Text>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="parcelRowElement">
            <div className="">
              <Text style={{ whiteSpace: 'nowrap' }}>Receiver</Text>
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
                as="h5"
                variant="h5"
              >
                {parcelDetailsMock.receiver.name}{' '}
                {parcelDetailsMock.receiver.surname}
              </Text>
              <div className="mt-4">
                <Text style={{ whiteSpace: 'nowrap' }}>
                  Receiver Information
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
                  as="h5"
                  variant="h5"
                >
                  {parcelDetailsMock.receiver.phone.phone}
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
                  as="h5"
                  variant="h5"
                >
                  {parcelDetailsMock.receiver.address.street
                    .toString()
                    .concat(' ', parcelDetailsMock.receiver.address.city)}
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto row mt-4"
                  as="h5"
                  variant="h5"
                >
                  {parcelDetailsMock.receiver.address.zip}
                </Text>
              </div>
            </div>
            <div //HEADER
              style={{ marginTop: '1%' }}
            >
              <Text
                className="text-indigo_600 w-auto text-left "
                as="h2"
                variant="h2"
              >
                Update Parcel Status
              </Text>
              <div className="flex flex-row mt-4 max-w-fit">
                <div className="basis-1/2 md:basis-1/3 mr-5">
                  {/*Jei 6ios vietos nesimato, npm install --force react-select*/}
                  <Select
                    className="text-ellipsis w-[150px]"
                    options={options}
                    placeholder="Status"
                  />
                </div>
                <div className="basis-1/2 md:basis-1/3 w-[150px]">
                  <Select
                    className="text-ellipsis"
                    options={options}
                    placeholder="Location"
                  />
                </div>
              </div>
              <Button
                className="content-start cursor-pointer font-medium mt-[30px] text-white_A700 w-full"
                shape="RoundedBorder25"
                size="md"
                variant="FillIndigo600"
                type="submit"
              >
                Update
              </Button>
            </div>
            {/*<div className="align-middle">*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateParcelStatus;
