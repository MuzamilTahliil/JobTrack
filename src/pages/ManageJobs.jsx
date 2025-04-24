import React, { useState, useEffect } from 'react';
import { FaExclamationCircle } from 'react-icons/fa'; 
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import supabase from '../lib/supabase';
import { Link } from 'react-router-dom';  


const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [jobToDelete, setJobToDelete] = useState(null); 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase.from('jobs').select('*');
        if (error) throw error;
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Function to open modal and set the job to be deleted
  const handleDeleteClick = (job) => {
    setJobToDelete(job);
    setIsModalOpen(true);
  };

  // Close modal without deleting
  const handleCancel = () => {
    setIsModalOpen(false);
    setJobToDelete(null);
  };

  // Confirm deletion and delete the job
  const deleteJob = async () => {
    if (jobToDelete) {
      try {
        const { error } = await supabase.from('jobs').delete().eq('id', jobToDelete.id);
        if (error) throw error;

        setJobs(jobs.filter((job) => job.id !== jobToDelete.id)); 
        setIsModalOpen(false); 
        setJobToDelete(null);  
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  if (loading) return  <div className="text-center text-gray-700">Loading...</div>;

  return (
    <div className="flex">
      <Sidebar /> 

      <div className="ml-54 p-6 w-full">
        <h1 className="text-4xl font-bold mb-8">Manage Jobs</h1>

        {/* Jobs Table */}
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md mt-4">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-4 font-medium text-left">Job ID</th>
                <th className="px-6 py-4 font-medium text-left">Job Title</th>
                <th className="px-6 py-4 font-medium text-left">Company</th>
                <th className="px-6 py-4 font-medium text-left">Location</th>
                <th className="px-6 py-4 font-medium text-left">Status</th>
                <th className="px-6 py-4 font-medium text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{job.id}</td>
                  <td className="px-6 py-4">{job.job_title}</td>
                  <td className="px-6 py-4">{job.company_name}</td>
                  <td className="px-6 py-4">{job.location}</td>
                  <td className="px-6 py-4">{job.status}</td>
                  <td className="px-6 py-4">
                    {/* Edit Button */}
                    <Link
                      to={`/edit-job/${job.id}`}
                      className="text-blue-500 hover:text-blue-700 mr-3"
                    >
                      <FaEdit className="inline" />
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDeleteClick(job)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrashAlt className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Delete Confirmation */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      {/* Warning Icon */}
      <div className="flex justify-center mb-4">
        <FaExclamationCircle className="text-red-500 text-6xl" />
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-center mb-4">Are you sure you want to delete this job?</h3>
      
      {/* Description */}
      <p className="mb-4 text-gray-600 text-center">This action cannot be undone.</p>
      
      {/* Button Container */}
      <div className="flex justify-center space-x-4">
        {/* Cancel Button */}
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        
        {/* Delete Button */}
        <button
          onClick={deleteJob}
          className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ManageJobs;
