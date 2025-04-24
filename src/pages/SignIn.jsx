import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../lib/supabase'; 

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(''); 

    if (email === 'muzamiltahliil1@gmail.com' && password === '123456') {
      navigate('/dashboard');
    } else {
      navigate('/UserDashboard');
    }

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (signInError) {
        setError('Invalid login credentials');  
        return;
      }

      if (data) {
        const { data: userData, error: userError } = await supabase
          .from('users')  
          .select('role')
          .eq('email', email)
          .single();

        if (userError) {
          console.error(userError);
          setError('Error fetching user role');
          return;
        }

        if (userData?.role === 'admin') {
          navigate('/dashboard');  
        } else {
          navigate('/UserDashboard');  
        }
      }
    } catch (err) {
      console.error('SignIn Error:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-30 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Sign In</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}  

      <form onSubmit={handleSignIn} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md">
          Sign In
        </button>
      </form>

      <p className="text-center mt-4">
        Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
      </p>
    </div>
  );
};

export default SignInPage;
