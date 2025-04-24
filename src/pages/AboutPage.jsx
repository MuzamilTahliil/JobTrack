import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="bg-white">
      <Header />

      {/* About Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Text */}
            <div className="lg:pr-16">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="mt-4 text-xl text-gray-600">
                At JobTrack, our mission is to connect professionals with the best job opportunities, empowering them to achieve their career goals. We strive to make job hunting simple and accessible to all by offering a seamless platform.
              </p>

              <h3 className="mt-8 text-2xl font-semibold text-gray-800">Our Goal</h3>
              <p className="mt-4 text-xl text-gray-600">
                Our goal is to create a platform where job seekers can easily browse through job listings, apply for positions, and track their progress. We aim to reduce the complexities of the job application process while providing companies with access to top talent.
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end">
              <img className="w-full max-w-4x1 object-cover rounded-lg shadow-lg" src="about2.jpeg" alt="JobTrack Image" />
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default About;
