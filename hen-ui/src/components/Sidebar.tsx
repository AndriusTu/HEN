import React from 'react';
import { Img } from 'components/index';
import Tab from './Tab';
import ROUTES from '../routes';

type SidebarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

interface TabInformation {
  title: string;
  link: string;
  imageSrc: string;
  activeImageSrc?: string;
}

const tabs: TabInformation[] = [
  {
    title: 'New parcel',
    link: ROUTES.CREATE_PARCEL,
    imageSrc: 'images/img_home_bluegray_400.svg',
  },
  {
    title: 'My parcels',
    link: ROUTES.PARCELS,
    imageSrc: 'images/img_mail.svg',
  },
  {
    title: 'Accounts',
    link: ROUTES.ACCOUNTS,
    imageSrc: 'images/img_user31.svg',
  },
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0].link);

  return (
    <aside className="flex flex-col md:hidden justify-start w-[252px]">
      <div className="bg-white_A700 h-[797px] mr-0.5 w-full"></div>
      <div className="flex flex-col items-start justify-start absolute">
        {tabs.map((tab) => (
          <Tab
            title={tab.title}
            link={tab.link}
            isActive={activeTab === tab.link}
            onClick={() => setActiveTab(tab.link)}
          >
            <Img src={tab.imageSrc} />
          </Tab>
        ))}
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;