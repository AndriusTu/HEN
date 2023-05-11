import React from 'react';
import { useState, createContext, useContext } from 'react';
import { CreateParcelForm } from '../../../models/DeliveryInfo';

export const CreateParcelFormContext = createContext({
  data: {} as CreateParcelForm,
  setFormValues: (values) => {},
});

export default function FormProvider({ children }) {
  const [data, setData] = useState({} as CreateParcelForm);

  const setFormValues = (values) => {
    setData((oldValues) => ({
      ...oldValues,
      ...values,
    }));
  };

  return (
    <CreateParcelFormContext.Provider value={{ data, setFormValues }}>
      {children}
    </CreateParcelFormContext.Provider>
  );
}

export const useFormData = () => useContext(CreateParcelFormContext);
