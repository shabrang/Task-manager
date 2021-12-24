import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeStatusTask, getTask } from '../redux/actions/taskAction';
import { toggleModal } from '../redux/actions/modalAction';

const Task = (props) => {
	const { task, changeStatusTask, filter, toggleModal, getTask } = props;

	const handleStatusTask = () => {
		changeStatusTask(task.id);
	};

	const handleEditTask = () => {
		getTask(task.id);
		toggleModal();
	};

	return (
		<div id={`task_item_${task.id}`} className="m-3">
			<div className="row">
				{filter && <h5 className="text-center text-secondary mb-5">Done Tasks !</h5>}
				<div className="border border-secondary rounded p-3">
					<div className="d-flex justify-content-between align-items-center  mb-3">
						<span className="font-weight-bold"> {task.title} </span>
						<div className="priority-task d-flex align-items-center">
							<span className={'priority-title float right'}>{task.priority} </span>
							<div
								className={`badge-priority ${task.priority === 'low'
									? 'bg-success'
									: task.priority === 'high' ? 'bg-danger' : 'bg-warning'}`}
							/>
						</div>
					</div>{' '}
					<div className="d-flex justify-content-between align-items-center">
						<small className="text-secondary text-small"> {task.description} </small>
						{!filter && (
							<div>
								<Button variant="contained" color="primary" className="mx-2" onClick={handleStatusTask}>
									{' '}
									Done Task{' '}
								</Button>
								<Button variant="contained" color="primary" onClick={handleEditTask}>
									Edit Task{' '}
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	changeStatusTask: (id) => dispatch(changeStatusTask(id)),
	toggleModal: () => dispatch(toggleModal()),
	getTask: (id) => dispatch(getTask(id))
});

export default connect(null, mapDispatchToProps)(Task);
