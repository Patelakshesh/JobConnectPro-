import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">JobPortal</h3>
            <p className="text-gray-400 text-sm">
              Connecting talent with opportunities since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-13 19h-3v-9h3v9zm-1.5-10.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 10.3h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.3.6-1.5 1.2v5.1h-3v-9h3v1.2c.4-.6 1.1-1.4 2.5-1.4 1.8 0 3.2 1.2 3.2 3.8v5.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Job Seekers Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Job Seekers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Search Jobs</a></li>
              <li><a href="#" className="hover:text-white">Upload Resume</a></li>
              <li><a href="#" className="hover:text-white">Career Advice</a></li>
            </ul>
          </div>

          {/* Employers Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Employers</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Post a Job</a></li>
              <li><a href="#" className="hover:text-white">Hiring Solutions</a></li>
              <li><a href="#" className="hover:text-white">Employer Login</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 sm:mb-0">Subscribe to our newsletter</p>
            <div className="flex w-full sm:w-auto gap-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-64 px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
