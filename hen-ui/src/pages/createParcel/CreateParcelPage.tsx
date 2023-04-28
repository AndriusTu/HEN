import { Line } from 'components';
import React from 'react';
import Tab from './components/Tab';
import DeliveryInformationTab from './tabs/DeliveryInformationTab';
import DeliveryMethodsTab from './tabs/DeliveryMethodsTab';
import SenderContactsTab from './tabs/SenderContactsTab';
import ReceiverContactsTab from './tabs/ReceiverContactsTab';

const tabs = [
  {
    title: 'Delivery information',
  },
  {
    title: 'Delivery methods',
  },
  {
    title: 'Your contacts',
  },
  {
    title: 'Receiver contacts',
  },
];

function CreateParcelPage() {
  const [activeTab, setActiveTab] = React.useState('Delivery information');

  return (
    <div className="flex flex-col gap-[23px] items-center justify-start mb-16 mt-2 w-full">
      <div className="flex flex-col justify-start w-full">
        <div className="flex sm:flex-col flex-row gap-10 items-start justify-start ml-3.5 md:ml-[0] md:w-full">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              isActive={activeTab === tab.title}
              onClick={() => setActiveTab(tab.title)}
            />
          ))}
        </div>
        <Line className="bg-gray_300 h-px w-full" />
      </div>
      {activeTab === 'Delivery information' && <DeliveryInformationTab />}
      {activeTab === 'Delivery methods' && <DeliveryMethodsTab />}
      {activeTab === 'Your contacts' && <SenderContactsTab />}
      {activeTab === 'Receiver contacts' && <ReceiverContactsTab />}
    </div>
  );
}

export default CreateParcelPage;
