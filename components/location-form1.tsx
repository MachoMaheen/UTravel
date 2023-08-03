import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type LocationForm1Type = {
  locationInputText?: string;

  /** Style props */
  propPosition?: Property.Position;
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const LocationForm1: NextPage<LocationForm1Type> = ({
  locationInputText,
  propPosition,
  propTop,
  propLeft,
}) => {
  const enterLocationStyle: CSS.Properties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <textarea
      className="bg-[transparent] font-semibold font-m3-label-medium text-mini rounded-xl box-border w-[292px] h-14 flex flex-row py-[7px] pr-32 pl-0 items-center justify-center border-[1px] border-solid border-white"
      placeholder={locationInputText}
      style={enterLocationStyle}
    />
  );
};

export default LocationForm1;
