import React from "react";
import { userData } from "../../../data/data";

export const CallBruno = () => {
  return (
    <div className="m-auto w-fit font-imfell relative">
      <div className="border-gray-300 border-3 border-dashed rounded-full w-72 h-72 md:w-96 md:h-96 animate-spin absolute"></div>
      <div className="rounded-full w-72 h-72 md:w-96 md:h-96 flex flex-col justify-center items-center">
        <div>
          <div className="text-gray-400 font-montserrat text-xs font-semibold">
            DESCRIBE YOUR
          </div>
          <div className="text-gray-400 font-montserrat text-xs font-semibold">
            PROJECT
          </div>
          <div className="text-4xl md:text-5xl">Call</div>
          <div className="text-4xl md:text-5xl">{userData.name}</div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/2223/2223606.png"
            alt="arrow"
            className="w-9 md:w-14 pt-6 md:pt-10"
          />
        </div>
      </div>
    </div>
  );
};
