import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

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
