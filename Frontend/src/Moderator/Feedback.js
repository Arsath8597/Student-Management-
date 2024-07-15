import React, { useContext, useEffect, useState } from "react";
import SideBar from './SideBar'
import Header from "./Header";
import { FaEdit, FaTrashAlt, FaPlus } from 'react-icons/fa';

function Dashboard() {
 
  const feedbackData = [
    { id: 1, user: 'John Doe', message: 'Great service!', status: 'finished' },
    { id: 2, user: 'Jane Smith', message: 'I need help with my order.', status: 'pending' },
    { id: 2, user: 'Jane Smith', message: 'I need help with my order.', status: 'pending' },
    { id: 2, user: 'Jane Smith', message: 'I need help with my order.', status: 'pending' },
    { id: 3, user: 'Mike Johnson', message: 'Thanks for the quick response.', status: 'finished' },
    { id: 3, user: 'Mike Johnson', message: 'Thanks for the quick response.', status: 'finished' },
    { id: 4, user: 'Anna Lee', message: 'How can I track my shipment?', status: 'pending' },
    { id: 4, user: 'Anna Lee', message: 'How can I track my shipment?', status: 'pending' },
  ];

  const pendingFeedback = feedbackData.filter(feedback => feedback.status === 'pending');
  const finishedFeedback = feedbackData.filter(feedback => feedback.status === 'finished');
  return (
    <div>
        <Header/>
    <div className="flex">
    <SideBar/>
      <div className=" ">
      <div className="container mx-auto p-4 font-serif">
      <h1 className="text-2xl font-semibold mb-4">User Feedback</h1>
      <div className="grid   gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-center">Pending Feedback</h2>
          <div className="bg-white shadow-md grid grid-cols-2 w-[80vw] text-lg rounded p-4">
            {pendingFeedback.length === 0 ? (
              <p>No pending feedback.</p>
            ) : (
              pendingFeedback.map(feedback => (
                <div key={feedback.id} className="border-b border-gray-200 py-2">
                  <p><strong>{feedback.user}</strong></p>
                  <p>{feedback.message}</p>
                  <button className="text-center px-3 rounded-lg my-3 bg-gray-400 py-2 text-white">response</button>
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-center mb-2 mt-4">Finished Feedback</h2>
          <div className="bg-white shadow-md rounded my-4 p-4">
            {finishedFeedback.length === 0 ? (
              <p>No finished feedback.</p>
            ) : (
              finishedFeedback.map(feedback => (
                <div key={feedback.id} className="border-b my-7 border-gray-200 py-2">
                  <p><strong>{feedback.user}</strong></p>
                  <p>{feedback.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
       
      </div>
    </div></div>
  );
}

export default Dashboard;
