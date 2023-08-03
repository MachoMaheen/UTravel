import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type Under25SummitCardType = {
  imageDimensions?: string;
  eventName?: string;
  eventDate?: string;
  collegeLocation?: string;
  peopleLovedCount?: string;

  /** Style props */
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propHeight?: Property.Height;
  propGap?: Property.Gap;
};

const Under25SummitCard: NextPage<Under25SummitCardType> = ({
  imageDimensions,
  eventName,
  eventDate,
  collegeLocation,
  peopleLovedCount,
  propTop,
  propWidth,
  propHeight,
  propGap,
}) => {
  const cARD2Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
      height: propHeight,
    };
  }, [propTop, propWidth, propHeight]);

  const frameDiv1Style: CSS.Properties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <div
      className="absolute top-[730px] left-[9px] rounded-xl flex flex-col py-2.5 px-0 items-center justify-center gap-[10px] text-left text-sm text-white font-m3-label-medium border-[2px] border-solid border-white"
      style={cARD2Style}
    >
      <img
        className="relative rounded-xl w-[385px] h-[221px] object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="w-[409px] flex flex-col py-0 px-[11px] box-border items-start justify-center gap-[7px]">
        <div className="relative text-13xl font-medium">{eventName}</div>
        <div className="relative">{eventDate}</div>
        <div
          className="flex flex-row items-center justify-start gap-[89px]"
          style={frameDiv1Style}
        >
          <div className="relative">{collegeLocation}</div>
          <div className="rounded-xl h-6 flex flex-row p-2.5 box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[15px] h-3.5 object-cover"
              alt=""
              src="/group-18@2x.png"
            />
            <div className="relative inline-block w-[46px] h-3 shrink-0">
              2.1km
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-sm box-border w-[140px] h-[39px] flex flex-row p-2.5 items-center justify-center text-smi border-[0.5px] border-solid border-gray-700">
        <div className="relative">{peopleLovedCount}</div>
      </div>
    </div>
  );
};

export default Under25SummitCard;
