import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeIn } from '../../Variants';
import { service } from "../../Utils/Data";
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
const Services = () => {

  useEffect(() => {
		Aos.init({ duration: 1000 })
	}, []);
  return (
   <>
    <section id="services" className="bg-gray-50 lg:pt-10 md:pt-10 sm:pt-40 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          
          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Social Media Management */}
            {
              service.map((item)=>{
                return(
                  
                  <div data-aos="fade-right"

                   key={item.id} className="bg-white p-6 rounded-lg border-y-2 shadow-grey shadow-md">
                  <div className="relative h-[200px] mb-0">
                    <img
                      src={item.image}
                      alt="Social Media Management"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                )
              })
            }

          </div>
          <div className='flex items-center justify-center text-center p-10'>
            <Link to="/services" className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors ">See More</Link>
          </div>
        </div>
      </section>
   </>
  )
}

export default Services
