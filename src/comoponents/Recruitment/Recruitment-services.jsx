import { CheckCircle, Users, Clock, Target, MapPin, DollarSign, Mail, Phone, Send } from "lucide-react"

export default function RecruitmentServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Adsmini</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors">
                Why Us
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block mb-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Recruitment Services
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IT, Sales, BPO & Entry-Level <span className="text-purple-600">Hiring</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Need to hire top talent without delays? We help companies across India hire faster, smarter, and
            budget-friendly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-lg">
              <Send className="w-5 h-5 mr-2" />
              Send Your Job Requirement
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-purple-600 text-purple-600 hover:bg-blue-50 font-medium rounded-lg transition-colors text-lg bg-transparent">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">🔹 Services We Offer</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive recruitment solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IT Hiring Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-blue-600 p-6">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">IT Hiring</h3>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Developers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Tech Leads
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    QA Engineers
                  </li>
                </ul>
              </div>
            </div>

            {/* BPO/KPO Hiring Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-green-600 p-6">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">BPO / KPO Hiring</h3>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Voice Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Non-voice Support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Data Processing
                  </li>
                </ul>
              </div>
            </div>

            {/* Sales & Telecalling Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-purple-600 p-6">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Sales & Telecalling</h3>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Sales Representatives
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Telecallers
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business Development
                  </li>
                </ul>
              </div>
            </div>

            {/* Campus Recruitment Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-orange-600 p-6">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Campus Recruitment</h3>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Fresher Hiring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Graduate Trainees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Entry-Level Positions
                  </li>
                </ul>
              </div>
            </div>

            {/* Bulk Hiring Card */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-600 p-6 md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Bulk Hiring</h3>
                </div>
              </div>
              <div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Mass Recruitment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Job Drives
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Volume Hiring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Adsmini</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your trusted recruitment partner with proven results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PAN India Access</h3>
              <p className="text-gray-600">
                Nationwide talent pool with candidates from every major city and region across India
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Quick hiring process with efficient screening and faster candidate delivery
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-screened Candidates</h3>
              <p className="text-gray-600">
                Thoroughly vetted candidates to ensure quality and reduce your screening time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Role-Based Filtering</h3>
              <p className="text-gray-600">Precise matching based on specific role requirements and skill sets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Budget-friendly solutions perfect for startups and MSMEs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced recruiters who understand your industry and requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to find your next great hire? Contact us and let's discuss your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why wait? Start hiring today!</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Free consultation and requirement analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">No upfront payment required</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">24-hour turnaround for shortlisted candidates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-500 mr-3" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg border p-8">
              <div className="text-center pb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-600">Get in touch with our recruitment experts</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">info@adsmini.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-purple-600 mr-3" />
                  <span className="text-gray-700">+91 8519022399</span>
                </div>
                <button className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Send Your Job Requirement
                </button>
                {/* <Link to="" className="w-full inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Contact Us
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold">Adsmini</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted recruitment partner helping companies across India hire faster, smarter, and
                budget-friendly.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>IT Hiring</li>
                <li>BPO/KPO Hiring</li>
                <li>Sales & Telecalling</li>
                <li>Campus Recruitment</li>
                <li>Bulk Hiring</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hiring@adsmini.com</li>
                <li>+91 XXXXX XXXXX</li>
                <li>PAN India Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Adsmini. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
