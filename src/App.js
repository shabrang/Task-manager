import React from 'react';
import TaskManager from './components/TaskManager';
import { connect } from 'react-redux';
import { createTask } from './redux/actions/taskAction';

function App(props) {
	const { tasks } = props;
	console.log(tasks);

	const onCreateTask = ({ title, description, gift, priority }) => {
		props.dispatch(createTask({ title, description, gift, priority }));
	};

	return <TaskManager tasks={tasks} onCreateTask={onCreateTask} />;
}

const mapStateToProps = (state) => {
	return {
		tasks: state.tasks 
	};
};
export default connect(mapStateToProps)(App);
