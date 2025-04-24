import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import supabase from '../lib/supabase'; 

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Function to fetch jobs data from Supabase
    const fetchJobs = async () => {
      try {
        const { data, error } = await supabase.from('jobs').select('*'); 
        if (error) {
          throw error;
        }
        setJobs(data); 
      } catch (error) {
        console.error("Error fetching jobs data: ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs(); 
  }, []); 

  if (loading) {
    return  <div className="text-center text-gray-700">Loading...</div>; 
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="ml-48 p-6 w-full">
        <h1 className="text-4xl font-bold mb-6 ml-12">List of All Jobs</h1>
        
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-6 py-4 font-medium text-left">Job ID</th>
                <th className="px-6 py-4 font-medium text-left">Job Title</th>
                <th className="px-6 py-4 font-medium text-left">Company</th>
                <th className="px-6 py-4 font-medium text-left">Location</th>
                <th className="px-6 py-4 font-medium text-left">description</th>
                <th className="px-6 py-4 font-medium text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {jobs.map((job) => (
                <tr key={job.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4">{job.id}</td>
                  <td className="px-6 py-4">{job.job_title}</td>
                  <td className="px-6 py-4">{job.company_name}</td>
                  <td className="px-6 py-4">{job.location}</td>
                  <td className="px-6 py-4">{job.description}</td>
                  <td className="px-6 py-4">{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
