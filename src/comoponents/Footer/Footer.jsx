import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '../../Variants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
           variants={fadeIn('right', 0.2)}
           initial={"hidden"}
           whileInView={"show"}
           viewport={{ once:   false, amount: 0.7 }}
           whileHover={{ scale: 1.05 }} // Slight scale-up on hover
           whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
           transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect

           className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Eagle Media</h3>
            <p className="text-gray-400 mb-4">Innovative digital solutions for your business growth.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>
          <motion.div
           variants={fadeIn('right', 0.2)}
           initial={"hidden"}
           whileInView={"show"}
           viewport={{ once:   false, amount: 0.7 }}
           whileHover={{ scale: 1.05 }} // Slight scale-up on hover
           whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
           transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect

          className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
           variants={fadeIn('right', 0.2)}
           initial={"hidden"}
           whileInView={"show"}
           viewport={{ once:   false, amount: 0.7 }}
           whileHover={{ scale: 1.05 }} // Slight scale-up on hover
           whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
           transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect
        
          className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Refund Policy</a></li>
            </ul>
          </motion.div>
          <motion.div
           variants={fadeIn('right', 0.2)}
           initial={"hidden"}
           whileInView={"show"}
           viewport={{ once:   false, amount: 0.7 }}
           whileHover={{ scale: 1.05 }} // Slight scale-up on hover
           whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
           transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect
          >
            <h4 className="text-xl font-semibold mb-4 text-purple-400">Get in Touch</h4>
            <a href="mailto:info@reymedia.in" className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-2">
              <Mail className="w-5 h-5 mr-2" />
              info@Eaglemedia.in
            </a>
            <p className="text-gray-400">123 Business Street, Suite 100<br />New York, NY 10001</p>
          </motion.div>
        </div>
        <motion.div
         viewport={{ once:   false, amount: 0.7 }}
         whileHover={{ scale: 1.05 }} // Slight scale-up on hover
         whileTap={{ scale: 0.95 }}   // Slight scale-down on tap
         transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring effect
        
        className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Eagle Media | All Rights Reserved</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

