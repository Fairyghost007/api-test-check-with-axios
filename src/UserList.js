import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error("Error fetching the user list:", error);
      });
  }, []);

  return (
    <div className="p-8 font-sans bg-darkPurple min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white mb-8">User List</h1>
      
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="text-left p-4 bg-palePurple text-white font-medium">Name</th>
              <th className="text-left p-4 bg-palePurple text-white font-medium">Email</th>
              <th className="text-left p-4 bg-palePurple text-white font-medium">Username</th>
            </tr>
          </thead>
          <tbody>
            {listOfUser.map(user => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-4 text-gray-700">{user.name}</td>
                <td className="p-4 text-gray-700">{user.email}</td>
                <td className="p-4 text-gray-700">{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
