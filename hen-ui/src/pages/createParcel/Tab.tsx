import React from 'react';
import { Line, Text } from '../../components';

interface TabProps {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

function Tab(props: TabProps) {
  const { title, isActive, onClick } = props;

  return (
    <div className="flex flex-col gap-2 items-center justify-start sm:w-full cursor-pointer">
      <Text
        className="font-medium text-bluegray_400 text-left w-auto"
        as="h4"
        variant="h4"
        onClick={onClick}
      >
        {title}
      </Text>
      {isActive && (
        <Line className="bg-indigo_600 h-[3px] rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full" />
      )}
    </div>
  );
}

export default Tab;
