import React from 'react'
import { Instagram, Youtube, Wrench, Mic,Facebook,Figma,TabletSmartphone,Search } from 'lucide-react'


const About = () => {
  return (
 <>
       {/* Hero Section */}
       {/* <section className="relative h-[350px] bg-[url('./office.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gray-900/80"></div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-5xl font-bold text-white">Services</h1>
          </div>
        </section> */}

       <section className="relative h-[450px] text-center relative h-[350px] bg-[url('./office.png')] bg-cover bg-center">
       <div className="absolute inset-0 bg-gray-900/80"></div>

        <div className="relative flex flex-col items-center justify-center h-full px-4 max-w-4xl mx-auto text-white space-y-6">
          <h1 className="text-5xl font-bold sm:pt-10 mb-6">About</h1>
          <p className="text-lg">
            ReyMedia is the brainchild of [Rey-Trix Enterprise Private Limited], a dynamic brand focused on innovative Digital media solutions. With a keen eye for excellence, ReyMedia is committed to delivering cutting-edge digital services that captivate and engage audiences.
          </p>
          <p className="text-sm">
            Address: YC Co-Working Space, Top Floor, Plot No. 84 Dwarka Sec-13
            <br />
            Near Radisson Blu Hotel, New Delhi 110078
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Who we are</h2>
          <p className="text-gray-600">
            ReyMedia is the social media department of the firm Rey-Trix Enterprise Pvt Ltd. ReyMedia specializes in growing the top 1% of Entrepreneurs' and Businesses' digital presence through social media growth campaigns and social media management.
          </p>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 px-6 bg-gray-50 ">
        <div className="max-w-4xl mx-auto pt-20 pb-20 shadow-black shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-16">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Instagram Growth Campaigns</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Facebook className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Social Media Management</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Video Production</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Video Editing</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Content Strategy</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Professional Dubbing</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Figma className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">UI / UX Design</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <TabletSmartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Website Design</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">SEO Optimization</h3>
            </div>
          </div>
        </div>
      </section>

 </>
  )
}

export default About
