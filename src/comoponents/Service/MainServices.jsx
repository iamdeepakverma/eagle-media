import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import { fadeIn } from "../../Variants";

const MainServices = () => {
  const service = [
    {
      id: 1,
      name: "Social Media Management",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Social_media_collection_2020s.png",
      description:
        "Social Media Management involves creating, scheduling, and analyzing content to grow and engage an audience on social media platforms. It helps build brand awareness, drive traffic, and increase sales.",
    },
    {
      id: 2,
      name: "Search Engine Optimization",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/SEO_Types.png",
      description:
        "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results. This helps increase visibility, attract more organic traffic, and ultimately, drive more business.",
    },
    {
      id: 3,
      name: "100% Youtube Management",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/My_Verison_Youtube_Studio_Logo_%282015%29.png",
      description:
        "We'll cover it according to your needs or manage it all, from researching content ideas, scripting, professionally editing, making a super catchy thumbnail to publishing and everything small in between.",
    },
    {
      id: 4,
      name: "Website Design and Development",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Design_responsivo.png",
      description:
        "Create a stunning, user-friendly website that reflects your brand's identity. Our design and development team will build a website that is both visually appealing and functional.",
    },
    {
      id: 5,
      name: "UI / UX Design",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Figma.svg",
      description:
        "Our expert designers will create intuitive and visually appealing user interfaces that enhance user experience. We'll optimize your website's design to ensure seamless navigation, faster load times, and higher user engagement.",
    },
    {
      id: 6,
      name: "Video Editing",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/54/CCCamp_2019_by_CountCrapula_034.jpg",
      description:
        "Our skilled video editors will transform your raw footage into captivating visual stories. We'll handle everything from basic editing to advanced post-production techniques, including color correction, sound design, and special effects.",
    },
    {
      id: 7,
      name: "Mobile app development",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Play_App_Download.png",
      description:
        "Our team of app developers will create innovative and user-friendly mobile apps for iOS and Android platforms. We'll design and develop apps that meet your specific business needs and deliver exceptional user experiences.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div>
        <motion.section
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative h-[350px] bg-[url('./office.png')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gray-900/80"></div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-white">Services</h1>
          </div>
        </motion.section>

        {/* What We Do Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What we do</h2>
              <p className="text-gray-600">OUR SERVICES</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.map((item) => (
               <motion.div
               variants={fadeIn('right', 0.1)}
               initial={"hidden"}
               whileInView={"show"}
               viewport={{ once:   false, amount: 0.7 }}
               whileHover={{ scale: 1.05 }} // Slight scale-up on hover
               whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
               transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect

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
             </motion.div>
             
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          // viewport={{ once: false, a70mount: 0.7 }}
          // whileHover={{ scale: 0.90 }} // Slight scale-up on hover
          // whileTap={{ scale: 0.60}} // Slight scale-down on tap
          // transition={{ type: "spring", stiffness: 400, damping: 20 }} // Smooth spring effect
        
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
        </motion.section>
      </div>
    </>
  );
};

export default MainServices;
