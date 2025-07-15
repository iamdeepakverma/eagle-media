import React from 'react'
import { fadeIn } from '../../Variants'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     <msection className="container mx-auto px-7 py-12 sm:py-1 md:py-16 sm:pb-0">
        <motion.div
         variants={fadeIn('down', 0.2)}
         initial={"hidden"}
         whileInView={"show"}
         viewport={{ once: false,amount:0.7 }}
         
         className="grid md:grid-cols-2 gap-12 items-center px-10">
          <div>
            <motion.h1
             initial={{ opacity: 0, y: -50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1, duration: 0.6 }}
            
            className="text-lg md:text-3xl font-bold leading-tight mb-6">
              Marketing That Performs.<br/>
              Hiring That Delivers.<br/>
              AdsMini — Your Partner for Growth.
            </motion.h1>
            <motion.p 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3, duration: 0.6 }}
            
            className="text-xl text-gray-600 mb-8">
               Digital Marketing | Recruitment Services | Startup Solutions
            </motion.p>
            <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}

             className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors">
              <Link to="/contact">
              GET STARTED
              </Link>
            </motion.button>
          </div>
          <div className="relative lg:h-[400px] md:h-[400px] sm:h-[200px]">
            <img
              src="./office.png"
              alt="Social Media Analytics"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </msection>
    </>
  )
}

export default Header
