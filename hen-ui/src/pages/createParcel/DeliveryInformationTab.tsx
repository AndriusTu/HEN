import React from 'react';
import { Button, Img, Input, List, Text } from '../../components';

function DeliveryInformationTab() {
  return (
    <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <div className="flex md:flex-col flex-row gap-[13px] items-start justify-between w-full">
          <div className="md:h-[219px] h-[231px] relative w-[65%] md:w-full">
            <Img
              src="images/img_depositphotos3.png"
              className="absolute bottom-[0] h-40 object-cover right-[0] w-[51%]"
            />
            <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[53%]">
              <Text
                className="text-indigo_600 text-left w-auto"
                as="h2"
                variant="h2"
              >
                From
              </Text>
              <div className="flex flex-col gap-[9px] items-start justify-start mt-[15px] w-full">
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
                  name="country"
                  placeholder="Lithuania"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                ></Input>
              </div>
              <div className="flex flex-col gap-[11px] items-start justify-start mt-3.5 w-full">
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
                  placeholder="45962"
                  shape="RoundedBorder15"
                  size="sm"
                  variant="OutlineGray300"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[34%] md:w-full">
            <Text
              className="text-indigo_600 text-left w-auto"
              as="h2"
              variant="h2"
            >
              To
            </Text>
            <div className="flex flex-col gap-[9px] items-start justify-start mt-[15px] w-full">
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
                name="country_One"
                placeholder="Lithuania"
                shape="RoundedBorder15"
                size="sm"
                variant="OutlineGray300"
              ></Input>
            </div>
            <div className="flex flex-col gap-[11px] items-start justify-start mt-3.5 w-full">
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
                name="zipcode_One"
                placeholder="00000"
                shape="RoundedBorder15"
                size="sm"
                variant="OutlineGray300"
              ></Input>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-indigo_600 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Parcel metrics
            </Text>
            <Text
              className="font-normal mt-3.5 not-italic text-bluegray_400 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Dimensions
            </Text>
            <List
              className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-2.5 w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-white_A700 border border-gray_300 border-solid flex flex-row items-start justify-between p-3 rounded-[15px] w-full">
                  <Text
                    className="mt-1 not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Length
                  </Text>
                  <Text
                    className="mr-3 mt-1 not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    cm
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-white_A700 border border-gray_300 border-solid flex flex-row items-center justify-between p-3 rounded-[15px] w-full">
                  <Text
                    className="not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Width
                  </Text>
                  <Text
                    className="mr-3 mt-[3px] not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    cm
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-white_A700 border border-gray_300 border-solid flex flex-row items-start justify-between p-3 rounded-[15px] w-full">
                  <Text
                    className="mt-[3px] not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Height
                  </Text>
                  <Text
                    className="mr-3 my-0.5 not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    cm
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="bg-white_A700 border border-gray_300 border-solid flex flex-row items-start justify-between p-3 rounded-[15px] w-full">
                  <Text
                    className="mt-1 not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Weight
                  </Text>
                  <Text
                    className="mr-4 mt-1 not-italic text-gray_500 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    kg
                  </Text>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[330px] mt-[103px] text-center text-lg text-white_A700 w-auto"
              shape="RoundedBorder15"
              size="md"
              variant="FillIndigo600"
            >
              See delivery options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInformationTab;
