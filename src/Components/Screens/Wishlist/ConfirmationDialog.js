import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider, Grid } from "@mui/material";
import productImage from "../../../images/productImage.png";

const ConfirmationDialog = ({ onConfirm, open, handleClose }) => {
  const handleYesClick = () => {
    // Todo: Handle remove from the wishlist logic here
    onConfirm(true);
    handleClose();
  };

  const handleNoClick = () => {
    console.log("User clicked No!");
    onConfirm(false);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove the following product from the
            wishlist?
          </DialogContentText>

          <Divider variant="fullWidth" />
          <Grid container className="p-3">
            <Grid item xs={3}>
              <img
                src={productImage}
                style={{ height: "81px", width: "81px" }}
                alt=""
              />
            </Grid>

            <Grid item xs={9}>
              Typeogra
            </Grid>
          </Grid>
          <Divider variant="fullWidth" />
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
