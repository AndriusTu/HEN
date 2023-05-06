import { Line } from 'components';
import React, { useState } from 'react';
import Tab from './components/Tab';
import DeliveryInformationTab from './tabs/DeliveryInformationTab';
import DeliveryMethodsTab from './tabs/DeliveryMethodsTab';
import SenderContactsTab from './tabs/SenderContactsTab';
import ReceiverContactsTab from './tabs/ReceiverContactsTab';
import FormProvider from './context/CreateParcelFormContext';

const tabs = [
  {
    step: 1,
    title: 'Delivery information',
  },
  {
    step: 2,
    title: 'Delivery methods',
  },
  {
    step: 3,
    title: 'Your contacts',
  },
  {
    step: 4,
    title: 'Receiver contacts',
  },
];

function CreateParcelPage() {
  const [activeTab, setActiveTab] = useState(1);

  const nextFormStep = () => setActiveTab((activeTab) => activeTab + 1);
  const previousFormStep = () => setActiveTab((activeTab) => activeTab - 1);

  return (
    <FormProvider>
      <div className="flex flex-col gap-[23px] items-center justify-start mb-16 mt-2 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex sm:flex-col flex-row gap-10 items-start justify-start ml-3.5 md:ml-[0] md:w-full">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                title={tab.title}
                isActive={activeTab === tab.step}
              />
            ))}
          </div>
          <Line className="bg-gray_300 h-px w-full" />
        </div>
        {activeTab === 1 && (
          <DeliveryInformationTab nextFormStep={nextFormStep} />
        )}
        {activeTab === 2 && (
          <DeliveryMethodsTab
            previousFormStep={previousFormStep}
            nextFormStep={nextFormStep}
          />
        )}
        {activeTab === 3 && (
          <SenderContactsTab
            previousFormStep={previousFormStep}
            nextFormStep={nextFormStep}
          />
        )}
        {activeTab === 4 && (
          <ReceiverContactsTab previousFormStep={previousFormStep} />
        )}
      </div>
    </FormProvider>
  );
}

export default CreateParcelPage;
