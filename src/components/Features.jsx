import React from "react";
import styles from "../style";
import FeatureDetails from "./FeatureDetails";

const Features = () => {
  return (
    <>
      <div className="px-4 pt-24 sm:px-6 lg:px-8">
        <h2 className={styles.heading2}>Features of all our solutions ⚡</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Choose an affordable solution with the best features for engaging your
          clients, create customer loyalty and drive sales.
        </p>
      </div>
      <FeatureDetails />
    </>
  );
};

export default Features;
