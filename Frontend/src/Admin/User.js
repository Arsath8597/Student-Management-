import React, { useContext, useEffect, useState } from "react";
import SideBar from './SideBar'
import Header from "./Header";
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';

function Dashboard() {
 
    const users = [
        { id: 1, name: 'John Doe', email: 'john@gmail.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
        { id: 3, name: 'Mike Johnson', email: 'mike@gmail.com' },
      ];
  return (
    <div>
        <Header/>
    <div className="flex">
    <SideBar/>
      <div className=" ">
      <div className="container font-serif mx-auto p-4 w-[80vw] ">
      <h1 className="text-2xl font-semibold mb-4">User Management</h1>
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white text-2xl py-2 px-4 rounded inline-flex items-center">
          <FaPlus className="mr-2" /> Add User
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-4 text-xl  border-b border-gray-300">Name</th>
            <th className="py-4 text-xl  border-b border-gray-300">Email</th>
            <th className="py-4 text-xl  border-b border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-6 text-xl  px-8 border-b border-gray-300">{user.name}</td>
              <td className="py-6 text-xl  px-8 border-b border-gray-300">{user.email}</td>
              <td className="py-6 text-xl  px-8 border-b border-gray-300">
                <button className="bg-yellow-500 text-white py-3 rounded-lg px-2 rounded mr-2 inline-flex items-center">
                  <FaEdit className="mr-1" /> Edit
                </button>
                <button className="bg-red-500 ml-10 text-white py-3 rounded-lg px-2 rounded inline-flex items-center">
                  <FaTrashAlt className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
       
       
      </div>
    </div></div>
  );
}

export default Dashboard;
