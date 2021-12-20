import React from 'react';
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
export default ModalTask;
