import type { NextPage } from "next";
import { useState, useMemo, useCallback } from "react";
import FrameComponent2 from "./frame-component2";
import PortalPopup from "./portal-popup";
import CSS, { Property } from "csstype";

type FooterType = {
  dimensions?: string;
  productDimensions?: string;
  imageDimensions?: string;
  imageCode?: string;
  imageSizeCode?: string;
  imageDimensionsCode?: string;
  imageCode2?: string;
  imageDimensions2?: string;
  icon?: boolean;
  icon2?: boolean;
  icon4?: boolean;
  icon5?: boolean;
  icon7?: boolean;

  /** Style props */
  propLeft?: Property.Left;
  propCursor?: Property.Cursor;
  propBackgroundColor?: Property.BackgroundColor;
  propCursor1?: Property.Cursor;
  propBackgroundColor1?: Property.BackgroundColor;
  propCursor2?: Property.Cursor;
  propBackgroundColor2?: Property.BackgroundColor;
  propCursor3?: Property.Cursor;
  propBackgroundColor3?: Property.BackgroundColor;

  /** Action props */
  onBuildingBlocksSegmentDarkClick?: () => void;
  onBuildingBlocksSegmentDark1Click?: () => void;
  onBuildingBlocksSegmentDark3Click?: () => void;
  onBuildingBlocksSegmentDark4Click?: () => void;
};

const Footer: NextPage<FooterType> = ({
  dimensions,
  productDimensions,
  imageDimensions,
  imageCode,
  imageSizeCode,
  imageDimensionsCode,
  imageCode2,
  imageDimensions2,
  icon,
  icon2,
  icon4,
  icon5,
  icon7,
  propLeft,
  propCursor,
  propBackgroundColor,
  propCursor1,
  propBackgroundColor1,
  propCursor2,
  propBackgroundColor2,
  propCursor3,
  propBackgroundColor3,
  onBuildingBlocksSegmentDarkClick,
  onBuildingBlocksSegmentDark1Click,
  onBuildingBlocksSegmentDark3Click,
  onBuildingBlocksSegmentDark4Click,
}) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigationBarDarkStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const buildingBlocksSegmentDarkStyle: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const iconContainerStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const buildingBlocksSegmentDark1Style: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const iconContainer1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const buildingBlocksSegmentDark2Style: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor2,
    };
  }, [propCursor2]);

  const stateLayerStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const buildingBlocksSegmentDark3Style: CSS.Properties = useMemo(() => {
    return {
      cursor: propCursor3,
    };
  }, [propCursor3]);

  const stateLayer1Style: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor3,
    };
  }, [propBackgroundColor3]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div
        className="absolute bottom-[0px] left-[0px] [background:linear-gradient(rgba(208,_188,_255,_0.08),_rgba(208,_188,_255,_0.08)),_rgba(40,_36,_35,_0.53)] [backdrop-filter:blur(60px)] w-[428px] h-[89px] flex flex-row py-0 px-2 box-border items-center justify-center gap-[8px] text-center text-xs text-white font-m3-label-medium"
        style={navigationBarDarkStyle}
      >
        <div
          className="flex-1 flex flex-col pt-3 px-0 pb-4 items-center justify-center gap-[4px]"
          style={buildingBlocksSegmentDarkStyle}
          onClick={onBuildingBlocksSegmentDarkClick}
        >
          <div
            className="rounded-2xl bg-gray-1000 h-[34px] overflow-hidden shrink-0 flex flex-col items-center justify-center"
            style={iconContainerStyle}
          >
            <div className="w-16 h-8 flex flex-row py-1 px-5 box-border items-center justify-center">
              <img
                className="relative w-[25px] h-6 overflow-hidden shrink-0"
                alt=""
                src={dimensions}
              />
              {!icon && (
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/icon.svg"
                />
              )}
            </div>
          </div>
          <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
            Home
          </div>
        </div>
        <div
          className="flex-1 flex flex-col pt-3 px-0 pb-4 items-center justify-center gap-[4px] cursor-pointer"
          onClick={onBuildingBlocksSegmentDark1Click}
          style={buildingBlocksSegmentDark1Style}
        >
          <div
            className="rounded-2xl overflow-hidden flex flex-col items-center justify-center"
            style={iconContainer1Style}
          >
            <div className="w-16 h-8 flex flex-row py-1 px-5 box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[27px] h-[27px] overflow-hidden shrink-0"
                alt=""
                src={productDimensions}
              />
              {!icon2 && (
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src={imageDimensions}
                />
              )}
            </div>
          </div>
          <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
            Shop
          </div>
        </div>
        <div
          className="flex-1 flex flex-col pt-3 px-0 pb-4 items-center justify-center gap-[4px] cursor-pointer"
          onClick={openFrame}
        >
          <div className="rounded-2xl overflow-hidden flex flex-col items-center justify-center">
            <div className="w-16 h-8 flex flex-row py-1 px-5 box-border items-center justify-center gap-[10px]">
              <img
                className="relative w-[26px] h-[26px]"
                alt=""
                src={imageCode}
              />
              {!icon4 && (
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src={imageSizeCode}
                />
              )}
            </div>
          </div>
          <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
            Location
          </div>
        </div>
        <div
          className="flex-1 flex flex-col pt-3 px-0 pb-4 items-center justify-center gap-[4px] cursor-pointer"
          onClick={onBuildingBlocksSegmentDark3Click}
          style={buildingBlocksSegmentDark2Style}
        >
          <div className="rounded-2xl overflow-hidden flex flex-col items-center justify-center">
            <div
              className="w-16 h-8 flex flex-row py-1 px-5 box-border items-center justify-center gap-[10px]"
              style={stateLayerStyle}
            >
              <img
                className="relative w-[23.25px] h-[25.83px]"
                alt=""
                src={imageDimensionsCode}
              />
              {!icon5 && (
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src="/icon.svg"
                />
              )}
            </div>
          </div>
          <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
            Events
          </div>
        </div>
        <div
          className="flex-1 flex flex-col pt-3 px-0 pb-4 items-center justify-center gap-[4px] cursor-pointer"
          onClick={onBuildingBlocksSegmentDark4Click}
          style={buildingBlocksSegmentDark3Style}
        >
          <div className="rounded-2xl overflow-hidden flex flex-col items-center justify-center">
            <div
              className="w-16 h-8 flex flex-row py-1 px-5 box-border items-center justify-center gap-[10px]"
              style={stateLayer1Style}
            >
              {!icon7 && (
                <img
                  className="relative w-6 h-6 hidden"
                  alt=""
                  src={imageCode2}
                />
              )}
              <img
                className="relative w-[28.42px] h-[20.67px]"
                alt=""
                src={imageDimensions2}
              />
            </div>
          </div>
          <div className="self-stretch relative tracking-[0.5px] leading-[16px] font-medium">
            Community
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <FrameComponent2 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Footer;
