import React from "react";
import { Link } from "react-router-dom";
import { Phone, Instagram, Linkedin, Mail,MessageCircle  } from "lucide-react";


const Footer = () => {
  const phoneNumber = "+918519022399";
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
            ADS mini
            </h3>
            <p className="text-gray-400 mb-4">
              Innovative digital solutions for your business growth.
            </p>
            <div className="flex space-x-4">
              <Link
                to={`tel:${phoneNumber}`}
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Phone className="w-6 h-6" />
                {/* <span className="sr-only">Facebook</span> */}
              </Link>
              <Link
                to="https://www.instagram.com/ads.mini/"
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
                {/* <span className="sr-only">Instagram</span> */}
              </Link>
              <Link
                to="https://wa.me/+918519022399?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                {/* <span className="sr-only">LinkedIn</span> */}
              </Link>
            </div>
          </div>
          <div
            className="mb-8 md:mb-0"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="mb-8 md:mb-0"
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              {/* <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Refund Policy
                </Link>
              </li> */}
            </ul>
          </div>
          <div
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              Get in Touch
            </h4>
            <a
              href="mailto:connect@adsmini.com"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-2"
            >
              <Mail className="w-5 h-5 mr-2" />
              connect@adsmini.com  
            </a>
            <p className="text-gray-400">
            Aalok Nagar Kanadiya Road 
              <br />
              Indore 452016 (M.P.)
            </p>
          </div>
        </div>
        <div
                 className="border-t border-gray-800 mt-12 pt-8 text-center text-sm"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} adsmini.com | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
