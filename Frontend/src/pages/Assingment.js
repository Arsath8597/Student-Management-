import React from 'react'

const Assingment = () => {
  return (
    <div className='w-[80vw] font-serif'>

      <div>
        <h1 className='text-3xl font-semibold text-center mb-4'>Assignment Submition Page</h1>
        <div className='w-full bg-slate-200 p-2 rounded-xl shadow-xl mb-5'>
            <h1 className='text-xl font-serif '>Unit 01 Programing</h1>
            <h1 className='text-center text-2xl font-semibold'>Assignment</h1>
            <div className='grid grid-cols-2 '>
            <div className='my-10 text-xl'>
                <p>Deadline</p>
                <p className='text-red-600'>31/10/2024</p>

            </div>
            <div className='my-10'>
                <p>Submit Time</p>
                <p>31/102024</p>
            </div>
            <div>
                <p>Status</p>
                <p className='text-green-700'>ontime Submit</p>
            </div>
            <div>
                <p>Submit Assignment</p>
                {/* <input type='file'/> */}
            </div>
            </div>
        </div>
        <div className='w-full bg-slate-200 p-2 rounded-xl shadow-xl mb-5'>
            <h1 className='text-xl font-serif '>Unit 01 Programing</h1>
            <h1 className='text-center text-2xl font-semibold'>Assignment</h1>
            <div className='grid grid-cols-2 '>
            <div className='my-10 text-xl'>
                <p>Deadline</p>
                <p className='text-red-600'>31/10/2024</p>

            </div>
            <div className='my-10'>
                <p>Submit Time</p>
                <p>31/102024</p>
            </div>
            <div>
                <p>Status</p>
                <p className='text-red-600'>Not Submit</p>
            </div>
            <div>
                <p>Submit Assignment</p>
                <input type='file'/>
            </div>
            </div>
        </div>
        <div className='w-full bg-slate-200 p-2 rounded-xl shadow-xl mb-5'>
            <h1 className='text-xl font-serif '>Unit 01 Programing</h1>
            <h1 className='text-center text-2xl font-semibold'>Assignment</h1>
            <div className='grid grid-cols-2 '>
            <div className='my-10 text-xl'>
                <p>Deadline</p>
                <p className='text-red-600'>31/10/2024</p>

            </div>
            <div className='my-10'>
                <p>Submit Time</p>
                <p>31/102024</p>
            </div>
            <div>
                <p>Status</p>
                <p className='text-red-600'>Late Submit</p>
            </div>
            <div>
                <p>Submit Assignment</p>
                {/* <input type='file'/> */}
            </div>
            </div>
        </div>
        <div className='w-full bg-slate-200 p-2 rounded-xl shadow-xl mb-5'>
            <h1 className='text-xl font-serif '>Unit 01 Programing</h1>
            <h1 className='text-center text-2xl font-semibold'>Assignment</h1>
            <div className='grid grid-cols-2 '>
            <div className='my-10 text-xl'>
                <p>Deadline</p>
                <p className='text-red-600'>31/10/2024</p>

            </div>
            <div className='my-10'>
                <p>Submit Time</p>
                <p>31/102024</p>
            </div>
            <div>
                <p>Status</p>
                <p className='text-red-600'>Late Submit</p>
            </div>
            <div>
                <p>Submit Assignment</p>
                <input type='file'/>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Assingment
