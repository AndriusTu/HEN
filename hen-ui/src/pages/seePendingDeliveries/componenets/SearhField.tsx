import React from 'react'
import {Img, Input} from "../../../components";
import {CloseSVG} from "../../../assets/images";
function SearchField() {
    const [inputvalue, setInputvalue] = React.useState<string>('');

    return   <div className="inline-flex gap-[9px]">
        {/*//ne parcel row element, bet lygiavimui uždėjau*/}
                <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e)}
                    wrapClassName="flex md:flex-1 md:ml-[0] md:mt-0 my-[19px] w-[%] md:w-full"
                    className="font-inter font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_400 text-[15px] text-bluegray_400 text-left w-20% align-middle"
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
                                visibility: inputvalue?.length <= 0 ? 'hidden' : 'visible',
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
                {/*<Switch value={true} className="w-[18%]" />*/}
                <div>   </div>
                <div>   </div>
                <div className="flex md:flex-1 my-[19px] w-[%] ml">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="flex top-[20px] md:flex-1 my-[30px] w-[%]">
                    <text className="text-bluegray_400 justify-center">
                        Display only pending deliveries
                    </text>
                </div>

            </div>
}
export default SearchField