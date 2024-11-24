import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
   <>
    <section id="services" className="bg-gray-50 pt-0 pb-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Services
          </h2>
          
          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Social Media Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-[200px] mb-6">
                <img
                  src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg"
                  alt="Social Media Management"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Social Media Management</h3>
              <p className="text-gray-600">
                Our Instagram management service optimizes your brand's presence, boosts engagement, and drives growth through strategic content creation, audience targeting, and performance analytics.
              </p>
            </div>

            {/* Professional Dubbing */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-[200px] mb-6">
                <img
                  src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg"
                  alt="Professional Dubbing"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Dubbing</h3>
              <p className="text-gray-600">
                Break the language barrier by getting your videos dubbed by professionals in Hindi to capture the 700 Million Hindi Speaking viewers in India and grow your fanbase worldwide.
              </p>
            </div>

            {/* YouTube Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="relative h-[200px] mb-6">
                <img
                  src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg"
                  alt="YouTube Management"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">100% Youtube Management</h3>
              <p className="text-gray-600">
                We'll cover it according to your needs or manage it all, from researching content ideas, scripting, professionally editing, making a super catchy thumbnail to publishing and everything small in between.
              </p>
            </div>
          </div>
        </div>
      </section>
   </>
  )
}

export default Services
