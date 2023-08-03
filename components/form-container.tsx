import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FormContainerType = {
  imageAltText?: string;
  productDimensions?: string;

  /** Style props */
  propLeft?: Property.Left;
  propLeft1?: Property.Left;
  propWidth?: Property.Width;
};

const FormContainer: NextPage<FormContainerType> = ({
  imageAltText,
  productDimensions,
  propLeft,
  propLeft1,
  propWidth,
}) => {
  const groupDiv2Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const breadBlStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  return (
    <div
      className="absolute top-[0px] left-[743px] w-32 h-[145px] text-left text-5xl text-white font-m3-label-medium"
      style={groupDiv2Style}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-8xs w-32 h-[145px] object-cover"
        alt=""
        src={imageAltText}
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-gray-1700" />
      <div
        className="absolute top-[114px] left-[7px] font-semibold [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:22] [-webkit-box-orient:vertical] w-[83px]"
        style={breadBlStyle}
      >
        {productDimensions}
      </div>
    </div>
  );
};

export default FormContainer;
