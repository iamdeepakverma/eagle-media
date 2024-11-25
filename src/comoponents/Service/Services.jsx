import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {

  const service=[
    {
      id:1,
      name:"Social Media Management",
      description:"Our Instagram management service optimizes your brand's presence, boosts engagement, and drives growth through strategic content creation, audience targeting, and performance analytics.",
    },
    {
      id:2,
      name:"Professional Dubbing",
      description:"Break the language barrier by getting your videos dubbed by professionals in Hindi to capture the 700 Million Hindi Speaking viewers in India and grow your fanbase worldwide."
    },
    {
      id:3,
      name:"100% Youtube Management",
      description:"We'll cover it according to your needs or manage it all, from researching content ideas, scripting, professionally editing, making a super catchy thumbnail to publishing and everything small in between."
    },

  ]
  return (
   <>
    <section id="services" className="bg-gray-50 pt-0  md:py-24">
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
                  <div key={item.id} className="bg-white p-6 rounded-lg border-y-2 shadow-grey shadow-md">
                  <div className="relative h-[200px] mb-6">
                    <img
                      src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg"
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
