import React, { useState } from "react";
import { questions as data } from "../constants";
import SingleQuestion from "./SingleQuestion";

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="flex justify-start items-center sm:p-16 xs:p-8 px-6 py-12">
      <div className="flex justify-center items-center 3xl:max-w-[1280px] w-full flex-col">
        <h3 className="font-poppins text-white font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] track-[-0.25px] text-start mb-10">
          Frequently Asked Questions 🤔
        </h3>
        <section className="lg:w-[80%] w-[100%] flex justify-center items-center flex-col mt-10">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Accordion;
