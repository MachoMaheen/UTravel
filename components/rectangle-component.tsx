import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type RectangleComponentType = {
  /** Style props */
  rectangleDivPosition?: Property.Position;
  rectangleDivTop?: Property.Top;
  rectangleDivLeft?: Property.Left;
};

const RectangleComponent: NextPage<RectangleComponentType> = ({
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
}) => {
  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [rectangleDivPosition, rectangleDivTop, rectangleDivLeft]);

  return (
    <div
      className="relative rounded-xl box-border h-6 flex flex-row p-2.5 items-center justify-center gap-[10px] text-left text-xs text-white font-m3-label-medium border-[1px] border-solid border-darkgray-700"
      style={rectangleDivStyle}
    >
      <img
        className="relative w-[15px] h-3.5 object-cover"
        alt=""
        src="/group-18@2x.png"
      />
      <div className="relative inline-block w-[34px] h-3 shrink-0">2.1km</div>
    </div>
  );
};

export default RectangleComponent;
