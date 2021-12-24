import React, { useState } from 'react';
import Task from './Task';
import Modal from './Modal';
import TaskDetail from './TaskDetail';
import { toggleShowDetail } from '../redux/actions/modalAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TasksList = (props) => {
	const { tasks, filter, showDetail, toggleShowDetail } = props;
	const [ task, setTask ] = useState({});

	const showDetailTask = (task) => {
		setTask(task);
		toggleShowDetail();
	};

	const toggle = () => {
		toggleShowDetail(!showDetail);
	};

	const onEditTask = (id, task) => {
		props.onEditTask(id, task);
	};

	const onDeleteTask = (id) => {
		props.onDeleteTask(id);
	};

	const onChangeStatusTask = (id) => {
		props.onChangeStatusTask(id);
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
			<Modal open={showDetail} changeToggle={toggle}>
				<TaskDetail
					task={task}
					onEditTask={(id, task) => onEditTask(id, task)}
					onDeleteTask={(id) => onDeleteTask(id)}
					onChangeStatusTask={(id) => onChangeStatusTask(id)}
				/>
			</Modal>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { showDetail } = state.modalReducer;
	return {
		showDetail
	};
};

const mapDispatchToProps = (dispatch) => ({
	toggleShowDetail: () => dispatch(toggleShowDetail())
});

TasksList.prototype = {
	tasks: PropTypes.array,
	filter: PropTypes.bool,
	showDetail: PropTypes.bool,
	toggleShowDetail: PropTypes.func,
	onEditTask: PropTypes.func,
	onDeleteTask: PropTypes.func,
	onChangeStatusTask: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
