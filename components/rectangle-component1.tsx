import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type RectangleComponent1Type = {
  /** Style props */
  rectangleDivPosition?: Property.Position;
  rectangleDivTop?: Property.Top;
  rectangleDivLeft?: Property.Left;
};

const RectangleComponent1: NextPage<RectangleComponent1Type> = ({
  rectangleDivPosition,
  rectangleDivTop,
  rectangleDivLeft,
}) => {
  const rectangleDiv1Style: CSS.Properties = useMemo(() => {
    return {
      position: rectangleDivPosition,
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [rectangleDivPosition, rectangleDivTop, rectangleDivLeft]);

  return (
    <div
      className="relative rounded-xl box-border h-6 flex flex-row p-2.5 items-center justify-center text-left text-xs text-white font-m3-label-medium border-[1px] border-solid border-darkgray-700"
      style={rectangleDiv1Style}
    >
      <div className="relative inline-block w-[54px] h-3.5 shrink-0">
        Dec 9 - 16
      </div>
    </div>
  );
};

export default RectangleComponent1;
