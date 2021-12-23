import React from 'react';
import Task from './Task';

const TasksList = (props) => {
	const { tasks, filter } = props;

	return (
		<div className="task-list">
			{tasks.map((task) => {
				return (!filter ? task.status === 'started' : true) && <Task key={task.id} task={task} filter={filter}/>;
			})}
		</div>
	);
};

export default TasksList;
