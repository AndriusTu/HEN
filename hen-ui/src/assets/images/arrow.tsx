import React from 'react';
import clsx from 'clsx';

export type ArrowSVGProps = React.SVGProps<SVGSVGElement> &
  Partial<{
    fillColor: string;
    className: string;
    direction: 'up' | 'down' | 'left' | 'right';
  }>;

export const ArrowSVG: React.FC<ArrowSVGProps> = ({
  fillColor = '#000000',
  className = '',
  ...props
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, {
        'transform rotate-90': props.direction === 'down',
        'transform -rotate-90': props.direction === 'up',
        'transform rotate-180': props.direction === 'left',
      })}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
