import React from 'react';

import { Button, Img, Input, Text } from 'components';
import { CloseSVG } from '../assets/images';
import authService from '../services/api/authService';

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
        <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-center p-[5px] w-full">
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
            <>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e)}
                wrapClassName="flex md:flex-1 md:ml-[0] ml-[456px] md:mt-0 my-[19px] w-[18%] md:w-full"
                className="font-inter font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_400 text-[15px] text-bluegray_400 text-left w-full"
                name="groupEight"
                placeholder="Search for something"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="mt-auto mb-px cursor-pointer mr-[15px]"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#888ea2"
                    className="cursor-pointer my-auto"
                    onClick={() => setInputvalue('')}
                    style={{
                      visibility:
                        inputvalue?.length <= 0 ? 'hidden' : 'visible',
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="srcCircleBorder25"
                size="smSrc"
                variant="srcFillGray101"
              ></Input>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[19px] rounded-[50%] w-[50px]"
                size="mdIcn"
                variant="icbFillGray102"
                onClick={() => authService.logout()}
              >
                <Img
                  src="images/img_settings1.svg"
                  className="h-[25px]"
                  alt="settingsOne"
                />
              </Button>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[19px] rounded-[50%] w-[50px]"
                size="mdIcn"
                variant="icbFillGray102"
              >
                <Img
                  src="images/img_002notification1.svg"
                  className="h-[25px]"
                  alt="002notification"
                />
              </Button>
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[30px] w-[6%] md:w-full">
                <Img
                  src="images/img_ellipse28.png"
                  className="scale-75 md:h-auto rounded-[50%] w-full"
                  alt="ellipseTwentyEight"
                />
              </div>
            </>
          ) : (
            <div className="flex w-[56%] justify-end items-center">
              <Button
                id="login"
                className="flex flex-row gap-2 justify-center items-center cursor-pointer font-medium leading-[normal] min-w-[190px] text-center text-md text-white_A700 w-auto"
                shape="RoundedBorder15"
                size="md"
                variant="FillIndigo600"
                type="submit"
                onClick={() => window.location.replace('/login')}
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
