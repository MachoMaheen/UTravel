import type { NextPage } from "next";

const ContainerButtons: NextPage = () => {
  return (
    <div className="absolute top-[348px] left-[736px] flex flex-row items-start justify-start gap-[19px] text-left text-[36.83px] text-silver-300 font-open-sans">
      <div className="rounded-[89.79px] bg-gray-800 flex flex-row py-[13px] px-[21px] items-center justify-start gap-[17px]">
        <img
          className="relative w-[32.29px] h-[35.87px]"
          alt=""
          src="/icon8.svg"
        />
        <b className="relative inline-block w-[22px] h-[50px] shrink-0">0</b>
      </div>
      <div className="rounded-[89.79px] bg-gray-800 flex flex-row p-[21px] items-center justify-start">
        <img className="relative w-[38.17px] h-9" alt="" src="/frame-14.svg" />
      </div>
      <div className="rounded-[89.79px] bg-gray-800 flex flex-row p-[21px] items-center justify-start">
        <img
          className="relative w-[37px] h-[37px]"
          alt=""
          src="/frame-141.svg"
        />
      </div>
    </div>
  );
};

export default ContainerButtons;
