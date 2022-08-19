import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="flex w-full justify-start items-start flex-col mb-12 pb-6 border-b border-gray-600">
      <header className="flex w-full justify-start items-start flex-col mb-12 pb-6">
        <div className="flex w-full justify-between items-center">
          <h3 className="font-poppins font-semibold xs:text-[24px] xs:leading-[30px] text-[20px] leading-[26px] tracking-[0.25%] flex-1 text-[#3f3e45]">
            {title}
          </h3>
          <div className="relative ml-2 w-4 cursor-pointer">
            <button
              className="text-gray-300 bg-gray-700 p-4 rounded-full"
              onClick={() => setShowInfo(!showInfo)}
            >
              {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
          </div>
        </div>
      </header>
      {showInfo && (
        <p className="font-poppins xs:text-[16px] xs:leading-[22px] text-[14px] leading-[20px] font-normal text-[#5b6478]">
          {info}
        </p>
      )}
    </article>
  );
};

export default SingleQuestion;
