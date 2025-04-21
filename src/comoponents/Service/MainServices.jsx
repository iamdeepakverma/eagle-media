import { motion } from "motion/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "../../Variants";
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { mainservice } from "../../Utils/Data";
import { Helmet } from 'react-helmet-async'; // For SEO meta tags


const MainServices = () => {

  useEffect(() => {
		Aos.init({ duration: 1000 })
	}, []);

  return (
    <>
      {/* Hero Section */}
      <div >
      <Helmet>
        <title>Our Services | Adsmini - Digital Marketing Agency</title>
        <meta 
          name="description" 
          content="Explore ads mini's comprehensive digital marketing services including SEO, social media management, content marketing, PPC, and more. Drive your business growth today!" 
        />
        <meta 
          name="keywords" 
          content="digital marketing services, SEO services, social media management, content marketing, PPC services, online advertising, business growth, digital marketing agency, web design,web development" 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.adsmini.com/services" />
      </Helmet>
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
