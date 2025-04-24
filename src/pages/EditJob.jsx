import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../lib/supabase';
import Sidebar from '../components/Sidebar';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    job_title: '',
    company_name: '',
    location: '',
    description: '',
    job_type: 'Full-Time',
    status: 'Active',
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) {
          throw error;
        }
        
        setJobData(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching job data');
        setLoading(false);
      }
    };

    fetchJobData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('jobs')
        .update(jobData)
        .eq('id', id);

      if (error) {
        throw error;
      }

      navigate('/manage-jobs'); // Redirect back to manage jobs after success
    } catch (err) {
      setError('Error updating job data');
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-54 p-6 w-full">
        <h1 className="text-4xl font-bold mb-6">Edit Job</h1>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="job_title">
              Job Title
            </label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              value={jobData.job_title}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="company_name">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={jobData.company_name}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="description">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={jobData.description}
              onChange={handleChange}
              required
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="job_type">
              Job Type
            </label>
            <select
              id="job_type"
              name="job_type"
              value={jobData.job_type}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={jobData.status}
              onChange={handleChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
