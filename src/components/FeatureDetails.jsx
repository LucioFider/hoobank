import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { featurePlans } from "../constants";

const FeatureDetails = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-8 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
      {featurePlans.map((feature) => (
        <div
          className="text-white border border-[#3f3e45] p-8 shadow-lg rounded-2xl relative flex flex-col"
          key={feature.title}
        >
          <h3 className="text-lg font-semibold leading-5">{feature.title}</h3>
          {feature?.mostPopular && (
            <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 text-dimWhite px-3 py-0.5 text-sm font-semibold tracking-wide shadow-md rounded-full">
              Most Popular
            </p>
          )}
          <p className="mt-4 text-sm leading-6 text-gray-500">
            {feature.description}
          </p>
          <div className="-mx-6 mt-4 rounded-lg bg-gray-900 p-6">
            <p className="flex items-center text-sm font-semibold text-gray-300">
              <span>{feature.currency}</span>
              <span className="ml-3 text-4xl text-gray-100">
                {feature.price}
              </span>
              <span className="ml-1.5">{feature.frequency}</span>
            </p>
          </div>
          {/*Features */}
          <ul className="mt-6 space-y-4 flex-1">
            {feature.features.map((feature) => (
              <li
                className="text-sm leading-6 text-gray-300 flex"
                key={feature}
              >
                <AiOutlineCheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
          {/*Call to action */}
          <a
            href="#"
            className={`mt-8 bg-cyan-500 text-white hover:bg-cyan-600 block rounded-lg px-6 py-4 text-center ${
              feature.mostPopular
                ? "text-white bg-cyan-500 hover:bg-cyan-500 shadow-md"
                : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
            }`}
          >
            {feature.cta}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureDetails;
