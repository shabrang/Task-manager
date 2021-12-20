import React from 'react';
import PropTypes from 'prop-types';
import '../style/task-style.css';
import Button from '@material-ui/core/Button';
import Modal from './Modal';
import CreateTask from './CreateTask';
import TasksList from './TasksList';
import { connect } from 'react-redux';
import { toggleModal } from '../redux/actions/modalAction';

const TaskManager = (props) => {
	PropTypes.TaskManager = {
		toggleModal: () => {},
		open: Boolean,
		tasks: []
	};

	const { toggleModal, open, tasks } = props;

	const changeToggle = () => {
		toggleModal();
	};

	return (
		<div className="task-manager p-5">
			<div className="row header mb-5 w-100">
				<div className="col-md-2">
					<Button variant="contained" color="primary" onClick={changeToggle}>
						{' '}
						+
					</Button>

					<Modal open={open} changeToggle={changeToggle}>
						<CreateTask onCreateTask={(task) => props.onCreateTask(task) } />
					</Modal>
				</div>
				<div className="col-md-10 text-center">
					<h1>Task Manager!</h1>
				</div>
			</div>
			<div className="row task-content ">
				<div className="p-3 border border-secondary rounded">
					{tasks && tasks.length > 0 ? <TasksList tasks={tasks} /> : 'no task yet'}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { open } = state.modalReducer;
	return {
		open
	};
};
const mapDispatchToProps = (dispatch) => ({
	toggleModal: () => dispatch(toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
