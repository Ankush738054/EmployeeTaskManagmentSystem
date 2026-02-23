import React from 'react'

const TaskListnumber = ({data}) => {
    console.log(data)
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-red-400'>
            <h2 className='text-3xl'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
            <h2 className='text-3xl'>{data.taskNumbers.active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-green-400'>
            <h2 className='text-3xl'>{data.taskNumbers.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] py-6 px-9 rounded-xl bg-gray-400'>
            <h2 className='text-3xl'>{data.taskNumbers.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListnumber
