import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../style/task-style.css'
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import CreateTask from './CreateTask'
import TasksList from './TasksList';

const TaskManager = (props) => {
    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open)
    }

    const {tasks} = props
    return (
        <div className="task-manager p-5">
            <div className="row header mb-5 w-100">
                <div className="col-md-2">
                    <Button variant="contained" color="primary" onClick={toggleModal}> +</Button>
                    
                        <Modal open={open}>
                            <CreateTask onCreateTask={props.onCreateTask}/>
                        </Modal>
                   
                </div>
                <div className="col-md-10 text-center">
                    <h1>Task Manager!</h1>

                </div>

            </div>
            <div className="row task-content ">
                <div className="p-3 border border-secondary rounded">
                    {
                        tasks && tasks.length>0 ?
                        <TasksList tasks={tasks}/> :
                        'no task yet'
                    }
                
                </div>

            </div>

        </div>
    )
}

export default TaskManager
