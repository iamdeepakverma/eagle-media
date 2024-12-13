import React, { useEffect } from "react";
import {
  Instagram,
  Youtube,
  Wrench,
  Mic,
  School,
  LayoutPanelTop,
  TabletSmartphone,
  Image,
  SearchCheck,
} from "lucide-react";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const OurExpertise = [
    { icon: <Instagram />, title: "Social Media Management" },
    { icon: <Youtube />, title: "Video Editing" },
    { icon: <Wrench />, title: "Content Strategy" },
    { icon: <School />, title: "UI / UX Design" },
    { icon: <LayoutPanelTop />, title: "Website Design and Development" },
    { icon: <SearchCheck />, title: "SEO" },
    { icon: <TabletSmartphone />, title: "Mobile App Development" },
    { icon: <Image />, title: "Photo Editing" },
  ];

  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1733166554~exp=1733170154~hmac=c9b24b12250def60d9f94c4cee0f7275ee017519b9168f27e8a9f4c6ab2a6ef0&w=900",
    },
    {
      name: "John Smith",
      role: "CTO",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1733166554~exp=1733170154~hmac=c9b24b12250def60d9f94c4cee0f7275ee017519b9168f27e8a9f4c6ab2a6ef0&w=900",
    },
    {
      name: "Alice Johnson",
      role: "Design Lead",
      image:
        "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1733166554~exp=1733170154~hmac=c9b24b12250def60d9f94c4cee0f7275ee017519b9168f27e8a9f4c6ab2a6ef0&w=900",
    },
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Eagle's Group Digital Marketing Agency</title>
        <meta
          name="description"
          content="Learn about ads mini, a leading digital marketing agency specializing in SEO, web development, and social media management."
        />
        <meta
          name="keywords"
          content="About ads mini, Digital Marketing, SEO, Web Development, Indore,social media management,"
        />
        <meta name="author" content="Ads mini" />
        <link rel="canonical" href="https://adsmini.com/about" />
      </Helmet>
      <section
        data-aos="fade-down"
        className="relative h-[450px] text-center relative h-[350px] bg-[#9B7EBD]"
      >
        {/* <div className="absolute inset-0 bg-gray-900/80"></div> */}

        <div className="relative flex flex-col items-center justify-center h-full px-4 max-w-4xl mx-auto text-white space-y-6">
          <h1 className="text-5xl font-bold sm:pt-10 mb-6">About</h1>
          <p className="text-lg">
            Adsmini.com is a leading digital marketing agency based in Indore,
            India. We specialize in providing comprehensive digital marketing
            solutions tailored to meet the unique needs of businesses. Our goal
            is to help our clients achieve their online marketing objectives
            through innovative strategies and cutting-edge techniques
          </p>
        </div>
      </section>
      {/* dskjfbhkebiuf */}
      <div className="bg-gray-50 min-h-screen">
        {/* Mission Statement */}
        <section data-aos="fade-right" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center">
              We are dedicated to creating innovative digital solutions that
              empower businesses and individuals to thrive in the modern world.
              Our passion for technology and commitment to excellence drive us
              to deliver outstanding results for our clients.
            </p>
          </div>
        </section>

        {/* Team Members */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div data-aos="fade-left" key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Values */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                data-aos="fade-right"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-700">
                  We constantly push the boundaries of what's possible in the
                  digital realm.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
                <p className="text-gray-700">
                  We believe in the power of teamwork and open communication.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-gray-700">
                  We strive for the highest quality in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Our Expertise Section */}
      <section className="py-20 px-6 bg-gray-50 ">
        <div className="max-w-4xl mx-auto pt-20 pb-20 shadow-black shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {OurExpertise.map((item, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Let's turn your vision into reality</p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg hover:bg-blue-100 transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
