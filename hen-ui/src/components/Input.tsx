import React from 'react';
import { InputError } from './InputError';

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
    errors: object;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    onChange: (event: any) => void;
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
      errors = {},
      label = '',
      prefix,
      suffix,
      shape = '',
      variant = '',
      size = '',
      onChange,
      ...restProps
    },
    ref,
  ) => {
    return (
      <div className="h-16">
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
            className={`${className} bg-transparent border-0 disabled:cursor-not-allowed`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && (
          <InputError
            errors={errors}
            inputName={name}
          />
        )}
      </div>
    );
  },
);

export { Input };
