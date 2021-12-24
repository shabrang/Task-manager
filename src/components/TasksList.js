import React, { useState } from 'react';
import Task from './Task';
import Modal from './Modal';
import TaskDetail from './TaskDetail';

const TasksList = (props) => {
	const { tasks, filter } = props;
	const [ showDetail, setShowDetail ] = useState(false);
	const [ task, setTask ] = useState({});

	const showDetailTask = (task) => {
		setTask(task);
		setShowDetail(true);
	};

	const toggleShowDetail = () => {
		setShowDetail(!showDetail);
	};

	return (
		<div className="task-list">
			{tasks.length > 0 ? (
				tasks.map((task) => {
					return (
						(!filter ? task.status === 'started' : true) && (
							<Task
								key={task.id}
								task={task}
								filter={filter}
								showDetailTask={(task) => showDetailTask(task)}
							/>
						)
					);
				})
			) : (
				<div className="text-center w-100 mt-3">
					<span className="d-block p-3 badge bg-danger border rounded">No task has been done yet. :(</span>
				</div>
			)}
			<Modal open={showDetail} changeToggle={toggleShowDetail}>
				<TaskDetail task={task} />
			</Modal>
		</div>
	);
};

export default TasksList;
