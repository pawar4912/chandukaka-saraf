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
} from "@mui/material";
import { Button } from "bootstrap";
import React, { useState } from "react";

export const AddressForm = ({ addressData }) => {
  const countries = ["India", "Indonasia", "Iran", "Irac"];
  const cities = ["Baramati", "Pune", "Nasik", "Nagpur"];

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <div className="d-flex">
      <div className="address-form-container p-3">
        <h5>ADDRESS BOOK</h5>

        <Box className="address-form-wrapper p-3 my-4 bg-white">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="input-first-name"
                label="First Name"
                variant="outlined"
                required
                fullWidth
                // onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="input-last-name"
                label="Last Name"
                variant="outlined"
                required
                fullWidth
                // onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="input-address1"
                label="Flat no, Building name"
                variant="outlined"
                required
                fullWidth
                // onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="input-address2"
                label="Street name, Landmark"
                variant="outlined"
                required
                fullWidth
                // onChange={handleChange}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="select-country">Country</InputLabel>
                <Select
                  value={country}
                  labelId="select-country"
                  id="country-dropdown"
                  label="Country"
                  required
                  // onChange={handleChange}
                >
                  {countries.map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="select-city">Country</InputLabel>
                <Select
                  value={city}
                  labelId="select-city"
                  id="city-dropdown"
                  label="City"
                  required
                  // onChange={handleChange}
                >
                  {cities.map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <TextField
                id="input-pincode"
                label="Pincode"
                variant="outlined"
                required
                fullWidth
                // onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sx={{border: '1px solid red'}}>
              <FormControl sx={{width: '100%'}}>
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
                    control={<Radio />}
                    label="Home"
                  />

                  <FormControlLabel
                    value="office"
                    control={<Radio />}
                    label="Office"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
<Button>
  CANCEL &nbsp;
  ICon
</Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
