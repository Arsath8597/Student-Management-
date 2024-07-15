import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    userID: '',
    productID: '',
    storeID: '',
    title: '',
    saleDate: '',
    description: '',
    stockSold: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/sales/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Sale added successfully:', result);
        // Reset the form
        setFormData({
          userID: '',
          productID: '',
          storeID: '',
          title: '',
          saleDate: '',
          description: '',
          stockSold: '',
        });
      } else {
        console.error('Failed to add sale:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='relative w-[80vw] bg font-serif p-4'>
      {open && (
        <div className='fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-opacity-30 bg-black'>
          <form onSubmit={handleSubmit} className='w-[500px] px-10 py-10 bg-slate-200 rounded-2xl shadow-2xl'>
            <h1 className='text-center text-2xl font-semibold'>Set Schedule</h1>
            <div>
              <label className='block mb-2'>Title</label>
              <input 
                name='title'
                value={formData.title}
                onChange={handleChange}
                className='w-full py-3 rounded-2xl mt-2'
                type='text'
              />
            </div>
            <div>
              <label className='block mb-2'>Description</label>
              <input 
                name='description'
                value={formData.description}
                onChange={handleChange}
                className='w-full py-3 rounded-2xl mt-2'
                type='text'
              />
            </div>
            <div>
              <label className='block mb-2'>Date</label>
              <input 
                name='saleDate'
                value={formData.saleDate}
                onChange={handleChange}
                className='w-full py-3 rounded-2xl mt-2'
                type='date'
              />
            </div>
            <div className='flex justify-between'>
              <button type='button' onClick={handleClick} className='px-4 py-3 bg-red-500 text-white rounded-xl text-xl mt-4'>
                Close
              </button>
              <button type='submit' className='px-4 py-3 bg-green-600 text-white rounded-xl text-xl mt-4'>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      <div className='w-full'>
        <h1 className='text-3xl font-semibold w-full text-center'>Upcoming Group Study And Time Tables</h1>
        <div className='flex justify-end px-10'>
          <p className='text-2xl mx-3 mt-2 cursor-pointer' onClick={handleClick}>Create Schedule</p>
          <button onClick={handleClick} className='bg-green-300 mb-2 px-4 py-2 text-white rounded-xl'>
            <FaPlus size={30} />
          </button>
        </div>
      </div>
      <div className='h-1 bg-black w-full mb-3'></div>
      <div className='bg-gray-200 w-72 h-60 shadow-2xl p-2 flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-semibold my-1'>Chemistry Subject</h1>
        <p>It's all about chemistry subject</p>
        <p>2024.10.20</p>
        <button className='px-5 mt-2 py-3 bg-yellow-100 rounded-xl text-xl'>Join</button>
      </div>
    </div>
  );
};

export default Schedule;
