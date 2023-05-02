// login page functional component

import React, { FormEvent, useState } from 'react';
import { Button, Input, Text } from '../../components';
import authService from '../../services/api/authService';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await authService.login({ username, password });
      window.location.href = '/home';
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <Text
        className="text-left text-indigo_600 mb-4"
        as="h2"
        variant="h2"
      >
        Login
      </Text>
      <form onSubmit={handleSubmit}>
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
            id="username"
            value={username}
            onChange={(event) => setUsername(event)}
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
            value={password}
            onChange={(event) => setPassword(event)}
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
