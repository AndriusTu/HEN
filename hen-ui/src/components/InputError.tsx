import React from 'react';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
  errors: object;
  inputName: string;
};

export const InputError: React.FC<Props> = (props) => {
  const { errors, inputName } = props;

  return (
    <ErrorMessage
      errors={errors}
      name={inputName}
      render={({ message, messages }) =>
        (message && (
          <div className="text-red-500 text-left text-xs w-full mt-1">
            {message}
          </div>
        )) ||
        (messages &&
          Object.entries(messages).map(([type, message]) => (
            <div className="text-red-500 text-left text-xs w-full mt-1">
              {message}
            </div>
          )))
      }
    />
  );
};

export default InputError;
