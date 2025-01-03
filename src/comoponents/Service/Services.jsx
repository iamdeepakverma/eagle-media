import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // For SEO meta tags
import { service } from "../../Utils/Data";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {/* Helmet for SEO */}

      <section id="services" className="bg-gray-50 lg:pt-10 md:pt-10 sm:pt-40">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Services
          </h1>

          <p className="text-center text-gray-700 mb-8 w-8/12 m-auto">
            At <strong>ads mini</strong>, we provide a wide range of digital marketing solutions designed to enhance your online presence and drive business growth. From SEO to social media management, our services are tailored to meet your specific needs.
          </p>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {service.map((item) => {
              return (
                <div 
                  data-aos="fade-right" 
                  key={item.id} 
                  className="bg-white p-6 rounded-lg border-y-2 shadow-grey shadow-md"
                >
                  <div  className="relative h-[200px] mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-4">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="flex items-center justify-center text-center p-10">
            <Link 
              to="/services" 
              className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
