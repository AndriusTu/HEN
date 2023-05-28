import React from 'react';
import { Button, Input, Text } from '../../components';
import { loadUserRole } from '../../services/api/accountService';
import authService from '../../services/api/authService';
import {useForm} from "react-hook-form";
import ROUTES from "../../routes";

export const LoginPage = () => {
  const [error, setError] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      await authService.login({ username, password });
      await loadUserRole();

      window.location.href = ROUTES.CREATE_PARCEL;
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start md:mt-0 p-[19px] rounded-[25px] w-full h-[797px]">
      <Text
        className="text-left text-indigo_600 mb-4"
        as="h2"
        variant="h2"
      >
        Login
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <div>{error}</div>}
        <div>
          <label htmlFor="username">Username</label>
          <Input
            wrapClassName="w-full"
            className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
            shape="RoundedBorder15"
            size="sm"
            variant="OutlineGray300"
            type="text"
            errors={errors}
            {...register("username", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            wrapClassName="w-full"
            className="font-normal leading-[normal] not-italic p-0 placeholder:text-gray_500 text-[15px] text-bluegray_900 text-left w-full"
            shape="RoundedBorder15"
            size="sm"
            variant="OutlineGray300"
            id="password"
            type="password"
            errors={errors}
            {...register("password", { required: true })}
          />
        </div>
        <Button
          className="flex flex-row gap-2 cursor-pointer font-medium leading-[normal] ml-[330px] mt-7 text-md text-white_A700 w-auto"
          shape="RoundedBorder15"
          size="md"
          variant="FillIndigo600"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};
