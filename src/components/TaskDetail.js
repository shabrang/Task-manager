import Button from '@material-ui/core/Button';
import { orange, red, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

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
	const { task } = props;

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
				<Button variant="contained" color="primary" className={classes.editButton} Click={console.log()}>
					Edit Task
				</Button>
				<Button variant="contained" color="primary" className={classes.doneButton} onClick={console.log()}>
					Done Task
				</Button>
				<Button variant="contained" color="primary" className={classes.deleteButtom} onClick={console.log()}>
					Delete Task
				</Button>
			</div>
		</div>
	);
};

export default TaskDetail;
