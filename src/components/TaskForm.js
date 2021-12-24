import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { TextareaAutosize } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { toggleModal } from '../redux/actions/modalAction';
import { connect } from 'react-redux';
import { orange } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const ColorButton = withStyles((theme) => ({
	root: {
		color: theme.palette.getContrastText(orange[500]),
		backgroundColor: orange[500],
		border: '1px solid black',
		borderRadius: '8px',
		'&:hover': {
			backgroundColor: orange[700]
		}
	}
}))(Button);
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100%'
		}
	},
	icon: {
		borderRadius: '50%',
		width: 16,
		height: 16,
		boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundColor: '#f5f8fa',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'$root.Mui-focusVisible &': {
			outline: '2px auto rgba(19,124,189,.6)',
			outlineOffset: 2
		},
		'input:hover ~ &': {
			backgroundColor: '#ebf1f5'
		},
		'input:disabled ~ &': {
			boxShadow: 'none',
			background: 'rgba(206,217,224,.5)'
		}
	},
	checkedIcon: {
		backgroundColor: '#137cbd',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&:before': {
			display: 'block',
			width: 16,
			height: 16,
			backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
			content: '""'
		},
		'input:hover ~ &': {
			backgroundColor: '#106ba3'
		}
	}
}));

const TaskForm = (props) => {
	const classes = useStyles();
	const [ task, setTask ] = useState({});

	const { onCreateTask, toggleModal, taskItem, onEditTask } = props;

	const handleChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value
		});
	};

	const addOrUpdateTask = () => {
		if (Object.keys(taskItem).length > 0) {
			onEditTask(taskItem.id, task);
		} else {
			onCreateTask(task);
		}

		toggleModal();
	};

	return (
		<div className="task-item">
			<div className="row">
				<form className={classes.root}>
					<TextField
						name="title"
						id="standard-basic"
						label="Task Title"
						defaultValue={taskItem.title}
						variant="outlined"
						size="small"
						onChange={handleChange}
					/>
					<TextareaAutosize
						name="description"
						aria-label="Task Description"
						minRows={3}
						defaultValue={taskItem.description}
						placeholder="Task Description"
						onChange={handleChange}
					/>
					<TextField
						name="gift"
						id="outlined-basic"
						label="Gift and KPI for this task !"
						variant="outlined"
						defaultValue={taskItem.gift}
						size="small"
						onChange={handleChange}
					/>
					<FormControl component="fieldset" size="small" fullWidth>
						<RadioGroup
							defaultValue={taskItem.priority}
							aria-label="gender"
							name="priority"
							onChange={handleChange}
						>
							<FormControlLabel value="low" control={<Radio />} label="Low" />
							<FormControlLabel value="medium" control={<Radio />} label="Medium" />
							<FormControlLabel value="high" control={<Radio />} label="High" />
						</RadioGroup>
					</FormControl>
					<ColorButton variant="contained" color="primary" onClick={(e) => addOrUpdateTask(e)}>
						{Object.keys(taskItem).length > 0 ? 'Update Task' : 'Create Task'}
					</ColorButton>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	const { taskItem } = state.taskReducer;
	return {
		taskItem
	};
};
const mapDispatchToProps = (dispatch) => ({
	toggleModal: () => dispatch(toggleModal())
});

TaskForm.propTypes = {
	taskItem: PropTypes.object,
	toggleModal: PropTypes.func,
	onCreateTask: PropTypes.func,
	onEditTask: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
