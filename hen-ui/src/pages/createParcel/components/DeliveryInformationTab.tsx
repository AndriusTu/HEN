import React from 'react';
import { Button, Img, Input, Text } from '../../../components';
import { useForm } from 'react-hook-form';
import { ArrowSVG } from '../../../assets/images/arrow';

function DeliveryInformationTab() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-start w-[87%] pt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between w-full">
            <div className="md:h-[219px] h-[231px] relative w-[65%] md:w-full">
              <Img
                src="images/img_depositphotos3.png"
                className="absolute bottom-[0] top-[20px] object-cover left-[120px] scale-50 rotate-3"
              />
              <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[53%]">
                <Text
                  className="text-indigo_600 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  From
                </Text>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[15px] w-full">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Country
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray300"
                    type="text"
                    errors={errors}
                    {...register('fromCountry', {
                      required: 'Required',
                      maxLength: { value: 20, message: 'Max length is 20' },
                    })}
                  ></Input>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-3.5 w-full">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Postal Code
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray300"
                    type="text"
                    errors={errors}
                    {...register('fromZipCode', {
                      required: 'Required',
                      maxLength: { value: 6, message: 'Max length is 6' },
                    })}
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
              <Text
                className="text-indigo_600 text-left w-auto"
                as="h2"
                variant="h2"
              >
                To
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[15px] w-full">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Country
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  type="text"
                  errors={errors}
                  {...register('toCountry', {
                    required: 'Required',
                    maxLength: { value: 20, message: 'Max length is 20' },
                  })}
                ></Input>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-start mt-3.5 w-full">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Postal Code
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  type="text"
                  errors={errors}
                  {...register('toZipCode', {
                    required: 'Required',
                    maxLength: { value: 20, message: 'Max length is 20' },
                  })}
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-indigo_600 text-left w-auto"
                as="h2"
                variant="h2"
              >
                Parcel metrics
              </Text>
              <Text
                className="font-normal mt-3.5 not-italic text-bluegray_400 text-left w-auto"
                as="h4"
                variant="h4"
              >
                Dimensions
              </Text>
              <div className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-2.5 w-full">
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                  placeholder="Length (cm)"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  type="number"
                  errors={errors}
                  {...register('length', {
                    required: 'Required',
                    max: { value: 1000, message: 'Max length is 1000' + ' cm' },
                  })}
                ></Input>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                  placeholder="Width (cm)"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  type="number"
                  errors={errors}
                  {...register('width', {
                    required: 'Required',
                    max: { value: 1000, message: 'Max width is 1000 cm' },
                  })}
                ></Input>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                  placeholder="Height (cm)"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  type="number"
                  errors={errors}
                  {...register('height', {
                    required: 'Required',
                    max: { value: 1000, message: 'Max height is 1000' + ' cm' },
                  })}
                ></Input>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
                  placeholder="Weight (kg)"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  type="number"
                  errors={errors}
                  {...register('weight', {
                    required: 'Required',
                    max: { value: 100, message: 'Max weight is 100 kg' },
                  })}
                ></Input>
              </div>
              <Button
                className="flex flex-row gap-2 cursor-pointer font-medium leading-[normal] ml-[330px] mt-7 text-md text-white_A700 w-auto"
                shape="RoundedBorder15"
                size="md"
                variant="FillIndigo600"
                type="submit"
              >
                <div>See delivery options</div>
                <ArrowSVG
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  direction="right"
                />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DeliveryInformationTab;
