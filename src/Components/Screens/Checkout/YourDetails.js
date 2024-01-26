import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

export const YourDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="your-details-wrapper">
      <Box className="your-details-box my-3">
        <Typography variant="body1" color="initial">
          Already a member? <Link>LOGIN/REGISTER</Link> or continue as a
          guest
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="First Name"
                name="first_name"
                variant="outlined"
                sx={{ color: "#fff" }}
                required
                fullWidth
              // value={data.first_name}
              // onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                name="last_name"
                variant="outlined"
                required
                fullWidth
              // value={data.last_name}
              // onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                required
                fullWidth
              // value={data.email}
              // onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                name="mobileNumber"
                variant="outlined"
                required
                fullWidth
              // value={data.email}
              // onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                className="btn btn-block bg-black btn-submit"
                fullWidth
                variant="contained"
                onClick={() => navigate("/order/check-out/delivery")}
              >
                CONTINUE TO DELIVERY &nbsp;
                <EastIcon />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

    </div>
  );
};
