import React from 'react'

const Header = () => {
  return (
    <>
     <section className="container mx-auto px-4 py-12 sm:py-1 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Social Media Growth and Management Expert
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We help brands grow and manage their social media
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition-colors">
              GET STARTED
            </button>
          </div>
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg"
              alt="Social Media Analytics"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
