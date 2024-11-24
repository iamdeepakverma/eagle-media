import React from "react";
import { Link } from "react-router-dom";

const MainServices = () => {
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
              {/* Service Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <img
                    src="./office.png"
                    alt="Social Media"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Celebrity Giveaway Sponsorships
                </h3>
                <p className="text-gray-600">
                  Unlock Your Social Potential with Our Social Media Growth
                  Campaign! We specialize in boosting your online presence,
                  increasing followers, and driving engagement to help your
                  brand thrive in the digital world
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <img
                    src="./office.png"
                    alt="Youtube Management"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  100% Youtube Management
                </h3>
                <p className="text-gray-600">
                  We'll cover it according to your needs or manage it all, from
                  researching content ideas, scripting, professionally editing,
                  making a super catchy thumbnail to publishing and everything
                  small in between
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <img
                    src="./office.png"
                    alt="Professional Dubbing"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Professional Dubbing</h3>
                <p className="text-gray-600">
                  Break the language barrier by getting your videos dubbed by
                  professionals in Hindi to capture the 700 Million Hindi
                  Speaking Viewers in India and grow your fanbase worldwide.
                </p>
              </div>
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
                href="/contact"
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
