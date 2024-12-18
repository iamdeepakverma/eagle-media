import { Link } from "react-router-dom"

export default function PrimaryGolas() {
    return (
      <div className="relative min-h-[400px] w-full overflow-hidden bg-gradient-to-b from-[#0B57D0] to-orange-500">
        {/* Curved shapes at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto opacity-10"
          >
            <path
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="white"
            />
          </svg>
        </div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            What&apos;s your primary goal?
          </h1>
          
          <p className="mb-12 text-xl sm:text-2xl md:text-3xl font-light">
            More Traffic
            <span className="mx-2 opacity-50">/</span>
            Better Content
            <span className="mx-2 opacity-50">/</span>
            Lead Generation
          </p>
  
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <div className="text-xl sm:text-2xl font-medium">
              Call us: <a href="" className="hover:underline">+91 8519022399</a>
            </div>
            
            <Link to="/contact">
            <button className="rounded-full bg-gray-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-gray-800 hover:scale-105 active:scale-100">
              Discover Your Solution
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  