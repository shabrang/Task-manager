import React from 'react';
import Button from '@material-ui/core/Button';

const Task = (props) => {
	const { task } = props;
	return (
		<div id={`task_item_${task.id}`} className="m-3">
			<div className="row">
				<div className="border border-secondary rounded p-3">
					<div className="d-flex justify-content-between align-items-center mb-3">
						<span className="font-weight-bold"> {task.title} </span>
						<div className="priority-task">
							<span className="priority-title float right"> {task.priority} </span>
							<div className="badge-priority" />
						</div>
					</div>{' '}
					<div className="d-flex justify-content-between align-items-center">
						<small className="text-secondary text-small"> {task.description} </small>
						<div>
							<Button variant="contained" color="primary" className="mx-2">
								{' '}
								Done Task{' '}
							</Button>
							<Button variant="contained" color="primary">
								Edit Task{' '}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Task;
