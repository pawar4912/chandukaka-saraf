import React, { useState } from "react";
import Sidebar from "../Common/Sidebar";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
  TextField,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export const PersonalDetails = () => {
  const [date, setDate] = useState(1);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const customTheme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <div className="d-flex">
        <Sidebar></Sidebar>

        <div className="personal-details-container p-3">
          <h5>PERSONAL DETAILS</h5>

          <div className="personal-details-form p-3">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="select-title">Title</InputLabel>
                    <Select
                      labelId="select-title"
                      id="title-dropdown"
                      label="Title"
                      value={"mrs"}
                      // onChange={handleChange}
                    >
                      <MenuItem value="mrs">Mrs</MenuItem>
                      <MenuItem value="mr">Mr</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl
                    fullWidth
                    sx={{
                      border: "none",
                      outline: "none",
                    }}
                  >
                    <InputLabel id="select-gender">Gender</InputLabel>
                    <Select
                      labelId="select-gender"
                      id="gender-dropdown"
                      label="Gender"
                      value={"female"}
                      sx={{
                        border: "none",
                        outline: "none",
                      }}
                      // onChange={handleChange}
                    >
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="male">Male</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="date-label">Date</InputLabel>
                    <Select
                      labelId="date-label"
                      id="date-dropdown"
                      value={date}
                      onChange={handleDateChange}
                      variant="outlined"
                      required
                    >
                      {[...Array(31).keys()].map((day) => (
                        <MenuItem key={day + 1} value={day + 1}>
                          {day + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel>Month</InputLabel>
                    <Select value={month} required onChange={handleMonthChange}>
                      {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                      ].map((m, index) => (
                        <MenuItem key={index + 1} value={index + 1}>
                          {m}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel>Year</InputLabel>
                    <Select value={year} onChange={handleYearChange}>
                      {[...Array(100).keys()].map((yr) => (
                        <MenuItem key={yr + 1920} value={yr + 1920}>
                          {yr + 1920}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    className="btn btn-block bg-black"
                    fullWidth
                    variant="contained"
                  >
                    SAVE CHANGES
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};
