import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import TasksList from './TasksList';
import Header from './Header';

import { setFilterDoneTasks } from '../redux/actions/taskAction';

const useStyles = makeStyles((theme) => ({
	addButtom: {
		width: '65px',
		height: '65px',
		border: '1px solid black',
		position: 'absolute',
		right: '55px',
		bottom: '50px',
		backgroundColor: 'red',
		borderRadius: '100%',
		'&:hover': {
			backgroundColor: '#a71010'
		}
	},
	allTaskButtom: {
		width: '160px',
		border: '1px solid black',
		position: 'absolute',
		top: '52px',
		left: '35px',
		backgroundColor: 'green',
		'&:hover': {
			backgroundColor: 'green'
		}
	},
	doneTaskButtom: {
		width: '160px',
		border: '1px solid black',
		position: 'absolute',
		top: '52px',
		left: '35px'
	}
}));
const TaskManager = (props) => {
	const { tasks, onChangeToggle, setFilterDoneTasks, filterDoneTasks } = props;
	const [ filter, setFilter ] = useState(false);

	useEffect(
		() => {
			if (filter) {
				setFilterDoneTasks();
			}
		},
		[ filter ]
	);

	const changeToggleModal = () => {
		onChangeToggle();
	};

	const toggleFilter = () => {
		setFilter(!filter);
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

	const classes = useStyles();
	return (
		<div className="task-manager p-5">
			<div className="row header mb-5 w-100">
				<Header />
			</div>
			<div className="row task-content ">
				<div className="p-3 border border-secondary rounded h-100 overflow-auto">
					<TasksList
						tasks={filter ? filterDoneTasks : tasks}
						filter={filter}
						onEditTask={(id, task) => {
							onEditTask(id, task);
						}}
						onDeleteTask={(id) => onDeleteTask(id)}
						onChangeStatusTask={(id) => onChangeStatusTask(id)}
					/>
				</div>

				<Button variant="contained" color="primary" className={classes.addButtom} onClick={changeToggleModal}>
					<Icon color="secondary" fontSize="medium" style={{ color: 'white' }}>
						add
					</Icon>
				</Button>
				<Button
					variant="contained"
					color="primary"
					className={filter ? classes.allTaskButtom : classes.doneTaskButtom}
					onClick={toggleFilter}
				>
					{filter ? 'View All Tasks' : 'View Done Task'}
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { filterDoneTasks } = state.taskReducer;
	return {
		filterDoneTasks
	};
};

const mapDispatchToProps = (dispatch) => ({
	setFilterDoneTasks: () => dispatch(setFilterDoneTasks())
});

TaskManager.propTypes = {
	tasks: PropTypes.array,
	onChangeToggle: PropTypes.func,
	setFilterDoneTasks: PropTypes.func,
	onEditTask: PropTypes.func,
	onDeleteTask: PropTypes.func,
	onChangeStatusTask: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
