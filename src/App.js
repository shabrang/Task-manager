import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTasks, createTask } from './redux/actions/taskAction';
import TaskManager from './components/TaskManager';
import Home from './components/Home';
import { toggleModal } from './redux/actions/modalAction';
import Modal from './components/Modal';
import CreateTask from './components/CreateTask';

function App(props) {
	const { tasks, createTask, toggleModal, open, getTasks, filterDoneTasks } = props;

	const onCreateTask = (task) => {
		createTask(task);
	};

	// useEffect(
	// 	() => {
	// 		getTasks();
	// 	},
	// 	[ filterDoneTasks ]
	// );

	const onChangeToggle = () => {
		toggleModal();
	};

	return (
		<div>
			{tasks && tasks.length > 0 ? (
				<TaskManager
					tasks={tasks}
					onCreateTask={(task) => onCreateTask(task)}
					onChangeToggle={onChangeToggle}
					open={open}
				/>
			) : (
				<Home onChangeToggle={onChangeToggle} open={open} />
			)};
			<Modal open={open} changeToggle={onChangeToggle}>
				<CreateTask onCreateTask={(task) => onCreateTask(task)} />
			</Modal>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	getTasks: () => dispatch(getTasks()),
	createTask: (task) => dispatch(createTask(task)),
	toggleModal: () => dispatch(toggleModal())
});

const mapStateToProps = (state) => {
	const { tasks, filterDoneTasks } = state.taskReducer;
	const { open } = state.modalReducer;
	return {
		tasks,
		open,
		filterDoneTasks
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
