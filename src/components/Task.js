import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { orange, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { changeStatusTask, getTask } from '../redux/actions/taskAction';
import { toggleModal } from '../redux/actions/modalAction';

const useStyles = makeStyles((theme) => ({
	editButton: {
		color: theme.palette.getContrastText(orange[500]),
		backgroundColor: orange[500],
		border: '1px solid black',
		borderRadius: '5px',
		'&:hover': {
			backgroundColor: orange[700]
		}
	},
	doneButton: {
		color: theme.palette.getContrastText(green[500]),
		backgroundColor: green[500],
		border: '1px solid black',
		borderRadius: '5px',
		'&:hover': {
			backgroundColor: green[700]
		}
	}
}));

const Task = (props) => {
	const classes = useStyles();
	const { task, changeStatusTask, filter, toggleModal, getTask } = props;

	const handleStatusTask = () => {
		changeStatusTask(task.id);
	};

	const handleEditTask = () => {
		getTask(task.id);
		toggleModal();
	};

	const showDetailTask = () => {
		props.showDetailTask(task);
	};

	const renderTextMore = (text) => {
		if (text.length > 30) {
			return `${text.slice(0, 30)} . . .`;
		}
		return text;
	};

	return (
		<div id={`task_item_${task.id}`} className="m-3">
			<div className="row">
				{filter && <h5 className="text-center text-secondary mb-5">Done Tasks !</h5>}
				<div className="border border-secondary rounded p-3">
					<div className="d-flex justify-content-between align-items-center  mb-3">
						<span className="task-title font-weight-bold" onClick={!filter ? showDetailTask : null}>
							{' '}
							{task.title}{' '}
						</span>
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
						<small className="text-secondary text-small">{renderTextMore(task.description)}</small>
						{!filter && (
							<div className="d-flex">
								<Button
									variant="contained"
									color="primary"
									size="small"
									className={`${classes.doneButton} mx-2`}
									onClick={handleStatusTask}
								>
									{' '}
									Done Task{' '}
								</Button>
								<Button
									variant="contained"
									color="primary"
									size="small"
									className={classes.editButton}
									onClick={handleEditTask}
								>
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

Task.propTypes = {
	task: PropTypes.object,
	filter: PropTypes.bool,
	toggleModal: PropTypes.func,
	getTask: PropTypes.func,
	changeStatusTask: PropTypes.func,
	showDetailTask: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Task);
