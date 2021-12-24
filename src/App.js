import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createTask, editTask, clearTaskItem, deleteTask, changeStatusTask } from './redux/actions/taskAction';
import TaskManager from './components/TaskManager';
import Home from './components/Home';
import { toggleModal, toggleShowDetail } from './redux/actions/modalAction';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import './style/task-style.css';
import PropTypes from 'prop-types';

function App(props) {
	const {
		tasks,
		open,
		createTask,
		toggleModal,
		editTask,
		clearTaskItem,
		toggleShowDetail,
		deleteTask,
		changeStatusTask
	} = props;

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

	const onDeleteTask = (id) => {
		deleteTask(id);
		toggleShowDetail();
	};

	const onChangeStatusTask = (id) => {
		changeStatusTask(id);
		toggleShowDetail();
	};
	return (
		<div>
			{tasks && tasks.length > 0 ? (
				<TaskManager
					tasks={tasks}
					onCreateTask={(task) => onCreateTask(task)}
					onChangeToggle={onChangeToggle}
					open={open}
					onEditTask={(id, task) => onEditTask(id, task)}
					onDeleteTask={(id) => onDeleteTask(id)}
					onChangeStatusTask={(id) => onChangeStatusTask(id)}
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
	toggleShowDetail: () => dispatch(toggleShowDetail()),
	editTask: (id, params) => dispatch(editTask(id, params)),
	deleteTask: (id) => dispatch(deleteTask(id)),
	changeStatusTask: (id) => dispatch(changeStatusTask(id)),
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

App.prototype = {
	tasks: PropTypes.array,
	open: PropTypes.bool,
	toggleModal: PropTypes.func,
	createTask: PropTypes.func,
	editTask: PropTypes.func,
	clearTaskItem: PropTypes.func,
	changeStatusTask: PropTypes.func,
	toggleShowDetail: PropTypes.func,
	deleteTask: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
