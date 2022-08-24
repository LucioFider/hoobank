import React from "react";
import styles, { layout } from "../style";
import { IoLogoInstagram } from "react-icons/io";

const Contact = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Contact Us</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          If you are interested in the services we offer, shoot us an email or
          call us on the following numbers. You can also follow us on social
          Media.
        </p>
        <br />
        <p className={`${styles.paragraph}`}>
          Phone Number: +675 79862195 / +675 7549 5318
        </p>
        <div className="flex space-x-3 text-blue-700">
          <IoLogoInstagram size={50} />
        </div>
      </div>
      <div className="">
        <form className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-3xl p-4 bg-gray-600 outline-none"
          />
          <input
            type="email"
            placeholder="email"
            className="rounded-3xl p-4 bg-gray-600 outline-none"
          />
          <textarea
            name=""
            id=""
            rows="6"
            placeholder="Your message"
            className="rounded-3xl p-4 bg-gray-600 outline-none"
          ></textarea>
          <button className="p-4 bg-blue-400 text-[18px] font-medium rounded-3xl">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
