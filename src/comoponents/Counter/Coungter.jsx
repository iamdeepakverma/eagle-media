import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Coungter = () => {
  useEffect(() => {
		Aos.init({ duration: 1000 })
	}, []);
    <CountUp end={100} />

  return (
   <>
    <div
     className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-300 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-900">
            We’re Here to Help you Grow Online!
            </h2>
        <div data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Card 1 */}
          <div className="bg-purple-600 rounded-3xl p-8 transform transition-transform hover:scale-105">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-purple-300 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
              <CountUp end={4} duration={4.5} />+
              </span>
            </div>
            <h3 className="text-purple-200 font-semibold tracking-wider">
              Years Experience
            </h3>
          </div>

          {/* Stats Card 2 */}
          <div
          data-aos="fade-up"
           className="bg-purple-600 rounded-3xl p-8 transform transition-transform hover:scale-105">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-purple-300 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
              <CountUp end={30} duration={4.5} />+
              </span>
            </div>
            <h3 className="text-purple-200 font-semibold tracking-wider">
              Clients
            </h3>
          </div>

          {/* Stats Card 3 */}
          <div
          data-aos="fade-up"
           className="bg-purple-600 rounded-3xl p-8 transform transition-transform hover:scale-105">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-purple-300 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">
              <CountUp end={60} duration={4.5} />+
              </span>
            </div>
            <h3 className="text-purple-200 font-semibold tracking-wider">
              Project Done
            </h3>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Coungter
