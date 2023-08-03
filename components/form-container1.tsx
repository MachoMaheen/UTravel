import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FormContainer1Type = {
  imageDimensions?: string;
  likeCount?: string;
  eventTitle?: string;

  /** Style props */
  propTop?: Property.Top;
  propMarginTop?: Property.MarginTop;
};

const FormContainer1: NextPage<FormContainer1Type> = ({
  imageDimensions,
  likeCount,
  eventTitle,
  propTop,
  propMarginTop,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const olam23Style: CSS.Properties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className="relative w-[175px] h-[198px] text-left text-sm text-white font-m3-label-medium">
      <img
        className="absolute top-[0px] left-[0px] rounded-8xs w-[175px] h-[198px] object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="absolute top-[0px] left-[0px] bg-gray-1600 w-[175px] h-[198px]" />
      <div
        className="absolute top-[150px] left-[11px] flex flex-col items-start justify-start"
        style={frameDivStyle}
      >
        <div className="relative w-[26px] h-[23px]">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            {likeCount}
          </div>
        </div>
        <div
          className="relative text-xl font-semibold mt-[-3px]"
          style={olam23Style}
        >
          {eventTitle}
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
