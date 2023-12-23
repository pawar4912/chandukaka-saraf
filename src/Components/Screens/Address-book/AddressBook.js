import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { AddressForm } from "./AddressForm";

export const AddressBook = () => {
  const addresses = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "india",
    city: "Baramati",
  };

  const [addressFormTemplate, setAddressFormTemplate] = useState(false);

  const handleButtonClick = () => {
    setAddressFormTemplate(!addressFormTemplate);
  };

  return (
    <div className="d-flex">
      <Sidebar></Sidebar>
      {!addressFormTemplate ? (
        <div className="address-book-container p-3">
          <h5>ADDRESS BOOK</h5>

          <div className="new-address-btn-wrapper p-3 my-4 bg-white">
            <Button
              className="btn btn-block bg-black btn-submit"
              fullWidth
              variant="contained"
              type="submit"
              onClick={handleButtonClick}
            >
              ADD NEW ADDRESS &nbsp;
              <EastIcon />
            </Button>
          </div>
          <div className="saved-address-cards-container p-3 bg-white">
            <h6>SAVED ADDRESS</h6>

            <Card sx={{ minWidth: 100 }} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Sharvari Gupta
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Word of the Day
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined">
                  EDIT &nbsp;
                  <EastIcon />
                </Button>

                <Button variant="outlined">
                  REMOVE &nbsp;
                  <EastIcon />
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      ) : (
        <AddressForm />
      )}
    </div>
  );
};
