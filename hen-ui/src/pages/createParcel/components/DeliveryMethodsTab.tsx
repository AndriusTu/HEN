import React from 'react';
import { Text, List, Button } from '../../../components';
import DeliveryMethodCard from './DeliveryMethodCard';
import deliveryMethodsMock from '../../../mocks/deliveryMethodsMock';
import { ArrowSVG } from '../../../assets/images/arrow';

function DeliveryMethodsTab() {
  const [activeCard, setActiveCard] = React.useState<string | undefined>(
    undefined,
  );

  return (
    <div className="flex flex-col items-center justify-start w-full pt-6 pr-10 pl-8">
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
          {deliveryMethodsMock.map((deliveryMethod, index) => (
            <DeliveryMethodCard
              key={index}
              {...deliveryMethod}
              isActive={activeCard === deliveryMethod.deliveryType}
              onClick={() => setActiveCard(deliveryMethod.deliveryType)}
            />
          ))}
        </List>
        <div className="flex flex-row gap-10 w-full justify-between mt-28">
          <Button
            className="flex flex-row gap-2 justify-center items-center cursor-pointer font-medium leading-[normal] min-w-[190px] mt-5 text-center text-md text-indigo_600 w-auto"
            shape="RoundedBorder15"
            size="md"
            variant="OutlineIndigo500"
            type="submit"
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
    </div>
  );
}

export default DeliveryMethodsTab;
