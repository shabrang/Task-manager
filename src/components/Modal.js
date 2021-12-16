import React from 'react';
import Modal from '@material-ui/core/Modal';


const  ModalTask = (props)  =>{
 
 
  const [open, setOpen] = React.useState(props.open);

  const changeToggle = () => {
    setOpen(!open);
  };


  return (
      <Modal
        open={props.open}
        onClose={changeToggle}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {props.children}
      </Modal>
  );
}
export default ModalTask;