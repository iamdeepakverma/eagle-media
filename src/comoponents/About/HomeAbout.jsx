import React, { useEffect } from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const HomeAbout = () => {
  useEffect(() => {
		Aos.init({ duration: 1000 })
	}, []);

  return (
    <>
     <div className="min-h-screen bg-gray-200 flex items-center justify-center p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          data-aos="fade-right"
         className="relative h-[400px] w-full">

            <img
              src="https://img.freepik.com/free-photo/people-taking-part-business-event_23-2149346666.jpg?t=st=1733167333~exp=1733170933~hmac=4e89752f5878ea16f617f5f4aa4b7ba51d0c67e43bdcd2bff4d09a2e9fa6bfd2&w=900"
              alt="Professional in office"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          {/* Left Column - Content */}
          <div 
          data-aos="fade-left"
          className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900">ABOUT US</h1>
            {/* <p className="text-xl text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing
            </p> */}
            <p className="text-gray-600 leading-relaxed">
            Eagle's Group is a leading digital marketing agency based in Indore, India. We specialize in providing comprehensive digital marketing solutions tailored to meet the unique needs of businesses. Our goal is to help our clients achieve their online marketing objectives through innovative strategies and cutting-edge techniques
            .
            </p>
            <button
            data-aos="flip-right"
             className="bg-[#9333EA] text-white px-8 py-3 hover:bg-gray-700 transition-colors">
                <Link to="/about" className="text-white">
              Read More
                </Link>
            </button>
            
            {/* Social Media Icons */}
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-black hover:text-[#9333EA]">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-black hover:text-[#9333EA]">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-black hover:text-[#9333EA]">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
        
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeAbout
