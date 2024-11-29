import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeIn } from '../../Variants';

const Services = () => {

  const service=[
    {
      id:1,
      name:"Social Media Management",
      image:"https://upload.wikimedia.org/wikipedia/commons/7/74/Social_media_collection_2020s.png",
      description:"Social Media Management involves creating, scheduling, and analyzing content to grow and engage an audience on social media platforms. It helps build brand awareness, drive traffic, and increase sales.",
    },
    {
      id:2,
      name:"SEO Search Engine Optimization",
      image:"https://upload.wikimedia.org/wikipedia/commons/9/90/SEO_Types.png",
      description:"SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. This helps increase visibility, attract more organic traffic, and ultimately, drive more business."
    },
    {
      id:3,
      name:"100% Youtube Management",
      image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/My_Verison_Youtube_Studio_Logo_%282015%29.png",
      description:"We'll cover it according to your needs or manage it all, from researching content ideas, scripting, professionally editing, making a super catchy thumbnail to publishing and everything small in between."
    },

  ]
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
                  
                  <motion.div
                  variants={fadeIn('right', 0.2)}
               initial={"hidden"}
               whileInView={"show"}
               viewport={{ once:   false, amount: 0.7 }}
               whileHover={{ scale: 1.05 }} // Slight scale-up on hover
               whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
               transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect

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
                </motion.div>
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
