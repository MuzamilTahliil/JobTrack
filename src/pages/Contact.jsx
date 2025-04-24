import React, { useState } from 'react';
import Header from '../components/Header';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic 
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <div className="bg-white">
      <Header />

      {/* Contact Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-orange-500">Get In Touch</h2>
            <p className="mt-4 text-xl text-gray-600">We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Details (Smaller Height) */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-h-[300px] overflow-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-2xl text-gray-600" />
                  <p className="text-lg font-medium text-gray-600">+252 612 853 122</p>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-2xl text-gray-600" />
                  <p className="text-lg font-medium text-gray-600">muzamiltahliil1@gmail.com</p>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-2xl text-gray-600" />
                  <p className="text-lg font-medium text-gray-600">Mogadishu Somalia</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-800 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-800 text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 w-full p-4 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
                    required
                    rows="6"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:bg-orange-700 rounded-md transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default Contact;
