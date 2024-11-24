import React from 'react'

const Footer = () => {
  return (
  <>
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ReyMedia</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400">
                  Facebook
                </a>
                <a href="#" className="hover:text-purple-400">
                  Twitter
                </a>
                <a href="#" className="hover:text-purple-400">
                  Instagram
                </a>
                <a href="#" className="hover:text-purple-400">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4">Get in Touch</h4>
                <a href="mailto:info@reymedia.in" className="hover:text-purple-400">
                  info@reymedia.in
                </a>
              </div>
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <div className="space-y-2">
                  <a href="#" className="block hover:text-purple-400">
                    Terms Of Service
                  </a>
                  <a href="#" className="block hover:text-purple-400">
                    Privacy Policy
                  </a>
                  <a href="#" className="block hover:text-purple-400">
                    Refund Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>Copyright © 2024 ReyMedia | All Rights Reserved</p>
          </div>
        </div>
      </footer>
  </>
  )
}

export default Footer
