import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Img, Input, Text } from '../../components';
import { Parcel } from '../../models/GetParcelModel';
import { getParcelById } from '../../services/api/parcelService';
import ParcelInformation from '../updateParcelStatus/components/ParcelInformation';
import ParcelStatusTable from '../updateParcelStatus/components/ParcelStatusTable';
import ReceiverInformation from '../updateParcelStatus/components/ReceiverInformation';

function GetParcelByIdPage() {
  const [parcel, setParcel] = React.useState<Parcel | null>(null);
  const [isNotFound, setIsNotFound] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    getParcelById(data.id)
      .then((parcel) => {
        console.log(parcel);
        setParcel(parcel);
      })
      .catch((error) => {
        setIsNotFound(true);
        setParcel(null);
      });
  };

  return (
    <div className="flex flex-col w-full pr-10 pl-10 pt-10">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col">
          <Text
            className="text-indigo_600"
            as="h2"
            variant="h2"
          >
            Where is my parcel?
          </Text>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row gap-2">
            <Input
              wrapClassName="flex flex-row"
              className="font-normal leading-[normal] not-italic placeholder:text-bluegray_400 text-[15px] text-bluegray_400 w-full h-5"
              placeholder="Parcel number"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="mt-auto mb-px mr-[15px]"
                  alt="search"
                />
              }
              shape="srcCircleBorder25"
              size="smSrc"
              variant="srcFillGray101"
              errors={errors}
              {...register('id', { required: 'Required' })}
            ></Input>
            <Button
              className="flex cursor-pointer font-medium h-12 text-md text-white_A700 w-auto"
              shape="RoundedBorder15"
              size="md"
              variant="FillIndigo600"
              type="submit"
            >
              <div>Search</div>
            </Button>
          </div>
        </form>
      </div>
      {parcel ? (
        <div className="row bg-gray_100 p-3.5 rounded-[20px] w-full parcel">
          <div className="flex flex-row w-full mt-3">
            <div
              className="parcelRowElement w-1/12"
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
            <div className="w-2/12">
              <ParcelInformation parcelInformation={parcel} />
            </div>
            <div className="w-6/12">
              <ParcelStatusTable parcelInformation={parcel} />
            </div>
            <div className="inline-block h-80 w-0.5 self-stretch bg-indigo_600 mr-5 ml-3"></div>
            <div className="w-4/12">
              <ReceiverInformation parcelInformation={parcel} />
            </div>
          </div>
        </div>
      ) : isNotFound ? (
        <div className="flex flex-col items-center mt-20">
          <Img
            src="images/img_not_found.png"
            className="mx-auto rotate-15"
            alt="parcel"
          />
          <Text
            className="text-bluegray_400"
            as="h2"
            variant="h2"
          >
            Parcel not found
          </Text>
        </div>
      ) : (
        <div className="flex flex-col">
          <Img
            src="images/img_search_parcel.png"
            className="mx-auto rotate-15"
            alt="parcel"
          />
        </div>
      )}
    </div>
  );
}

export default GetParcelByIdPage;
