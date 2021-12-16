import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../style/task-style.css'
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import TaskDetail from './TaskDetail'


const TaskManager = props => {
    const [tasks, setTasks] = useState([])
    const [open, setOpen] = React.useState(false);

    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <div className="task-manager m-5">
            <div className="row header mb-5">
                <div className="col-md-2">
                    <Button variant="contained" color="primary" onClick={toggleModal}> +</Button>
                    
                        <Modal open={open}>
                            <TaskDetail/>
                          

                        </Modal>
                   
                </div>
                <div className="col-md-10 text-center">
                    <h1>Task Manager!</h1>

                </div>

            </div>
            <div className="row task-content ">
                <div className="p-3 border border-secondary rounded">
                    no task yet !

                </div>

            </div>

        </div>
    )
}

export default TaskManager
