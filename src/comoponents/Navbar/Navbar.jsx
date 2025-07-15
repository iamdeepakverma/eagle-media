import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="shadow-lg bg-white sticky  top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/adsmini.png"
                alt="ADS Mini Logo"
                width={120}
                height={40}
                className="w-auto  h-20 lg:h-20 md:h-24  sm:h-10"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About Us
              </Link>
              <Link to="/Recruitment" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Recruitment
              </Link>
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/Recruitment"
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Recruitment
            </Link>
            <Link
              to="/contact"
              className="bg-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-700 transition-colors"
              onClick={toggleMenu}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
