import React from 'react';
import {Text} from "../../../components";

export interface DeliveryMethodCardProps {
  eta: string;
  deliveryType: string;
  price: string;
}

function DeliveryMethodCard(props: DeliveryMethodCardProps) {
  const {eta, deliveryType, price} = props;

  return (
    <div className="bg-indigo_600 flex flex-1 flex-col gap-[54px] items-center justify-end pt-[43px] rounded-[25px] w-full">
      <div className="flex flex-col gap-4 items-center justify-start w-[73%] md:w-full">
        <div className="flex flex-row items-start justify-between w-full">
          <Text
            className="font-normal not-italic text-left text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            ETA
          </Text>
          <Text
            className="font-normal not-italic text-right text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            {eta}
          </Text>
        </div>
        <div className="flex flex-row gap-8 items-start justify-between w-full">
          <Text
            className="font-normal not-italic text-left text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            Delivery type
          </Text>
          <Text
            className="font-normal not-italic text-right text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            {deliveryType}
          </Text>
        </div>
      </div>
      <div className="bg-gradient  flex flex-row items-center justify-between p-[22px] sm:px-5 rounded-bl-[25px] rounded-br-[25px] rounded-tl-none rounded-tr-none w-full">
        <Text
          className="font-normal ml-4 not-italic text-left text-white_A700 w-auto"
          as="h4"
          variant="h4"
        >
          Cost
        </Text>
        <Text
          className="font-normal mr-[15px] not-italic text-right text-white_A700 w-auto"
          as="h4"
          variant="h4"
        >
          {price} €
        </Text>
      </div>
    </div>
  )
}

export default DeliveryMethodCard;