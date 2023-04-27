import React from 'react';
import { Input, Text, Button } from '../../../components';

function ParcelRegistrationTab() {
  return (
    <div className="flex flex-col gap-[25px] justify-start mb-[70px] mt-[7px] w-full">
      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[26px] w-[83%] md:w-full">
        <div className="grid grid-cols-2 grid-flow-row items-start justify-start mb-2.5 md:w-full">
          <Text
            className="text-indigo_600 text-left w-auto"
            as="h2"
            variant="h2"
          >
            Provide further delivery information
          </Text>
          <div className="flex flex-col gap-[9px] items-start justify-start mt-10 md:w-full">
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Destination country
            </Text>
            <Input
              wrapClassName="w-full"
              className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
              name="group195"
              shape="RoundedBorder15"
              size="sm"
              variant="OutlineGray300"
            ></Input>
          </div>
          <div className="flex flex-col gap-[9px] items-start justify-start mt-[15px] w-[71%] md:w-full">
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h4"
              variant="h4"
            >
              City
            </Text>
            <Input
              wrapClassName="w-full"
              className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
              name="group195_One"
              shape="RoundedBorder15"
              size="sm"
              variant="OutlineGray300"
            ></Input>
          </div>
          <div className="flex flex-col gap-[11px] items-start justify-start mt-3.5 w-[71%] md:w-full">
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Postal Code
            </Text>
            <Input
              wrapClassName="w-full"
              className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
              name="zipcode"
              shape="RoundedBorder15"
              size="sm"
              variant="OutlineGray300"
            ></Input>
          </div>
          <div className="flex flex-col items-center justify-start mt-3.5 w-[59%] md:w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
              <div className="flex flex-row gap-[102px] items-start justify-start w-[95%] md:w-full">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  House
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_400 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Appartment
                </Text>
              </div>
              <div className="flex flex-row justify-between w-full gap-5">
                <Input
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                  name="group195_Two"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                ></Input>
                <Input
                  className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                  name="group195_Two"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[9px] items-start justify-start mt-[21px] w-[71%] md:w-full">
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Receiver’s phone number
            </Text>
            <Input
              wrapClassName="w-full"
              className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
              type="tel"
              name="group195_Three"
              shape="RoundedBorder15"
              size="sm"
              variant="OutlineGray300"
            ></Input>
          </div>
          <div className="flex flex-col gap-[9px] items-start justify-start mt-[21px] w-[71%] md:w-full">
            <Text
              className="font-normal not-italic text-bluegray_400 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Receiver’s email
            </Text>
            <Input
              wrapClassName="w-full"
              className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
              type="email"
              name="group195_Three"
              shape="RoundedBorder15"
              size="sm"
              variant="OutlineGray300"
            ></Input>
          </div>
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[330px] mt-5 text-center text-lg text-white_A700 w-auto"
            shape="RoundedBorder15"
            size="md"
            variant="FillIndigo600"
            type="submit"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ParcelRegistrationTab;
