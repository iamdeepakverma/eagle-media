import { motion } from "motion/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "../../Variants";
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { mainservice } from "../../Utils/Data";

const MainServices = () => {

  useEffect(() => {
		Aos.init({ duration: 1000 })
	}, []);

  return (
    <>
      {/* Hero Section */}
      <div >
        <section className="relative h-[350px]  bg-[#9B7EBD]">        
          <div className="relative flex items-center justify-center h-full">

            <h1 className="text-5xl font-bold text-white">Services</h1>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What we do</h2>
              <p className="text-gray-600">OUR SERVICES</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mainservice.map((item) => (
               <div data-aos="fade-up"
               key={item.id}
               className="bg-white p-8 rounded-lg shadow-lg"
             >
               <div className="mb-6">
                 <img
                   src={item.image}
                   alt={item.name}
                   width={200}
                   height={200}
                   className="w-full h-auto"
                 />
               </div>
               <h3 className="text-xl font-bold mb-4">{item.name}</h3>
               <p className="text-gray-600">{item.description}</p>
             </div>
             
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
        data-aos="fade-up"
        
        className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
                Would you like to start a project with us?
              </h3>
              <Link
                to="/contact"
                className="px-8 py-3 text-white bg-violet-600 rounded-md hover:bg-violet-700 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainServices;
