import React from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

const ModalTask = (props) => {
	const { open, changeToggle, children } = props;
	return (
		<Modal
			open={open}
			onClose={changeToggle}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			{children}
		</Modal>
	);
};

ModalTask.propTypes = {
	open: PropTypes.bool,
	changeToggle: PropTypes.func
};

export default ModalTask;
