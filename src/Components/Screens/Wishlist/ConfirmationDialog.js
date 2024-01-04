import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Divider, Fade, Grid, Typography, IconButton } from "@mui/material";
import productImage from "../../../images/productImage.png";
import CloseIcon from "@mui/icons-material/Close";

const ConfirmationDialog = ({ onConfirm, open, handleClose }) => {
  const Boxstyle = {
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
    <Dialog
      open={open}
      onClose={handleClose}
      style={{ border: "12px solid #ede5e5" }}
    >
      <DialogActions>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <DialogContentText
          className="text-center p-3"
          sx={{ fontSize: "18px", color: "#666666" }}
        >
          Are you sure you want to remove the following product from the
          wishlist?
        </DialogContentText>

        <Divider variant="fullWidth" />
        <Grid container className="container p-4" sx={{ width: "80%" }}>
          <Grid item xs={3}>
            <img src={productImage} style={{ height: "81px", width: "81px" }} />
          </Grid>

          <Grid
            item
            xs={9}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                color: "#333333",
                fontWeight: "900",
                letterSpacing: "1.2px",
              }}
            >
              Product name
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#333333",
                fontWeight: "700",
                letterSpacing: "1.2px",
              }}
            >
              &#8377; 1200.00
            </Typography>
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
  );
};

export default ConfirmationDialog;
