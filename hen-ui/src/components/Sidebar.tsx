import { Button, Img } from 'components';
import React from 'react';
import ROUTES from '../routes';
import authService from '../services/api/authService';
import Tab from './Tab';

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
    title: 'Add courier',
    link: ROUTES.CREATE_COURIER,
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
            key={tab.link}
            title={tab.title}
            link={tab.link}
            isActive={activeTab === tab.link}
            onClick={() => setActiveTab(tab.link)}
          >
            <Img src={tab.imageSrc} />
          </Tab>
        ))}
        {/* logout Button */}
        {authService.isLoggedIn() && (
          <Button
            id="logout"
            className="flex flex-row gap-2 justify-center items-center cursor-pointer font-medium leading-[normal] min-w-[190px] mt-5 text-center text-md text-white_A700 w-auto"
            shape="RoundedBorder15"
            size="md"
            variant="FillIndigo600"
            type="submit"
            onClick={() => authService.logout()}
          >
            <div>Logout</div>
          </Button>
        )}
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
