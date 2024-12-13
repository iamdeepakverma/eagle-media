import React from 'react'
import { Link } from 'react-router-dom'

const Whatapp = () => {
  return (
    <div className='fixed bottom-4 right-16 z-50 rounded-full pl-1 pr-1 bg-[#25D366] hover:scale-125 transition-all duration-300'>
        <Link
        to="https://wa.me/+917828758247?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
      >
        <button className='p-2' >
          <i className="fa-brands fa-whatsapp"></i>
        </button>
      </Link>
    </div>
  )
}

export default Whatapp
