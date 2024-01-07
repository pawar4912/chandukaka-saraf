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
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      firstName: "Sharvari",
      lastName: "Gupta",
      address1: "193 B wing, Mukund complex",
      address2: "Near GB road",
      city: "Thane",
      country: "India",
      pinCode: 411233,
    },
    {
      id: 2,
      firstName: "Swapnil",
      lastName: "Pawar",
      address1: "193 B wing, Mukund complex",
      address2: "Near GB road",
      city: "Baramati",
      country: "India",
      pinCode: 413102,
    },
  ]);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressData, setAddressData] = useState(null);

  const handleOpenForm = () => {
    setShowAddressForm(true);
  };

  const handleCloseForm = () => {
    setAddressData(null);
    setShowAddressForm(false);
  };

  const handleEditClick = (address) => {
    setAddressData({ ...address });
    handleOpenForm();
  };

  const handleRemoveClick = (address) => {
    let index = addresses.findIndex((a) => a.id == address.id);
    setAddresses(addresses.splice(index, 1));
  };

  return (
    <div className="d-flex col-12">
      <div className="col-0 col-md-5 col-lg-4">
        <Sidebar />
      </div>

      <div className="address-book-container p-3 col-12 col-md-7 col-lg-8">
        {!showAddressForm ? (
          <div className="col-12 col-md-10 col-lg-8">
            <h5>ADDRESS BOOK</h5>

            <div className="new-address-btn-wrapper p-3 my-4 bg-white">
              <Button
                className="btn btn-block bg-black btn-submit col-12 col-md-10 col-lg-6"
                variant="contained"
                type="submit"
                onClick={handleOpenForm}
              >
                ADD NEW ADDRESS &nbsp;
                <EastIcon />
              </Button>
            </div>
            <div className="saved-address-cards-container p-3 bg-white">
              <h5>SAVED ADDRESS</h5>

              <div className="cards-container">
                {addresses.map((address) => (
                  <Card
                    key={address.id}
                    sx={{ minWidth: 100 }}
                    variant="outlined"
                    className="mt-3 p-2"
                  >
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {address.firstName + " " + address.lastName}
                      </Typography>

                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {address.address1},
                      </Typography>

                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {address.address2},
                      </Typography>

                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {address.city},
                      </Typography>

                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {address.country},
                      </Typography>

                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {address.pinCode}.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        className="outlined-black"
                        onClick={() => handleEditClick(address)}
                      >
                        EDIT &nbsp;
                        <EastIcon />
                      </Button>

                      <Button
                        variant="outlined"
                        className="outlined-black"
                        onClick={() => handleRemoveClick(address)}
                      >
                        REMOVE &nbsp;
                        <EastIcon />
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <AddressForm
            handleCloseForm={handleCloseForm}
            addressData={addressData}
          />
        )}
      </div>
    </div>
  );
};
