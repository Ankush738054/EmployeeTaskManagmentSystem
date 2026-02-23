import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(Authcontext)

    return (
        <div id='AllTask' className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div className='bg-red-500 mb-2 py-2 px-4 items-center flex justify-center rounded'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed Task</h5>
                <h5 className='w-1/5'>Failed Task</h5>
            </div>
            
            {userData.map(function (elem, idx) {
                return <div key={idx} className='mb-2 border-2 border-green-400 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium'>{elem.firstname}</h2>
                <h3 className='w-1/5 text-lg font-medium'>{elem.taskNumbers.newTask}</h3>
                <h5 className='w-1/5 text-lg font-medium'>{elem.taskNumbers.active}</h5>
                <h5 className='w-1/5 text-lg font-medium'>{elem.taskNumbers.completed}</h5>
                <h5 className='w-1/5 text-lg font-medium'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
        </div>
    )
}

export default AllTask
