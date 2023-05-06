import React from 'react';
import { Button, Text } from '../../../components';
import ContactInformationForm from '../components/ContactInformationForm';
import { ArrowSVG } from '../../../assets/images/arrow';
import { useForm } from 'react-hook-form';

interface ReceiverContactsTabProps {
  previousFormStep: () => void;
}

function ReceiverContactsTab(props: ReceiverContactsTabProps) {
  const { previousFormStep } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row gap-[25px] justify-start mt-[7px] w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start justify-between md:ml-[0] ml-8 pr-10 mt-5">
          <Text
            className="text-left text-indigo_600 mb-4"
            as="h2"
            variant="h2"
          >
            Receiver contact information
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
              <div>Register</div>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReceiverContactsTab;
