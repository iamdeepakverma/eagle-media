'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../Utils/Data'
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <>
    <div className="max-w-full">
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
      </div>
      <div className="relative overflow-hidden">
        <div 
          className={`flex flex-col items-center p-8 bg-white rounded-xl shadow-lg transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          <img
            src={currentTestimonial.avatar}
            alt={currentTestimonial.name}
            className="w-24 h-24 rounded-full border-4 border-blue-200 mb-6 shadow-md"
          />
          <p className="text-gray-600 italic mb-6 text-center text-lg leading-relaxed">"{currentTestimonial.content}"</p>
          <div className="text-gray-800 font-semibold text-xl">{currentTestimonial.name}</div>
          <div className="text-blue-500 font-medium">{currentTestimonial.role}</div>
        </div>
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-blue-500" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-blue-500" />
        </button>
      </div>
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-blue-200'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

