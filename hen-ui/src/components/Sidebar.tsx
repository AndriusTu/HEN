import { Img } from 'components';
import React from 'react';
import ROLES from '../enums/roles';
import ROUTES from '../routes';
import { getUserRole } from '../services/api/accountService';
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
  acceptedRoles?: string[];
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
    acceptedRoles: [ROLES.COURIER],
  },
  {
    title: 'My parcels',
    link: ROUTES.GET_PARCEL,
    imageSrc: 'images/img_mail.svg',
    acceptedRoles: [ROLES.CLIENT, ROLES.GUEST],
  },
  {
    title: 'Add courier',
    link: ROUTES.CREATE_COURIER,
    imageSrc: 'images/img_user31.svg',
    acceptedRoles: [ROLES.ADMIN],
  },
];

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0].link);
  const userRole = getUserRole();
  return (
    <aside className="flex flex-col md:hidden justify-start w-[252px]">
      <div className="bg-white_A700 h-[797px] mr-0.5 w-full"></div>
      <div className="flex flex-col items-start justify-start absolute">
        {tabs.map(
          (tab) =>
            (!tab.acceptedRoles ||
              (tab.acceptedRoles && tab.acceptedRoles.includes(userRole))) && (
              <Tab
                key={tab.link}
                title={tab.title}
                link={tab.link}
                isActive={activeTab === tab.link}
                onClick={() => setActiveTab(tab.link)}
              >
                <Img src={tab.imageSrc} />
              </Tab>
            ),
        )}
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
