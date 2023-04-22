import React from 'react';
import { ErrorMessage } from './ErrorMessage';

const variants = {
  OutlineGray300: 'bg-white_A700 border border-gray_300 border-solid',
  FillWhiteA700: 'bg-white_A700',
  srcFillGray101: 'bg-gray_101',
} as const;
const shapes = {
  RoundedBorder15: 'rounded-[15px]',
  RoundedBorder25: 'rounded-[25px]',
  srcCircleBorder25: 'rounded-[25px]',
} as const;
const sizes = {
  sm: 'px-3.5 py-[15px]',
  md: 'sm:px-5 px-[22px] py-[23px]',
  smSrc: 'p-3.5',
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size' | 'prefix' | 'type' | 'onChange'
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: (e?) => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = '',
      className = '',
      name = '',
      placeholder,
      type = 'text',
      children,
      errors = [],
      label = '',
      prefix,
      suffix,
      onChange,

      shape = '',
      variant = '',
      size = '',
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ''} 
              ${(variant && variants[variant]) || ''} 
              ${(size && sizes[size]) || ''}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
