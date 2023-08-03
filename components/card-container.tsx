import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type CardContainerType = {
  imageAltText?: string;
  dimensionText?: string;
  categoryName?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const CardContainer: NextPage<CardContainerType> = ({
  imageAltText,
  dimensionText,
  categoryName,
  propTop,
  propLeft,
}) => {
  const bestBakesStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="relative w-[175px] h-[198px] overflow-hidden shrink-0 text-left text-xl text-black font-m3-label-medium">
      <img
        className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
        alt=""
        src={imageAltText}
      />
      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-1500 w-[175px] h-[198px]" />
      <img
        className="absolute top-[145.36px] left-[250.84px] w-[198.3px] h-[104.56px]"
        alt=""
        src={dimensionText}
      />
      <div
        className="absolute top-[176.59px] left-[85px] font-semibold [transform:_rotate(-45deg)] [transform-origin:0_0]"
        style={bestBakesStyle}
      >
        {categoryName}
      </div>
    </div>
  );
};

export default CardContainer;
