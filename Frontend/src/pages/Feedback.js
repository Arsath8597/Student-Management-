import React, { useState } from 'react';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const submitFeedback = () => {
    if (feedback) {
      setFeedbacks([...feedbacks, { text: feedback, date: new Date().toLocaleString() }]);
      setFeedback('');
    }
  };

  return (
    <div className="container mx-auto p-4 w-[80vw]" >
      <h1 className="text-2xl font-bold mb-4 text-center">Submit Feedback</h1>
      <div className="mb-6">
       <div> <label>Name</label>
       <input className='w-full py-4 px-10 rounded-xl border-gray-300' type='text'/></div>
       <div> <label>Email</label>
       <input className='w-full py-4 px-10 rounded-xl border-gray-300' type='text'/></div>
       <div> <label>Phone</label>
       <input className='w-full py-4 px-10 rounded-xl border-gray-300' type='text'/></div>

        <textarea
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="border w-full py-4 px-10 rounded-xl border-gray-300 mt-10"
        ></textarea>
        <button onClick={submitFeedback} className="bg-green-500 px-8 py-4 rounded-2xl text-white p-2 mt-2">Submit Feedback</button>
      </div>
      
     
      <div className='w-full'>
      <h2 className="text-2xl font-bold mb-2 text-center">Submitted Feedback</h2>
       <div className='grid grid-cols-2'>
        <div className='bg-gray-200 font-serif py-10  text-xl w-[300px] flex flex-col justify-center items-center rounded-xl shadow-2xl'>
        <div>
            <h1 className='font-semibold text-center'>Title</h1>
            <p className='text-center'>Bugs and systerm Relative</p>
          </div>
          <br/>
          <div>
            <h1 className='font-semibold'>Submitted Time</h1>
            <p className='text-center'>2024.10.03</p>
          </div>
          <br/>
          <div>
            <h1 className='font-semibold'>Status</h1>
            <p className='text-green-800 text-center'>Pending..</p>
          </div>
          <br/>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-600 text-white px-3 py-1 rounded-lg  mx-8'>Edit</button>
            <button className='bg-red-600 text-white px-3 py-1 rounded-lg  mx-8'>Delete</button>
          </div>

        </div>
        <div className='bg-gray-200 font-serif py-10 text-xl w-[300px] flex flex-col justify-center items-center rounded-xl shadow-2xl'>
        <div>
            <h1 className='font-semibold text-center'>Title</h1>
            <p className='text-center'>Bugs and systerm Relative</p>
          </div>
          <br/>
          <div>
            <h1 className='font-semibold'>Submitted Time</h1>
            <p className='text-center'>2024.10.03</p>
          </div>
          <br/>
          <div>
            <h1 className='font-semibold'>Status</h1>
            <p className='text-green-800 text-center'>Pending..</p>
          </div>
          <br/>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-600 text-white px-3 py-1 rounded-lg  mx-8'>Edit</button>
            <button className='bg-red-600 text-white px-3 py-1 rounded-lg  mx-8'>Delete</button>
          </div>

        </div>
  
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
