import React from 'react';

const shapes = {
  RoundedBorder15: 'rounded-[15px]',
  RoundedBorder25: 'rounded-[25px]',
  icbRoundedBorder20: 'rounded-[20px]',
  icbRoundedBorder32: 'rounded-[32px]',
  icbCircleBorder15: 'rounded-[15px]',
  icbCircleBorder25: 'rounded-[25px]',
} as const;
const variants = {
  OutlineIndigo500: 'border border-indigo_500 border-solid text-indigo_500',
  FillIndigo600: 'bg-indigo_600 text-white_A700',
  OutlineRedA700:
    'bg-gray_102 border border-red_A700 border-solid text-black_900',
  FillWhiteA700: 'bg-white_A700 text-bluegray_400',
  icbFillWhiteA700: 'bg-white_A700',
  icbFillGray102: 'bg-gray_102',
  icbFillIndigo600: 'bg-indigo_600',
} as const;
const sizes = {
  sm: 'p-[7px]',
  md: 'px-[7px] py-3.5',
  lg: 'p-3.5',
  xl: 'p-[23px] sm:px-5',
  smIcn: 'p-[7px]',
  mdIcn: 'p-3',
  lgIcn: 'p-4',
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'onClick'
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = '',
  variant = '',
  size = '',
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ''} ${
        (size && sizes[size]) || ''
      } ${(variant && variants[variant]) || ''}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
