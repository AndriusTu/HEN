import React from 'react';

export type SuccessCircleSVGProps = React.SVGProps<SVGSVGElement> &
  Partial<{
    stroke: string;
    className: string;
  }>;

export const SuccessCircleSVG: React.FC<SuccessCircleSVGProps> = ({
  stroke = 'currentColor',
  className = '',
  ...props
}) => {
  return (
    <svg
      // stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      strokeWidth={1.5}
      // fill="none"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
