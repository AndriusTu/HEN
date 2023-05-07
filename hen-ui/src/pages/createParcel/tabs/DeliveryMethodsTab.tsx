import React, { useEffect, useState } from 'react';
import { Text, List, Button } from '../../../components';
import DeliveryMethodCard from '../components/DeliveryMethodCard';
import { ArrowSVG } from '../../../assets/images/arrow';
import { useForm } from 'react-hook-form';
import { useFormData } from '../context/CreateParcelFormContext';
import { DeliveryOption } from '../../../models/DeliveryInfo';
import { capitalizeFirstLetter } from '../../../utils/stringUtils';

interface DeliveryMethodsTabProps {
  previousFormStep: () => void;
  nextFormStep: () => void;
  fetchDeliveryOptions: (requestData) => Promise<any>;
}

function DeliveryMethodsTab(props: DeliveryMethodsTabProps) {
  const { previousFormStep, nextFormStep, fetchDeliveryOptions } = props;
  const { data, setFormValues } = useFormData();
  const [deliveryOptions, setDeliveryOptions] = useState(
    [] as DeliveryOption[],
  );
  const [activeCard, setActiveCard] = useState<DeliveryOption>(
    data.deliveryOption,
  );
  const { handleSubmit, setValue } = useForm();

  useEffect(() => {
    fetchDeliveryOptions(data.deliveryInfo).then((responseData) => {
      let deliveryOptions = responseData as DeliveryOption[];
      deliveryOptions.forEach((deliveryOption) => {
        deliveryOption.deliveryType = capitalizeFirstLetter(
          deliveryOption.deliveryType,
        );
      });
      setDeliveryOptions(deliveryOptions);
      setActiveCard({ ...deliveryOptions[0], ...data.deliveryOption });
    });
  }, [data.deliveryInfo, data.deliveryOption, fetchDeliveryOptions]);

  const onSubmit = () => {
    setFormValues({ deliveryOption: activeCard });
    nextFormStep();
  };

  return (
    <div className="flex flex-col justify-start w-full pt-6 pr-8 pl-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
          <Text
            className="ml-0.5 md:ml-[0] text-indigo_600 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Choose your delivery type:
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            {deliveryOptions.map((deliveryMethod, index) => (
              <DeliveryMethodCard
                key={index}
                {...deliveryMethod}
                isActive={
                  activeCard?.deliveryType === deliveryMethod.deliveryType
                }
                onClick={() => {
                  setValue('deliveryOption', deliveryMethod);
                  setActiveCard(deliveryMethod);
                }}
              />
            ))}
          </List>
          <div className="flex flex-row gap-10 w-full justify-between mt-28">
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

export default DeliveryMethodsTab;
