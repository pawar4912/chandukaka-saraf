import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ConfirmationDialog = ({ onConfirm, openStatus }) => {
  const [open, setOpen] = useState(openStatus);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYesClick = () => {
    // Handle the 'Yes' button click action here
    console.log('User clicked Yes!');
    onConfirm(true); // Pass 'true' to the callback indicating 'Yes'
    handleClose();
  };

  const handleNoClick = () => {
    // Handle the 'No' button click action here
    console.log('User clicked No!');
    onConfirm(false); // Pass 'false' to the callback indicating 'No'
    handleClose();
  };

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Confirmation Dialog
      </Button> */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleYesClick} color="primary">
            Yes
          </Button>
          <Button onClick={handleNoClick} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationDialog;
