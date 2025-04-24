import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaPenAlt, FaImage } from 'react-icons/fa';
import supabase from '../lib/supabase'; 
import Sidebar from '../components/Sidebar'; 

const AddJobForm = () => {
  // State variables for form fields
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [jobType, setJobType] = useState('Full-Time');
  const [status, setStatus] = useState('Active');
  const [imageFile, setImageFile] = useState(null); 
  const [uploading, setUploading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  // Handle file upload to Supabase Storage
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setErrorMessage('Please upload an image.');
      return;
    }

    setUploading(true);
    setErrorMessage('');
    
    try {
      const { data, error: uploadError } = await supabase.storage
        .from('job-images')
        .upload(`job_${Date.now()}_${imageFile.name}`, imageFile);

      if (uploadError) {
        throw uploadError;
      }

      const imageUrl = supabase.storage.from('job-images').getPublicUrl(data.path).publicURL;

      const { data: jobData, error: jobError } = await supabase
        .from('jobs')
        .insert([
          {
            job_title: jobTitle,
            company_name: companyName,
            location,
            description,
            job_type: jobType,
            status,
            image_url: imageUrl, 
          }
        ]);

      if (jobError) {
        throw jobError;
      }

      // Clear form fields after successful submission
      setJobTitle('');
      setCompanyName('');
      setLocation('');
      setDescription('');
      setJobType('Full-Time');
      setStatus('Active');
      setImageFile(null);
      alert('Job added successfully!');
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading image or job details. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>

      <div className="w-3/4 p-6">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add New Job</h2>
          <form onSubmit={handleSubmit}>
            {/* Job Title */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="jobTitle">
                Job Title
              </label>
              <div className="flex items-center mt-2">
                <FaBriefcase className="mr-2 text-xl" />
                <input
                  type="text"
                  id="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="companyName">
                Company Name
              </label>
              <div className="flex items-center mt-2">
                <FaPenAlt className="mr-2 text-xl" />
                <input
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="location">
                Location
              </label>
              <div className="flex items-center mt-2">
                <FaMapMarkerAlt className="mr-2 text-xl" />
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>

            {/* Job Type */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="jobType">
                Job Type
              </label>
              <select
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            {/* Status */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="status">
                Status
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Job Image */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold" htmlFor="image">
                Job Image
              </label>
              <div className="flex items-center mt-2">
                <FaImage className="mr-2 text-xl" />
                <input
                  type="file"
                  id="image"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={uploading}
            >
              {uploading ? 'Uploading...' : 'Add Job'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobForm;
