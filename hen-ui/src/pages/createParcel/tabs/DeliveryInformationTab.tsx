import React from 'react';
import { Button, Img, Input, Text } from '../../../components';
import { useForm } from 'react-hook-form';
import { ArrowSVG } from '../../../assets/images/arrow';
import { getDeliveryOptions } from '../../../services/api/deliveryOptionsService';
import { DeliveryInfo, DeliveryOption } from '../../../models/DeliveryInfo';
import { useFormData } from '../context/CreateParcelFormContext';

interface DeliveryInformationTabProps {
  nextFormStep: () => void;
}

function DeliveryInformationTab(props: DeliveryInformationTabProps) {
  const { nextFormStep } = props;
  const { data, setFormValues } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: data.deliveryInfo });

  const onSubmit = (data: any) => {
    setFormValues({ deliveryInfo: data });
    const requestData = structuredClone(data) as DeliveryInfo;
    requestData.dimensions.length = convertCmToM(requestData.dimensions.length);
    requestData.dimensions.width = convertCmToM(requestData.dimensions.width);
    requestData.dimensions.height = convertCmToM(requestData.dimensions.height);
    console.log(requestData);
    const responseData = getDeliveryOptions(requestData);
    console.log(responseData);
    nextFormStep();
  };

  const convertCmToM = (cm: number) => {
    return cm / 100;
  };

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
                    {...register('from.country', {
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
                    {...register('from.postalCode', {
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
                  {...register('to.country', {
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
                  {...register('to.postalCode', {
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
                  {...register('dimensions.length', {
                    required: 'Required',
                    valueAsNumber: true,
                    min: { value: 1, message: 'Min length is 1 cm' },
                    max: { value: 64, message: 'Max length is 64 cm' },
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
                  {...register('dimensions.width', {
                    required: 'Required',
                    valueAsNumber: true,
                    min: { value: 1, message: 'Min width is 1 cm' },
                    max: { value: 38, message: 'Max width is 38 cm' },
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
                  {...register('dimensions.height', {
                    required: 'Required',
                    valueAsNumber: true,
                    min: { value: 1, message: 'Min height is 1 cm' },
                    max: { value: 39, message: 'Max height is 39 cm' },
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
                  {...register('dimensions.weight', {
                    required: 'Required',
                    valueAsNumber: true,
                    min: { value: 0.05, message: 'Min weight is 0.05 kg' },
                    max: { value: 30, message: 'Max weight is 30 kg' },
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
