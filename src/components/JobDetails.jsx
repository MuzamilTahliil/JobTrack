// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FaBriefcase, FaMapMarkerAlt, FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';
// import supabase from '../lib/supabase'; 

// function JobDetails() {
//   const [job, setJob] = useState(null);
//   const { jobId } = useParams(); 
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     const fetchJobDetails = async () => {
//       // Fetch the specific job details using the jobId
//       const { data, error } = await supabase
//         .from('jobs')
//         .select('*')
//         .eq('id', jobId)
//         .single();

//       if (error) {
//         console.error('Error fetching job details:', error);
//       } else {
//         setJob(data); 
//       }
//     };

//     fetchJobDetails();
//   }, [jobId]);

//   if (!job) return <div className="text-center text-gray-700">Loading...</div>;

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col px-6 lg:px-12">
//       {/* Job Details Section */}
//       <section className="py-2  bg-white rounded-lg shadow-md">

//         {/* Job Image - Align it to the top and fill space */}
//         <div className="w-full mb-6 mt-(-6)">
//           <img
//             className="w-full h-[400px] object-cover rounded-t-lg " 
//             src={job.image_url || 'https://via.placeholder.com/500'}
//             alt={job.job_title}
//           />
//         </div>

//         {/* Job Information */}
//         <div className="flex flex-col lg:flex-row items-center lg:items-start">
//           <div className="lg:w-1/2 w-full lg:pl-12">
//             <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//               <strong>JOB TITLE:</strong> {job.job_title}
//             </h3>

//             {/* Company Name */}
//             <div className="flex items-center text-lg text-gray-600 mb-4">
//               <FaBriefcase className="mr-2 text-xl text-orange-500" />
//               <span className="font-semibold"><strong>Company Name:</strong> {job.company_name}</span>
//             </div>

//             {/* Location */}
//             <div className="flex items-center text-lg text-gray-600 mb-4">
//               <FaMapMarkerAlt className="mr-2 text-xl text-orange-500" />
//               <span className="font-semibold"><strong>Location:</strong> {job.location}</span>
//             </div>

//             {/* Job Description */}
//             <h4 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h4>
//             <p className="text-gray-600 mb-6">{job.description}</p>

//             {/* Job Type & Status */}
//             <div className="mt-6">
//               <div className="flex items-center text-lg text-gray-600 mb-2">
//                 <FaInfoCircle className="mr-2 text-xl text-orange-500" />
//                 <span><strong>Job Type:</strong> {job.job_type}</span>
//               </div>

//               <div className="flex items-center text-lg text-gray-600">
//                 <FaCalendarCheck className="mr-2 text-xl text-orange-500" />
//                 <span><strong>Status:</strong> {job.status}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Add the "Back" button at the bottom */}
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={() => navigate(-1)} 
//             className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-all duration-200"
//           >
//             Back
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default JobDetails;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaBriefcase, FaMapMarkerAlt, FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';
import supabase from '../lib/supabase'; 

function JobDetails() {
  const [job, setJob] = useState(null);
  const { jobId } = useParams(); 

  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchJobDetails = async () => {
      // Fetch the specific job details using the jobId
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', jobId)
        .single();

      if (error) {
        console.error('Error fetching job details:', error);
      } else {
        setJob(data); 
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) return <div className="text-center text-gray-700">Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col px-6 lg:px-12">
      {/* Job Details Section */}
      <section className="py-12 bg-white rounded-lg shadow-lg mb-6">

        {/* Job Image - Align it to the top and fill space */}
        <div className="w-full mb-6">
          <img
            className="w-full h-[400px] object-cover rounded-t-lg shadow-md"
            src={job.image_url || 'https://via.placeholder.com/500'}
            alt={job.job_title}
          />
        </div>

        {/* Job Information */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="lg:w-3/4 w-full lg:pl-12">
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">
              <strong className="text-orange-500">JOB TITLE:</strong> {job.job_title}
            </h3>

            {/* Company Name */}
            <div className="flex items-center text-xl text-gray-600 mb-4">
              <FaBriefcase className="mr-2 text-xl text-orange-500" />
              <span className="font-semibold text-gray-700"><strong>Company:</strong> {job.company_name}</span>
            </div>

            {/* Location */}
            <div className="flex items-center text-xl text-gray-600 mb-4">
              <FaMapMarkerAlt className="mr-2 text-xl text-orange-500" />
              <span className="font-semibold text-gray-700"><strong>Location:</strong> {job.location}</span>
            </div>

            {/* Job Description */}
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Job Description</h4>
            <p className="text-gray-700 mb-6">{job.description}</p>

            {/* Job Type & Status */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-lg text-gray-600 mb-2">
                <FaInfoCircle className="mr-2 text-xl text-orange-500" />
                <span><strong>Job Type:</strong> {job.job_type}</span>
              </div>

              <div className="flex items-center text-lg text-gray-600 mb-4">
                <FaCalendarCheck className="mr-2 text-xl text-orange-500" />
                <span><strong>Status:</strong> {job.status}</span>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate(-1)} 
                className="px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-all duration-200"
              >
                Back to Jobs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobDetails;
