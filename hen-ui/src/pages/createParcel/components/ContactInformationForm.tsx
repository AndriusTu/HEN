import React from 'react';
import { Input, Text } from '../../../components';

function ContactInformationForm() {
  return (
    <div className="grid grid-cols-2 grid-flow-row items-start justify-start gap-4 md:w-full">
      <div className="flex flex-col gap-3 items-start justify-start md:w-full">
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-auto"
          as="h4"
          variant="h4"
        >
          Full name
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
      <div className="flex flex-row gap-7 items-start justify-start md:w-full">
        <div className="flex flex-col w-1/2 gap-3">
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
        <div className="flex flex-col w-1/2 gap-3">
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
      </div>
      <div className="flex flex-col gap-3 items-start justify-start md:w-full">
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-auto"
          as="h4"
          variant="h4"
        >
          Country
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
      <div className="flex flex-row items-start justify-start gap-7 w-full">
        <div className="flex flex-col w-1/2 gap-3">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h4"
            variant="h4"
          >
            House
          </Text>
          <Input
            className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
            name="group195_Two"
            shape="RoundedBorder15"
            size="sm"
            variant="OutlineGray300"
          ></Input>
        </div>
        <div className="flex flex-col w-1/2 gap-3">
          <Text
            className="font-normal not-italic text-bluegray_400 text-left w-auto"
            as="h4"
            variant="h4"
          >
            Appartment
          </Text>
          <Input
            className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
            name="group195_Two"
            shape="RoundedBorder15"
            size="sm"
            variant="OutlineGray300"
          ></Input>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-start justify-start md:w-full">
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-auto"
          as="h4"
          variant="h4"
        >
          Phone number
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
      <div className="flex flex-col gap-3 items-start justify-start md:w-full">
        <Text
          className="font-normal not-italic text-bluegray_400 text-left w-auto"
          as="h4"
          variant="h4"
        >
          Email
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
    </div>
  );
}

export default ContactInformationForm;
