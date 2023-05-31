import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Img, Input, Text } from '../../components';
import Modal from '../../components/Modal';
import { createCourier } from '../../services/api/accountService';
import { emailRegex, lithuanianPhoneRegex } from '../../utils/stringUtils';

function CreateCourierPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [response, setResponse] = React.useState<
    'success' | 'error' | undefined
  >(undefined);

  const onSubmit = (data: any) => {
    createCourier(data)
      .then(() => {
        setResponse('success');
        reset();
      })
      .catch(() => {
        setResponse('error');
      });
  };

  return (
    <>
      <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start mb-14 md:mt-0 mt-6 p-[25px] sm:px-5 rounded-[25px] w-full">
        <div className="flex flex-row items-start justify-between w-full gap-10">
          <div className="flex flex-row w-1/6">
            <Img
              src="images/img_ellipse28_130x130.png"
              alt="ellipseTwentyEight_One"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start justify-start w-full gap-8"
          >
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  First Name
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  errors={errors}
                  {...register('firstName', { required: 'Required' })}
                ></Input>
              </div>
              <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] md:w-full">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Last Name
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                  errors={errors}
                  {...register('lastName', { required: 'Required' })}
                ></Input>
              </div>
            </div>
            <div className="flex flex-row gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Phone Number
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                  shape="RoundedBorder15"
                  type="phone"
                  size="sm"
                  variant="OutlineGray300"
                  errors={errors}
                  {...register('phone', {
                    required: 'Required',
                    pattern: {
                      value: lithuanianPhoneRegex,
                      message: 'Invalid phone number',
                    },
                  })}
                ></Input>
              </div>
              <div className="flex md:flex-1 flex-col gap-2.5 items-start justify-start w-[49%] md:w-full">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Email
                </Text>
                <Input
                  wrapClassName="w-full"
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                  shape="RoundedBorder15"
                  type="email"
                  size="sm"
                  variant="OutlineGray300"
                  errors={errors}
                  {...register('email', {
                    required: 'Required',
                    pattern: {
                      value: emailRegex,
                      message: 'Invalid email address',
                    },
                  })}
                ></Input>
              </div>
            </div>
            <div className="flex flex-row justify-end w-full pr-24">
              <Button
                className="cursor-pointer font-medium min-w-[190px] mt-8 text-center text-lg text-white_A700 w-auto"
                shape="RoundedBorder15"
                size="lg"
                type="submit"
                variant="FillIndigo600"
              >
                Add courier
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        type={response}
        isShow={response !== undefined}
        onClose={() => setResponse(undefined)}
      >
        {response === 'success' && (
          <Text variant="h4">Courier was created successfully</Text>
        )}
        {response === 'error' && <Text variant="h4">Something went wrong</Text>}
      </Modal>
    </>
  );
}

export default CreateCourierPage;
