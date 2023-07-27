import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArgonButton from 'components/ArgonButton';
import { editTask } from 'helpers/tasks/editTask'; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {removeTask} = editTask()

  const handleRemoveTask = () => {
            removeTask()
            handleClose()
  }


  return (
    <div>
      <ArgonButton variant="text" color="error" onClick={handleOpen}>Delete</ArgonButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            ¿Estás seguro de eliminar esta tarea?
          </Typography>
          <ArgonButton variant="text" color="success" sx={{fontSize: '2rem'}} onClick={handleRemoveTask} >Si</ArgonButton>
          <ArgonButton variant="text" color="error" sx={{fontSize: '2rem'}} onClick={handleClose}>No</ArgonButton>
    
        </Box>
      </Modal>
    </div>
  );
}