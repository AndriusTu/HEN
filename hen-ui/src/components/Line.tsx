import React from 'react';

export type LineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Line: React.FC<React.PropsWithChildren<LineProps>> = () => {
  return (
    <div className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
  );
};
export { Line };
