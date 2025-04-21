import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { fadeIn } from "../../Variants";

const MainContact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <motion.div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">
          Any questions or remarks? Just write us a message!
        </p>

        <form
          data-aos="fade-up"
          action="https://api.web3forms.com/submit"
          method="POST"
          data-aos-anchor-placement="center-bottom"
          className="max-w-2xl mx-auto space-y-6 mb-20 p-10 shadow-grey shadow-2xl"
        >
          <input
            type="hidden"
            name="access_key"
            value="83655ce9-20a5-48e0-bce3-64e866d60d26"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-md bg-white border-transparent focus:border-teal-500 focus:bg-white focus:ring-0"
                placeholder="Enter a valid email address"
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-md bg-white border-transparent focus:border-teal-500 focus:bg-white focus:ring-0"
                placeholder="Enter your Name"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone No
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 rounded-md bg-white border-transparent focus:border-teal-500 focus:bg-white focus:ring-0"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label
              htmlFor="services"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What services are you interested in?
            </label>
            <textarea
              id="services"
              name="services"
              className="w-full px-4 py-3 rounded-md bg-white border-transparent focus:border-teal-500 focus:bg-white focus:ring-0"
              placeholder="Tell us about the services you're interested in"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-400 transition-colors duration-200"
          >
            SUBMIT
          </button>
        </form>

        <div className="grid md:grid-cols-3 gap-8 bg-gray-100 rounded-lg p-10 shadow-grey shadow-2xl">
          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={{ scale: 1.05 }} // Slight scale-up on hover
            whileTap={{ scale: 0.95 }} // Slight scale-down on tap
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Gmail ID</h2>
            <p className="text-gray-600">connect@adsmini.com</p>
          </motion.div>

          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={{ scale: 1.05 }} // Slight scale-up on hover
            whileTap={{ scale: 0.95 }} // Slight scale-down on tap
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">PHONE</h2>
            <p className="text-gray-600">+91 8519022399</p>
          </motion.div>

          <motion.div
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            whileHover={{ scale: 1.05 }} // Slight scale-up on hover
            whileTap={{ scale: 0.95 }} // Slight scale-down on tap
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect
            className="text-center"
          >
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">OUR OFFICE LOCATION</h2>
            <p className="text-gray-600">
              Aalok Nagar Kanadiya Road Indore 452016 (M.P.)
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MainContact;
