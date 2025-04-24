import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../lib/supabase'; 
import UserHeader from '../components/UserHeader';
import Footer from '../components/Footer';

function AllJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch all jobs from the jobs table
    const fetchJobs = async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*'); 

      if (error) {
        console.error('Error fetching jobs:', error);
      } else {
        setJobs(data); 
      }
    };

    fetchJobs(); 
  }, []);

  return (
    <div className='bg-gray-50'>
        <UserHeader/>
       <section className='mt-12 mb-12'>
       <div className="bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">All Available Jobs</h2>
        
        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Job Image */}
                <img 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                  src={job.image_url || 'https://via.placeholder.com/300'}  
                  alt={job.title} 
                />
                
                {/* Job Details with Labels */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Job Title: {job.job_title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Company Name: {job.company_name}
                  </p>
                  <p className="mt-2 text-gray-600">
                    Location: {job.location}
                  </p>
                </div>

                {/* See Details Button */}
                <Link to={`/job-details/${job.id}`} className="text-orange-500 font-semibold hover:text-orange-600">
                  See Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No jobs available right now.</p>
          )}
        </div>
      </div>
    </div>
        </section> 
        <Footer/>
    </div>
  );
}

export default AllJobs;
