import React, { useContext, useEffect, useState } from "react";
import SideBar from './SideBar'
import Header from "./Header";
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';

function Dashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  };

  const handleDownload = () => {
    const data = new Blob([JSON.stringify(user, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user-profile.json';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleView = () => {
    alert(`Name: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}\nAddress: ${user.address}`);
  };

  return (
    <div>
        <Header/>
    <div className="flex">
    <SideBar/>
      <div className=" w-[70vw]">
        <h1 className="text-3xl font-semibold text-center mt-3 ">Student Assignment Submition </h1>
        <div className="w-full   ">
      <div className="w-full shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h1 className="text-2xl font-bold">Proggraming</h1>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="px-6 text-xl font-serif py-4">
            <p>Status: <span className="text-green-500">One Time Submition</span></p>
            <p>Module:Proggraming </p>
            <p>Date: 202.02.10</p>
            <p>Marks: Pending</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleView}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                View
              </button>
              <button
                onClick={handleDownload}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h1 className="text-2xl font-bold">Application Development</h1>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="px-6 text-xl font-serif py-4">
            <p>Status: <span className="text-red-600">Late Submition</span></p>
            <p>Module:Proggraming </p>
            <p>Date: 202.02.10</p>
            <p>Marks: Release</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleView}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                View
              </button>
              <button
                onClick={handleDownload}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <h1 className="text-2xl font-bold">Softwere Development Practice</h1>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              {isExpanded ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="px-6 text-xl font-serif py-4">
            <p>Status: <span className="text-red-600">Late Submition</span></p>
            <p>Module:Proggraming </p>
            <p>Date: 202.02.10</p>
            <p>Marks: Pending</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={handleView}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                View
              </button>
              <button
                onClick={handleDownload}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </div></div>
    </div></div>
  );
}

export default Dashboard;
