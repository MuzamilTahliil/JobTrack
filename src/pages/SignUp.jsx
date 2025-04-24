import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import supabase from '../lib/supabase';  

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle Sign-Up functionality
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');  
    if (!password) {
      setError('Password is required.');
      return;
    }

    try {
      const { user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,  
      });

      if (signUpError) {
        setError(signUpError.message);  
        return;
      }

      const { data, error: insertError } = await supabase
        .from('users')
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            password: password,  
            role: 'user',  
          },
        ]);

      if (insertError) {
        setError(insertError.message);  
        return;
      }

      navigate('/signin');
    } catch (err) {
      setError('An unexpected error occurred. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-orange-500 mb-4">Join Us</h2>

      {error && <p className="text-red-500 text-center">{error}</p>}  {/* Display error message */}

      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

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
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          Sign Up
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account? <a href="/signin" className="text-blue-500">Sign In</a>
      </p>
    </div>
  );
}

export default SignUp;
