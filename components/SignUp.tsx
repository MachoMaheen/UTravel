

import React from "react";
import Image from "next/image";

const SignUp: React.FC = () => {

    return (
        <div className="relative [background:linear-gradient(rgba(0,_143,_57,_0.2),_rgba(0,_143,_57,_0.2)),_linear-gradient(rgba(12,_0,_156,_0.2),_rgba(12,_0,_156,_0.2)),_#000] w-full h-[926px] overflow-hidden text-left text-[20px] text-white font-roboto">
            <div
                className="absolute top-[581px] left-[68px] rounded-xl box-border w-[292px] flex flex-row py-[11px] px-[59px] items-center justify-center cursor-pointer border-[1px] border-solid border-white"
            >
                <div className="relative font-semibold">Get Location</div>
            </div>
            <div className="absolute top-[500px] left-[68px] rounded-xl box-border w-[292px] h-14 flex flex-row py-[7px] pr-32 pl-0 items-center justify-center gap-[15px] text-[15px] text-darkgray border-[1px] border-solid border-white">
                <Image
                    className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
                    alt=""
                    src="/public/Location_pin.svg"
                    width={25}
                    height={25}
                />
                <div className="relative font-semibold">Enter location</div>
            </div>
            <div className="absolute top-[300px] left-[174px] text-[36px] font-semibold">
                Buzz
            </div>
        </div>
    );
};

export default SignUp;
