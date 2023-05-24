import React from 'react';

export type ErrorCircleSVGProps = React.SVGProps<SVGSVGElement> &
  Partial<{
    stroke: string;
    className: string;
  }>;

export const ErrorCircleSVG: React.FC<ErrorCircleSVGProps> = ({
  stroke = 'currentColor',
  className = '',
  ...props
}) => {
  return (
    <svg
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
