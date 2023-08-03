import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type SizeShortTextSelectedFalsType = {
  prop?: string;
  showDiv?: boolean;

  /** Style props */
  sizeShortTextSelectedFalsPosition?: Property.Position;
  sizeShortTextSelectedFalsBackgroundColor?: Property.BackgroundColor;
  sizeShortTextSelectedFalsTop?: Property.Top;
  sizeShortTextSelectedFalsLeft?: Property.Left;
  divTop?: Property.Top;
};

const SizeShortTextSelectedFals: NextPage<SizeShortTextSelectedFalsType> = ({
  prop,
  showDiv,
  sizeShortTextSelectedFalsPosition,
  sizeShortTextSelectedFalsBackgroundColor,
  sizeShortTextSelectedFalsTop,
  sizeShortTextSelectedFalsLeft,
  divTop,
}) => {
  const sizeShortTextSelectedFalsStyle: CSS.Properties = useMemo(() => {
    return {
      position: sizeShortTextSelectedFalsPosition,
      backgroundColor: sizeShortTextSelectedFalsBackgroundColor,
      top: sizeShortTextSelectedFalsTop,
      left: sizeShortTextSelectedFalsLeft,
    };
  }, [
    sizeShortTextSelectedFalsPosition,
    sizeShortTextSelectedFalsBackgroundColor,
    sizeShortTextSelectedFalsTop,
    sizeShortTextSelectedFalsLeft,
  ]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      top: divTop,
    };
  }, [divTop]);

  return (
    <div
      className="relative rounded-sm bg-gray-dark-mode-tooltips-and-userprofile w-[306px] h-[30px] text-left text-xs text-gray-dark-mode-text font-whitney"
      style={sizeShortTextSelectedFalsStyle}
    >
      {showDiv && (
        <div
          className="absolute top-[26.67%] left-[2.61%] font-medium"
          style={divStyle}
        >
          {prop}
        </div>
      )}
    </div>
  );
};

export default SizeShortTextSelectedFals;
