import React from 'react';
import { connect } from 'react-redux';
import { createTask } from './redux/actions/taskAction';
import TaskManager from './components/TaskManager';
function App(props) {
	const { tasks, createTask } = props;

	const onCreateTask = (task) => {
		createTask(task);
	};

	return <TaskManager tasks={tasks} onCreateTask={(task) => onCreateTask(task)} />;
}

const mapDispatchToProps = (dispatch) => ({
	createTask: (task) => dispatch(createTask(task))
});

const mapStateToProps = (state) => {
	const { tasks } = state.taskReducer;
	return {
		tasks
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
