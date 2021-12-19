import React from 'react'
import Task from './Task'

const TasksList = (props) => {
    const { tasks } = props
    return ( <>
        {
            tasks.map(task => {
                return ( 
                <Task key = { task.id } task = { task } />
                )
            })
        } </>
    )
}


export default TasksList