import {
  Box,
  FormControl,
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React, { useState, useEffect } from "react";

export const AddressForm = ({ handleCloseForm, addressData = null }) => {
  const countries = ["India", "Indonasia", "Iran", "Irac"];
  const cities = ["Baramati", "Pune", "Nasik", "Nagpur", "Thane"];

  const [country, setCountry] = useState(addressData?.country ?? countries[0]);
  const [city, setCity] = useState(addressData?.city ?? cities[0]);
  const [firstName, setFirstName] = useState(addressData?.firstName ?? "");
  const [lastName, setLastName] = useState(addressData?.lastName ?? "");
  const [address1, setAddress1] = useState(addressData?.address1 ?? "");
  const [address2, setAddress2] = useState(addressData?.address2 ?? "");
  const [pinCode, setPinCode] = useState(addressData?.pinCode ?? "");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "country":
        setCountry(value);
        break;
      case "city":
        setCity(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "address1":
        setAddress1(value);
        break;
      case "address2":
        setAddress2(value);
        break;
      case "address1":
        setAddress1(value);
        break;
      case "pinCode":
        setPinCode(value);
        break;
      default:
        break;
    }
  };

  const handleCancel = () => {
    setCountry(countries[0]);
    setCity(cities[0]);
    setFirstName("");
    setLastName("");
    setAddress1("");
    setAddress2("");
    setPinCode("");
    handleCloseForm();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseForm();
  };

  return (
    <div className="d-flex">
      <div className="address-form-container p-3">
        <h5>ADDRESS BOOK</h5>

        <Box className="address-form-wrapper p-3 my-4 bg-white">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="input-first-name"
                  label="First Name"
                  variant="outlined"
                  required
                  fullWidth
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="input-last-name"
                  label="Last Name"
                  variant="outlined"
                  required
                  fullWidth
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="input-address1"
                  label="Flat no, Building name"
                  variant="outlined"
                  required
                  fullWidth
                  name="address1"
                  value={address1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="input-address2"
                  label="Street name, Landmark"
                  variant="outlined"
                  required
                  fullWidth
                  name="address2"
                  value={address2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="select-country">Country</InputLabel>
                  <Select
                    labelId="select-country"
                    id="country-dropdown"
                    label="Country"
                    required
                    name="country"
                    value={country}
                    onChange={handleChange}
                  >
                    {countries.map((d) => (
                      <MenuItem key={d} value={d}>
                        {d}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <FormControl fullWidth>
                  <InputLabel id="select-city">City</InputLabel>
                  <Select
                    labelId="select-city"
                    id="city-dropdown"
                    label="City"
                    required
                    name="city"
                    value={city}
                    onChange={handleChange}
                  >
                    {cities.map((d) => (
                      <MenuItem key={d} value={d}>
                        {d}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={4}>
                <TextField
                  id="input-pincode"
                  label="Pincode"
                  variant="outlined"
                  required
                  fullWidth
                  name="pinCode"
                  value={pinCode}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel id="address-type-radio-buttons-group-label">
                    Address Type
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="address-type-radio-buttons-group-label"
                    defaultValue="home"
                    name="radio-buttons-group"
                    className="radio-group"
                  >
                    <FormControlLabel
                      value="home"
                      className="radio-label"
                      control={<Radio />}
                      label="Home"
                    />

                    <FormControlLabel
                      value="office"
                      className="radio-label"
                      control={<Radio />}
                      label="Office"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={6} md={6}>
                <Button
                  onClick={handleCancel}
                  variant="outlined"
                  className="outlined-black"
                  fullWidth
                >
                  CANCEL &nbsp;
                  <EastIcon />
                </Button>
              </Grid>

              <Grid item xs={6} md={6}>
                <Button className="btn btn-block bg-black p-3" fullWidth type="submit">
                  ADD ADDRESS &nbsp;
                  <EastIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </div>
  );
};
