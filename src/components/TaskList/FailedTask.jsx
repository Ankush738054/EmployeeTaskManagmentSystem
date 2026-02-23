import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='h-[98%] shrink-0 w-[300px] p-5 bg-gray-400 rounded-2xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-4'>{data.taskDescription}</p>
            <div className='mt-2 '>
                <button className='w-full bg-amber-400'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
