import React from 'react'
import Header from '../Others/Header'
import TaskListnumber from '../Others/TaskListnumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-screen'>
       <Header changeUser={props.changeUser} data={props.data} />
       <TaskListnumber data={props.data}/>
       <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
