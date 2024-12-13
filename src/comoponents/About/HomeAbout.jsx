'use client'

import React, { useEffect } from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import {Link} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="fade-right"
            className="relative h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="https://i.postimg.cc/NMpK0ThQ/businessman-feeling-confident-his-team.jpgf"
              alt="Professional in office"
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          <div 
            data-aos="fade-left"
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">ABOUT US</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              ADS Mini is a leading digital marketing agency based in Indore, India. We specialize in providing comprehensive digital marketing solutions tailored to meet the unique needs of businesses. Our goal is to help our clients achieve their online marketing objectives through innovative strategies and cutting-edge techniques.
            </p>
            <div className="pt-4">
              <Link to="/about" passHref>
                <button
                  data-aos="flip-right"
                  className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Read More
                </button>
              </Link>
            </div>
            
            {/* <div className="flex gap-6 pt-6">
              <SocialIcon href="#" icon={<Facebook />} label="Facebook" />
              <SocialIcon href="#" icon={<Twitter />} label="Twitter" />
              <SocialIcon href="https://www.instagram.com/ads.mini/" icon={<Instagram />} label="Instagram" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
    aria-label={label}
  >
    {React.cloneElement(icon, { className: "w-6 h-6" })}
  </a>
)

export default HomeAbout

