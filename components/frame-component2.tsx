import type { NextPage } from "next";
import LocationForm from "./location-form";

type FrameComponent2Type = {
  onClose?: () => void;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ onClose }) => {
  return (
    <div className="relative rounded-xl bg-gray-1000 w-[431px] h-[846px] overflow-y-auto max-w-full max-h-full overflow-auto">
      <div className="absolute top-[12px] left-[179px] rounded-xl bg-dimgray-500 w-[74px] h-1.5" />
      <div className="absolute top-[75px] left-[20px] flex flex-col items-center justify-center gap-[20px]">
        <LocationForm />
        <img
          className="relative w-[387px] h-[433px]"
          alt=""
          src="/frame-1244.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
