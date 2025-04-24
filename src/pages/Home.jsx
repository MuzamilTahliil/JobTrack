import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
                Find Your Next Opportunity, with
                <div className="relative inline-flex mt-2">
                  <h1 className="relative text-4xl font-bold text-orange-500 sm:text-5xl lg:text-6xl">JobTrack</h1>
                </div>
              </h1>

              <p className="mt-6 text-base text-gray-700 sm:text-lg lg:text-xl">
                Find the best job opportunities, collaborate remotely, and grow your career. Join thousands of professionals on JobTrack to discover the perfect job that fits your skills.
              </p>

              <div className="mt-8 sm:flex sm:items-center sm:space-x-8 justify-center lg:justify-start">
                <a href="/signup" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-orange-500 hover:bg-white hover:text-black focus:bg-blue-700 transition-all duration-200 rounded-md shadow-lg">
                  Start Exploring
                </a>
              </div>
            </div>

            <div className="flex justify-center mb-12 lg:mt-0">
              <img className="w-full max-w-5xl lg:max-w-6xl mx-auto" src="JobTrack2.jpg" alt="JobTrack hero" />
            </div>
          </div>
        </div>
      </section>

      {/* New Section: How It Works */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">How JobTrack Works</h2>
          <p className="mt-4 text-xl text-gray-600 text-center">JobTrack connects job seekers with the best opportunities around the world. Here's how it works:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c3.314 0 6 2.686 6 6 0 3.313-2.686 6-6 6-3.313 0-6-2.687-6-6 0-3.314 2.687-6 6-6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.293 4.293l15.414 15.414" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Browse Jobs</h3>
              <p className="mt-4 text-gray-600">Explore thousands of job listings from various industries and companies.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Apply with Ease</h3>
              <p className="mt-4 text-gray-600">Submit your application quickly using our simple and easy-to-use platform.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10l7-7M9 3v14m5-7h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Get Hired</h3>
              <p className="mt-4 text-gray-600">Once you've applied, we connect you with top employers looking for your skills.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 7L7 3M7 3l5-5M7 3v14m-5-5l-5 5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Track Your Applications</h3>
              <p className="mt-4 text-gray-600">Monitor the progress of your job applications with real-time updates and feedback.</p>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Interview Preparation</h3>
              <p className="mt-4 text-gray-600">Get personalized tips and guidance for preparing for interviews.</p>
            </div>

            {/* Step 6 */}
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-16 h-16 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v12h14V3H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Offer Acceptance</h3>
              <p className="mt-4 text-gray-600">Once you receive an offer, confirm and start your new job with JobTrack’s help.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Job Categories Section (Boxes with Image and Description) */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Explore Job Categories</h2>
          <p className="mt-4 text-xl text-gray-600 text-center">Find jobs in various categories. Explore your next career opportunity:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {/* Job Box 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg" src="Technology.png" alt="Tech Jobs" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Technology</h3>
              <p className="mt-2 text-gray-600">Explore the latest job openings in the tech industry, from developers to engineers.</p>
              <Link to="/signin" className="inline-flex mt-4 items-center justify-center px-6 py-2 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-md transition-all duration-200">
                Explore Jobs
              </Link>
            </div>

            {/* Job Box 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg" src="Marketing.png" alt="Marketing Jobs" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Marketing</h3>
              <p className="mt-2 text-gray-600">Looking for a career in digital marketing, SEO, content creation, and more? Explore marketing roles here.</p>
              <Link to="/signin" className="inline-flex mt-4 items-center justify-center px-6 py-2 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-md transition-all duration-200">
                Explore Jobs
              </Link>
            </div>

            {/* Job Box 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg" src="Finance.png" alt="Finance Jobs" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Finance</h3>
              <p className="mt-2 text-gray-600">Explore finance jobs, including accounting, financial analysis, and investment opportunities.</p>
              <Link to="/signin" className="inline-flex mt-4 items-center justify-center px-6 py-2 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-md transition-all duration-200">
                Explore Jobs
              </Link>
            </div>

            {/* Job Box 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg" src="Sales.jpg" alt="Sales Jobs" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Sales</h3>
              <p className="mt-2 text-gray-600">Join the sales team and be part of exciting opportunities in retail, B2B sales, and account management.</p>
              <Link to="/signin" className="inline-flex mt-4 items-center justify-center px-6 py-2 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-md transition-all duration-200">
                Explore Jobs
              </Link>
            </div>

            {/* Job Box 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg" src="Healthcare.webp" alt="Healthcare Jobs" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Healthcare</h3>
              <p className="mt-2 text-gray-600">Explore job opportunities in healthcare, including doctors, nurses, and medical support staff.</p>
              <Link to="/signin" className="inline-flex mt-4 items-center justify-center px-6 py-2 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-md transition-all duration-200">
                Explore Jobs
              </Link>
            </div>

            {/* Job Box 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img className="w-full h-48 object-cover rounded-lg" src="Customer Support.jpg" alt="Customer Support Jobs" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Customer Support</h3>
              <p className="mt-2 text-gray-600">Find job opportunities in customer service and help businesses improve their customer experience.</p>
              <Link to="/signin" className="inline-flex mt-4 items-center justify-center px-6 py-2 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 rounded-md transition-all duration-200">
                Explore Jobs
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default Home;


