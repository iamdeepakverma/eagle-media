import React from "react";
import { Link } from "react-router-dom";


const MainServices = () => {
  const service=[
    {
      id:1,
      name:"Social Media Management",
      image:"https://upload.wikimedia.org/wikipedia/commons/7/74/Social_media_collection_2020s.png",
      description:"Our Instagram management service optimizes your brand's presence, boosts engagement, and drives growth through strategic content creation, audience targeting, and performance analytics.",
    },
    {
      id:2,
      name:"Search Engine Optimization",
      image:"https://upload.wikimedia.org/wikipedia/commons/9/90/SEO_Types.png",
      description:"Break the language barrier by getting your videos dubbed by professionals in Hindi to capture the 700 Million Hindi Speaking viewers in India and grow your fanbase worldwide."
    },
    {
      id:3,
      name:"100% Youtube Management",
      image:"https://upload.wikimedia.org/wikipedia/commons/9/9c/My_Verison_Youtube_Studio_Logo_%282015%29.png",
      description:"We'll cover it according to your needs or manage it all, from researching content ideas, scripting, professionally editing, making a super catchy thumbnail to publishing and everything small in between."
    },
    {
      id:4,
      name:"Website Design and Development",
      image:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Design_responsivo.png",
      description:"Our team of expert web developers will create a visually stunning and user-friendly website that perfectly aligns with your brand's identity and goals."
    },
    {
      id:5,
      name:"UI / UX Design",
      image:"https://upload.wikimedia.org/wikipedia/commons/7/70/Figma.svg",
      description:"Our team of expert web developers will create a visually stunning and user-friendly website that perfectly aligns with your brand's identity and goals."
    },
    {
      id:6,
      name:"Video Editing",
      image:"https://upload.wikimedia.org/wikipedia/commons/5/54/CCCamp_2019_by_CountCrapula_034.jpg",
      description:"Our team of expert web developers will create a visually stunning and user-friendly website that perfectly aligns with your brand's identity and goals."
    },
    {
      id:7,
      name:"Mobile app development",
      image:"https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Play_App_Download.png", 
      description:"Our team of expert web developers will create a visually stunning and user-friendly website that perfectly aligns with your brand's identity and goals."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <div>
        <section className="relative h-[350px] bg-[url('./office.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900/80"></div>
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
              {
                service.map((item) => (
                  <div key={item.id} className="bg-white p-8 rounded-lg shadow-lg">
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
                ))
              }
              
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-16">
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
