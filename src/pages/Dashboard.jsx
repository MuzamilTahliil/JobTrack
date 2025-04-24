import React, { useEffect, useState } from 'react';
import { FaUserCircle, FaBriefcase, FaUsers, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import Sidebar from '../components/Sidebar';
import supabase from '../lib/supabase'; 
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Sample Bar Chart data 
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Job Applications',
      data: [300, 450, 350, 500, 600],
      backgroundColor: 'rgba(75, 192, 192, 0.6)', 
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Jobs Posted',
      data: [200, 300, 250, 400, 500],
      backgroundColor: 'rgba(255, 99, 132, 0.6)', 
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

// Chart.js options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      backgroundColor: '#fff',
      titleColor: '#000',
      bodyColor: '#000',
      borderColor: '#ccc',
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        borderColor: '#e0e0e0', 
      },
    },
    y: {
      grid: {
        borderColor: '#e0e0e0', 
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 5, 
    },
  },
};

const BarChart = () => {
  return (
    <div className="h-72 w-full bg-white p-4 rounded-lg shadow-md">
      <Bar data={data} options={options} />
    </div>
  );
};

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeJobs, setActiveJobs] = useState(0);
  const [inactiveJobs, setInactiveJobs] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: jobsData, error: jobsError } = await supabase.from('jobs').select('*');
        if (jobsError) throw jobsError;
        setJobs(jobsData);

        // Count active and inactive jobs
        const activeCount = jobsData.filter((job) => job.status === 'Active').length;
        const inactiveCount = jobsData.filter((job) => job.status === 'Inactive').length;
        
        setActiveJobs(activeCount);
        setInactiveJobs(inactiveCount);

        const { data: usersData, error: usersError } = await supabase.from('users').select('*');
        if (usersError) throw usersError;
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

  if (loading) return  <div className="text-center text-gray-700">Loading...</div>;

  // Get only the last 5 jobs
  const lastFiveJobs = jobs.slice(-5);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-54 p-6 w-full">
        <div className="flex justify-between mb-8">
          {/* Header & Search bar */}
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-lg text-sm w-64"
            />
            {/* Profile Button */}
            <Link to="/profile">
              <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg">
                <FaUserCircle className="mr-2 text-xl" /> Profile
              </button>
            </Link>
          </div>
        </div>

        {/* Stats & Charts */}
        <div className="flex gap-6 mt-8">
          {/* Stats Section (Left Column) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-2/3">
            {/* Total Jobs */}
            <div className="bg-purple-100 p-4 rounded-lg shadow-md h-32 flex items-center">
              <FaBriefcase className="mr-4 text-3xl text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold">Total Jobs</h2>
                <p className="text-2xl font-bold">{jobs.length}</p>
              </div>
            </div>

            {/* Total Users */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md h-32 flex items-center">
              <FaUsers className="mr-4 text-3xl text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold">Total Users</h2>
                <p className="text-2xl font-bold">{users.length}</p>
              </div>
            </div>

            {/* Active Jobs */}
            <div className="bg-green-100 p-4 rounded-lg shadow-md h-32 flex items-center">
              <FaCheckCircle className="mr-4 text-3xl text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold">Active Jobs</h2>
                <p className="text-2xl font-bold">{activeJobs}</p>
              </div>
            </div>

            {/* Inactive Jobs */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md h-32 flex items-center">
              <FaTimesCircle className="mr-4 text-3xl text-gray-700" />
              <div>
                <h2 className="text-xl font-semibold">Inactive Jobs</h2>
                <p className="text-2xl font-bold">{inactiveJobs}</p>
              </div>
            </div>
          </div>

          {/* Chart Section (Right Column) */}
          <div className="w-1/3">
            <BarChart />
          </div>
        </div>

        {/* Latest Jobs Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Latest Job Listings</h2>
          <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md mt-4">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-6 py-4 font-medium text-left">Job ID</th>
                  <th className="px-6 py-4 font-medium text-left">Job Title</th>
                  <th className="px-6 py-4 font-medium text-left">Company</th>
                  <th className="px-6 py-4 font-medium text-left">Location</th>
                  <th className="px-6 py-4 font-medium text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                {lastFiveJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{job.id}</td>
                    <td className="px-6 py-4">{job.job_title}</td>
                    <td className="px-6 py-4">{job.company_name}</td>
                    <td className="px-6 py-4">{job.location}</td>
                    <td className="px-6 py-4">{job.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
