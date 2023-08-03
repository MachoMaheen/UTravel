import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type LocationCardType = {
  /** Style props */
  propPosition?: Property.Position;
  propTop?: Property.Top;
  propLeft?: Property.Left;

  /** Action props */
  onGroupButtonClick?: () => void;
};

const LocationCard: NextPage<LocationCardType> = ({
  propPosition,
  propTop,
  propLeft,
  onGroupButtonClick,
}) => {
  const groupButtonStyle: CSS.Properties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <button
      className="cursor-pointer py-[11px] px-[59px] bg-[transparent] rounded-xl box-border w-[292px] flex flex-row items-center justify-center border-[1px] border-solid border-white"
      onClick={onGroupButtonClick}
      style={groupButtonStyle}
    >
      <div className="relative text-xl font-semibold font-m3-label-medium text-white text-left">
        Get Location
      </div>
    </button>
  );
};

export default LocationCard;
