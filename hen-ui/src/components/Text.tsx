import React from 'react';

const variantClasses = {
  h1: 'font-bold text-4xl sm:text-[32px] md:text-[34px]',
  h2: 'font-bold sm:text-[21px] md:text-[23px] text-[25px]',
  h3: 'text-lg',
  h4: 'text-base',
  h5: 'font-normal text-[15px]',
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || 'span';
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
