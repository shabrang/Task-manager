import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../style/task-style.css';
import Button from '@material-ui/core/Button';
import TasksList from './TasksList';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { setFilterDoneTasks } from '../redux/actions/taskAction';
import { connect } from 'react-redux';

const TaskManager = (props) => {
	const { tasks, onChangeToggle, setFilterDoneTasks, filterDoneTasks } = props;
	const [ filter, setFilter ] = useState(false);
	PropTypes.TaskManager = {
		toggleModal: () => {},
		open: Boolean,
		tasks: []
	};

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

	const classes = useStyles();
	return (
		<div className="task-manager p-5">
			<div className="row header mb-5 w-100">
				<Header />
			</div>
			<div className="row task-content ">
				<div className="p-3 border border-secondary rounded h-100 overflow-auto">
					<TasksList tasks={filter ? filterDoneTasks : tasks} filter={filter} />
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
export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
