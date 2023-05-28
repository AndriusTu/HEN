import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowSVG } from '../../../assets/images/arrow';
import { Button, Img, Text } from '../../../components';
import { LocationType } from '../../../models/AddressModel';
import { Dimensions } from '../../../models/DeliveryModel';
import { CreateParcelModel } from '../../../models/ParcelModel';
import { createParcel } from '../../../services/api/parcelService';
import { convertCmToM } from '../../../utils/measureUnitUtils';
import ContactInformationForm from '../components/ContactInformationForm';
import { useFormData } from '../context/CreateParcelFormContext';
import Modal from '../../../components/Modal';

interface ReceiverContactsTabProps {
  previousFormStep: () => void;
}

function ReceiverContactsTab(props: ReceiverContactsTabProps) {
  const { previousFormStep } = props;
  const [response, setResponse] = React.useState<
    'success' | 'error' | undefined
  >(undefined);
  const [showModal, setShowModal] = React.useState(false);
  const { data } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...data.receiverFullAddress,
      ...data.deliveryInfo.to,
      ...data.receiverContacts,
    },
  });

  const onSubmit = (formData) => {
    let dimensionsInCm = structuredClone(
      data.deliveryInfo.dimensions,
    ) as Dimensions;
    for (let key in dimensionsInCm) {
      dimensionsInCm[key] = convertCmToM(dimensionsInCm[key]);
    }

    const createParcelModel: CreateParcelModel = {
      sender: { ...data.senderContacts, location: data.senderFullAddress },
      receiver: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: {
          type: LocationType.ADDRESS,
          country: formData.country,
          postalCode: formData.postalCode,
          city: formData.city,
          street: formData.street,
          houseNumber: formData.houseNumber,
          flatNumber: formData.apartmentNumber,
        },
      },
      dimensions: dimensionsInCm,
      type: data.deliveryOption.deliveryType,
      eta: data.deliveryOption.eta,
    };

    createParcel(createParcelModel)
      .then(() => {
        setResponse('success');
        setShowModal(true);
      })
      .catch(() => {
        setResponse('error');
        setShowModal(true);
      });
  };

  return (
    <>
      <div className="flex flex-row gap-[25px] justify-start mt-[7px] w-full justify-center">
        {response === 'success' ? (
          <div className="flex flex-col items-center mt-10">
            <Img
              src="images/img_success.png"
              className="mx-auto"
              alt="parcel"
            />
            <Text
              className="text-bluegray_400"
              as="h2"
              variant="h2"
            >
              We’re on our way to pick up your parcel!
            </Text>
          </div>
        ) : (
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
        )}
      </div>
      <Modal
        type={response}
        isShow={response !== undefined && showModal}
        onClose={() => setShowModal(false)}
      >
        {response === 'success' && (
          <Text variant="h4">Parcel was created successfully</Text>
        )}
        {response === 'error' && <Text variant="h4">Something went wrong</Text>}
      </Modal>
    </>
  );
}

export default ReceiverContactsTab;
