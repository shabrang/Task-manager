import React from 'react';
import Task from './Task';

const TasksList = (props) => {
	const { tasks, filter } = props;

	return (
		<div className="task-list">
			{tasks.length > 0 ? (
				tasks.map((task) => {
					return (
						(!filter ? task.status === 'started' : true) && (
							<Task key={task.id} task={task} filter={filter} />
						)
					);
				})
			) : (
				<div className="text-center w-100">
					<span className="badge badge-primary text-dark">There is no Task here.</span>
				</div>
			)}
		</div>
	);
};

export default TasksList;
