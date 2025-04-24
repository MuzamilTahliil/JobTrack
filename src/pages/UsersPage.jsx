import React, { useEffect, useState } from 'react';
import supabase from '../lib/supabase'; 
import Sidebar from '../components/Sidebar'; 

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetching users from Supabase
  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('id, first_name, last_name, email, phone, image, role'); 

      if (error) {
        console.error('Error fetching users:', error);
      } else {
        setUsers(data); 
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return  <div className="text-center text-gray-700">Loading...</div>;
  if (!users.length) return <div>No users found</div>; 
  return (
    <div className="flex">
        {/* Sidebar */}
      <Sidebar />

{/* Main Content */}
<div className="ml-54 p-6 w-full">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Users</h1>

        {/* Users Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2 text-left">First Name</th>
                <th className="px-4 py-2 text-left">Last Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Image</th>
              </tr>
            </thead>
            <tbody className="bg-gray-50">
              {users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-100">
                  <td className="px-4 py-2 text-sm text-gray-800">{user.first_name}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{user.last_name}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{user.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{user.phone}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">{user.role}</td>
                  <td className="px-4 py-2 text-sm text-gray-800">
                    <img src={user.image || 'default-image.jpg'} alt="User" className="w-12 h-12 rounded-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  );
};

export default UsersPage;
