import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SectionCardType = {
  sectionTitle?: string;
  dimensionLabel?: string;

  /** Style props */
  aroundTheCornerTop?: Property.Top;
  aroundTheCornerHeight?: Property.Height;
  groupDivHeight?: Property.Height;
  rectangleDivTop?: Property.Top;
  discoverBorder?: Property.Border;
};

const SectionCard: NextPage<SectionCardType> = ({
  sectionTitle,
  dimensionLabel,
  aroundTheCornerTop,
  aroundTheCornerHeight,
  groupDivHeight,
  rectangleDivTop,
  discoverBorder,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: aroundTheCornerTop,
      height: aroundTheCornerHeight,
    };
  }, [aroundTheCornerTop, aroundTheCornerHeight]);

  const rectangleDiv2Style: CSS.Properties = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      top: rectangleDivTop,
    };
  }, [rectangleDivTop]);

  const rectangleDiv3Style: CSS.Properties = useMemo(() => {
    return {
      border: discoverBorder,
    };
  }, [discoverBorder]);

  return (
    <div
      className="absolute top-[749px] left-[5px] w-[418px] h-[364px] text-left text-17xl text-white font-m3-label-medium"
      style={groupDivStyle}
    >
      <div className="absolute top-[15px] left-[13px] font-semibold">
        {sectionTitle}
      </div>
      <div
        className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[418px] h-[364px] border-[1px] border-solid border-gray-700"
        style={rectangleDiv2Style}
      />
      <div
        className="absolute top-[299px] left-[250px] w-[149px] h-[45px] text-sm"
        style={groupDiv1Style}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[149px] h-[45px] border-[1px] border-solid border-salmon"
          style={rectangleDiv3Style}
        />
        <div className="absolute top-[13.93px] left-[13px] font-semibold inline-block w-[62px] h-[21.43px]">
          Discover
        </div>
        <img
          className="absolute top-[8px] left-[110px] w-[26px] h-[27.86px] overflow-hidden"
          alt=""
          src={dimensionLabel}
        />
      </div>
    </div>
  );
};

export default SectionCard;
