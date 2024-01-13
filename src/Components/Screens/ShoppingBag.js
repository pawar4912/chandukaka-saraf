import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import { Badge, List, ListItem, ListItemText, Typography, IconButton } from "@mui/material";
import shoppingBagLogo from "../../images/icons/shopping-bag.svg";
import CloseIcon from "@mui/icons-material/Close";


const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: "30vw !important", // Customizable width
  height: "100%", // Full-screen height
  border: "2px solid red",
  "& .MuiDrawer-paper": {
    width: "30vw !important", // Customizable width
    height: "100%", // Full-screen height
    border: "2px solid green",
  },
}));

export const ShoppingBag = ({ open, handleDrawer }) => {
  //   const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("In toggle");
    handleDrawer();
  };

  return (
    <div>
      <StyledDrawer
        anchor="right"
        className="MuiDrawer.paper"
        open={open}
        onClose={toggleDrawer}
      >
        <div className="shopping-bag-header d-flex justify-content-between p-3">
          <Badge badgeContent={4} color="primary">
            <img src={shoppingBagLogo} />
          </Badge>

          <Typography variant="h4" color="initial">
            YOUR SHOPPING BAG
          </Typography>

          <IconButton aria-label="close" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>

        <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Drawer Item 1" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Drawer Item 2" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </StyledDrawer>
    </div>
  );
};
