import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { orange, red, green } from '@material-ui/core/colors';
import { getTask } from '../redux/actions/taskAction';
import { toggleModal, toggleShowDetail } from '../redux/actions/modalAction';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '100%'
		}
	},
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
	},
	deleteButtom: {
		color: theme.palette.getContrastText(red[500]),
		backgroundColor: red[500],
		border: '1px solid black',
		borderRadius: '5px',
		'&:hover': {
			backgroundColor: red[700]
		}
	}
}));

const TaskDetail = (props) => {
	const classes = useStyles();
	const { task, toggleModal, getTask, toggleShowDetail } = props;

	const handleEditTask = () => {
		getTask(task.id);
		toggleShowDetail();
		toggleModal();
	};

	const onDeleteTask = () => {
		props.onDeleteTask(task.id);
	};

	const onChangeStatusTask = () => {
		props.onChangeStatusTask(task.id);
	};

	return (
		<div className="task-detail row">
			<div className="row">
				<h4 className="font-weight-bold text-center"> {task.title} </h4>
			</div>
			<div className="d-flex justify-content-between align-items-center  mb-3">
				<div className="priority-task d-flex align-items-center">
					<span className={'priority-title float right'}>{task.priority} </span>
					<div
						className={`badge-priority ${task.priority === 'low'
							? 'bg-success'
							: task.priority === 'high' ? 'bg-danger' : 'bg-warning'}`}
					/>
				</div>
			</div>
			<div className="description row text-left px-5 py-2 mx-2 mb-3">
				<p>{task.description}</p>
			</div>
			<div className={`d-flex ${classes.root}`}>
				<Button variant="contained" color="primary" className={classes.editButton} Click={handleEditTask}>
					Edit Task
				</Button>
				<Button variant="contained" color="primary" className={classes.doneButton} onClick={onChangeStatusTask}>
					Done Task
				</Button>
				<Button variant="contained" color="primary" className={classes.deleteButtom} onClick={onDeleteTask}>
					Delete Task
				</Button>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	toggleModal: () => dispatch(toggleModal()),
	getTask: (id) => dispatch(getTask(id)),
	toggleShowDetail: () => dispatch(toggleShowDetail())
});

TaskDetail.propTypes = {
	tasks: PropTypes.array,
	toggleModal: PropTypes.func,
	getTask: PropTypes.func,
	toggleShowDetail: PropTypes.func,
	onDeleteTask: PropTypes.func,
	onChangeStatusTask: PropTypes.func
};

export default connect(null, mapDispatchToProps)(TaskDetail);
