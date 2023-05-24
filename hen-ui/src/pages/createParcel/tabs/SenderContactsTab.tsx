import React from 'react';
import { Button, Input, Text } from '../../../components';
import ContactInformationForm from '../components/ContactInformationForm';
import { ArrowSVG } from '../../../assets/images/arrow';
import { useForm } from 'react-hook-form';
import { useFormData } from '../context/CreateParcelFormContext';
import { LocationType } from '../../../models/AddressModel';

interface SenderContactsTabProps {
  previousFormStep: () => void;
  nextFormStep: () => void;
}

function SenderContactsTab(props: SenderContactsTabProps) {
  const { previousFormStep, nextFormStep } = props;
  const { data, setFormValues } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...data.senderFullAddress,
      ...data.deliveryInfo.from,
      ...data.senderContacts,
    },
  });

  const onSubmit = (data) => {
    setFormValues({
      senderContacts: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      senderFullAddress: {
        type: LocationType.ADDRESS,
        country: data.country,
        postalCode: data.postalCode,
        city: data.city,
        street: data.street,
        houseNumber: data.houseNumber,
        flatNumber: data.apartmentNumber,
      },
    });
    nextFormStep();
  };

  return (
    <div className="flex flex-row gap-[25px] justify-start mt-[7px] w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start justify-between md:ml-[0] ml-8 pr-10 md:w-full mt-5">
          <Text
            className="text-left text-indigo_600 mb-4"
            as="h2"
            variant="h2"
          >
            Your contact information
          </Text>
          <ContactInformationForm
            register={register}
            errors={errors}
          />
          <div className="flex flex-row gap-10 w-full justify-between">
            <Button
              className="flex flex-row gap-2 justify-center items-center cursor-pointer font-medium leading-[normal] min-w-[190px] mt-5 text-center text-md text-indigo_600 w-auto"
              shape="RoundedBorder15"
              size="md"
              variant="OutlineIndigo500"
              type="button"
              onClick={previousFormStep}
            >
              <ArrowSVG
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                direction="left"
              />
              <div>Go back</div>
            </Button>
            <Button
              className="flex flex-row gap-2 justify-center items-center cursor-pointer font-medium leading-[normal] min-w-[190px] mt-5 text-md text-white_A700 w-auto"
              shape="RoundedBorder15"
              size="md"
              variant="FillIndigo600"
              type="submit"
            >
              <div>Next</div>
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
      </form>
    </div>
  );
}

export default SenderContactsTab;
