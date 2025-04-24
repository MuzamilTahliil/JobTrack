import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';  
import AddJobForm from './pages/AddNewJob';  
import Jobs from './pages/Jobs';
import ManageJobs from './pages/ManageJobs';
import EditJob from './pages/EditJob';
import UsersPage from './pages/UsersPage';
import Home from './pages/Home';
import About from './pages/AboutPage';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { AuthProvider } from './context/AuthContext';
import UserDashboard from './pages/UserDashboard';
import UserAbout from './pages/UserAbout';
import UserContact from './pages/UserContact';
import AllJobs from './pages/AllJobs';
import JobDetails from './components/JobDetails';


function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/about" element={<About/>} /> 
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/signup" element={<SignUp/>} /> 
      <Route path="/signin" element={<SignIn/>} /> 



      <Route path="/UserDashboard" element={<UserDashboard/>} /> 
      <Route path="/UserAbout" element={<UserAbout/>} /> 
      <Route path="/UserContact" element={<UserContact/>} /> 
      <Route path="/AllJobs" element={<AllJobs/>} /> 
      <Route path="/job-details/:jobId" element={<JobDetails />} />


      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/add-job" element={<AddJobForm />} /> 
      <Route path="/jobs" element={<Jobs/>} /> 
      <Route path="/Manage-jobs" element={<ManageJobs/>} /> 
      <Route path="/edit-job/:id" element={<EditJob />} /> 
      <Route path="/users" element={<UsersPage/>} />
  
    </Routes>
    </AuthProvider>
  );
}

export default App;
