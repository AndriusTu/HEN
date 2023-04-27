import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from './Text';
import clsx from 'clsx';
import { Line } from './Line';

type TabElements = {
  title: string;
  link: string;
  isActive?: boolean;
  children?: JSX.Element;
  onClick?: () => void;
};

type TabProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  TabElements;

function Tab(props: TabProps) {
  const { title, link, children, isActive, onClick } = props;

  return (
    <div className="flex flex-row">
      {isActive && (
        <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
      )}
      <Link
        to={link}
        onClick={onClick}
      >
        <div className="flex flex-row gap-5 p-4">
          {children}
          <Text
            className={clsx(
              'font-inter font-medium text-left w-auto',
              isActive ? 'text-indigo_600' : 'text-gray_500',
            )}
            as="h3"
            variant="h3"
          >
            {title}
          </Text>
        </div>
      </Link>
    </div>
  );
}

export default Tab;
