import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createTask, editTask, clearTaskItem } from './redux/actions/taskAction';
import TaskManager from './components/TaskManager';
import Home from './components/Home';
import { toggleModal } from './redux/actions/modalAction';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';

function App(props) {
	const { tasks, createTask, toggleModal, open, editTask, clearTaskItem } = props;

	useEffect(
		() => {
			if (!open) {
				clearTaskItem();
			}
		},
		[ tasks, open ]
	);

	const onCreateTask = (task) => {
		createTask(task);
	};

	const onChangeToggle = () => {
		toggleModal();
	};

	const onEditTask = (id, task) => {
		editTask(id, task);
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
				<TaskForm onCreateTask={(task) => onCreateTask(task)} onEditTask={(id, task) => onEditTask(id, task)} />
			</Modal>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	createTask: (task) => dispatch(createTask(task)),
	toggleModal: () => dispatch(toggleModal()),
	editTask: (id, params) => dispatch(editTask(id, params)),
	clearTaskItem: () => dispatch(clearTaskItem())
});

const mapStateToProps = (state) => {
	const { tasks } = state.taskReducer;
	const { open } = state.modalReducer;
	return {
		tasks,
		open
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
