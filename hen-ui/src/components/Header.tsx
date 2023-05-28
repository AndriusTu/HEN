import React from 'react';

import { Button, Img, Text } from 'components';
import authService from '../services/api/authService';
import ROUTES from "../routes";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  const [inputvalue, setInputvalue] = React.useState<string>('');

  return (
    <>
      <header className="flex flex-col items-center justify-center md:px-5 w-full">
        <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col flex-row md:gap-5 p-[5px] w-full h-[100px] justify-between">
          <div className="h-[87px] md:ml-[0] ml-[9px] relative w-[30%] md:w-full">
            <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-end justify-start mx-auto p-[7px] w-full">
              <Text
                className="font-inter mb-[9px] mr-[30px] text-center text-indigo_600 w-auto"
                as="h1"
                variant="h1"
              >
                HenrikSends
              </Text>
            </div>
            <Img
              src="images/img_logo.png"
              className="absolute h-[87px] inset-y-[0] left-[9%] my-auto object-cover w-[87px]"
              alt="logo"
            />
          </div>

          {authService.isLoggedIn() ? (
            <div className="flex flex-row items-center">
              <Button
                id="login"
                className="text-md text-white_A700 w-1/2 h-[60%] flex items-center justify-center"
                shape="RoundedBorder15"
                size="md"
                variant="FillIndigo600"
                type="submit"
                onClick={() => authService.logout()}
              >
                <div>Log out</div>
              </Button>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[30%]">
                <Img
                  src="images/img_ellipse28.png"
                  className="scale-75 md:h-auto rounded-[50%] w-full"
                  alt="ellipseTwentyEight"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center w-1/5">
              <Button
                id="login"
                className="text-center text-md text-white_A700 w-1/2 h-[60%] flex items-center justify-center"
                shape="RoundedBorder15"
                size="md"
                variant="FillIndigo600"
                type="submit"
                onClick={() => window.location.replace(ROUTES.LOGIN)}
              >
                <div>Login</div>
              </Button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
