import React from 'react';
import { Img, Text, Input, Button } from '../../components';
import { useForm } from 'react-hook-form';
import { Parcel } from '../../models/ParcelModel';
import { getParcelById } from '../../services/api/parcelService';

function GetParcelByIdPage() {
  const [parcel, setParcel] = React.useState<Parcel | null>(null);
  const [isNotFound, setIsNotFound] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    getParcelById(data.id).then((parcel) => {
      setParcel(parcel);
    }).catch((error) => {
      console.log(error)
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
                  className="mt-auto mb-px cursor-pointer mr-[15px]"
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
        <div />
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
