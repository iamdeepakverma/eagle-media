import React from "react";
import {
  Instagram,
  Youtube,
  Wrench,
  Mic,
} from "lucide-react";
import { motion } from "motion/react";
import { fadeIn } from "../../Variants";

const About = () => {
  const OurExpertise = [
    { icon: <Instagram />, title: "Social Media Management" },
    { icon: <Youtube />, title: "Video Editing" },
    { icon: <Wrench />, title: "Content Strategy" },
    { icon: <Mic />, title: "UI / UX Design" },
    { icon: <Mic />, title: "Website Design and Development" },
    { icon: <Mic />, title: "SEO" },
    { icon: <Mic />, title: "Mobile App Development" },
    { icon: <Mic />, title: "ADS" },
    { icon: <Mic />, title: "Google My Business" },
  ];
  return (
    <>
      <motion.section
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.1, duration: 0.6 }}
       
       className="relative h-[450px] text-center relative h-[350px] bg-[url('./office.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/80"></div>

        <div className="relative flex flex-col items-center justify-center h-full px-4 max-w-4xl mx-auto text-white space-y-6">
          <h1 className="text-5xl font-bold sm:pt-10 mb-6">About</h1>
          <p className="text-lg">
            ReyMedia is the brainchild of [Rey-Trix Enterprise Private Limited],
            a dynamic brand focused on innovative Digital media solutions. With
            a keen eye for excellence, ReyMedia is committed to delivering
            cutting-edge digital services that captivate and engage audiences.
          </p>
          <p className="text-sm">
            Address: YC Co-Working Space, Top Floor, Plot No. 84 Dwarka Sec-13
            <br />
            Near Radisson Blu Hotel, New Delhi 110078
          </p>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Who we are</h2>
          <p className="text-gray-600">
            ReyMedia is the social media department of the firm Rey-Trix
            Enterprise Pvt Ltd. ReyMedia specializes in growing the top 1% of
            Entrepreneurs' and Businesses' digital presence through social media
            growth campaigns and social media management.
          </p>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 px-6 bg-gray-50 ">
        <div className="max-w-4xl mx-auto pt-20 pb-20 shadow-black shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {OurExpertise.map((item, index) => (
              <motion.div
              variants={fadeIn('up', 0.5)}
              initial={"hidden"}
              whileInView={"show"}
              viewport={{ once: false,amount:0.7 }}

                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
