import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';

const Home = (props) => {
	const { onChangeToggle } = props;

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

	const changeToggle = () => {
		onChangeToggle();
	};

	return (
		<div className="container m-5 text-center vh-100">
			<h5 className="text">Hello World</h5>
			<div className="h-75 d-flex align-items-center justify-content-center">
				<ColorButton variant="contained" color="primary" onClick={changeToggle}>
					Create Your First Task ;)
				</ColorButton>
			</div>
		</div>
	);
};

export default Home;
