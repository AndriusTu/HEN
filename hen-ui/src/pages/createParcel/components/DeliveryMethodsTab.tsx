import React from 'react';
import { Text, List } from '../../../components';
import DeliveryMethodCard from './DeliveryMethodCard';
import deliveryMethodsMock from '../../../mocks/deliveryMethodsMock';

function DeliveryMethodsTab() {
  const [activeCard, setActiveCard] = React.useState<string | undefined>(
    undefined,
  );

  return (
    <div className="flex flex-col items-center justify-start mb-[26px] p-[31px] sm:px-5 w-[99%] md:w-full">
      <div className="flex flex-col gap-[21px] items-start justify-start mb-[261px] w-[98%] md:w-full">
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
      </div>
    </div>
  );
}

export default DeliveryMethodsTab;
