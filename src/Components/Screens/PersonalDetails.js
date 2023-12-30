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
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export const PersonalDetails = () => {

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
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
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const [title, setTitle] = useState("mrs");
  const [gender, setGender] = useState("female");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(1);
  const [month, setMonth] = useState(months[0]);
  const [year, setYear] = useState(currentYear - 20);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let postData = {
      title: title.trim(),
      gender: gender.trim(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      date: date,
      month: month,
      year: year,
    };

    console.log("form values", postData);
  };

  return (
    <div className="d-flex">
      <Sidebar></Sidebar>

      <div className="personal-details-container p-3">
        <h5>PERSONAL DETAILS</h5>

        <div className="personal-details-form p-3">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="select-title">Title</InputLabel>
                  <Select
                    labelId="select-title"
                    id="title-dropdown"
                    label="Title"
                    value={"mrs"}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  name="firstName"
                  variant="outlined"
                  sx={{ color: "#000" }}
                  required
                  fullWidth
                  value={firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  required
                  fullWidth
                  value={lastName}
                  onChange={handleChange}
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
                  value={email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="select-date">Day</InputLabel>
                  <Select
                    value={date}
                    labelId="select-date"
                    id="day-dropdown"
                    label="Day"
                    required
                    onChange={handleDateChange}
                  >
                    {days.map((d) => (
                      <MenuItem key={d} value={d}>
                        {d}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="select-month">Month</InputLabel>
                  <Select
                    labelId="select-month"
                    id="months-dropdown"
                    label="Month"
                    required
                    value={month}
                    onChange={handleMonthChange}
                  >
                    {months.map((m, index) => (
                      <MenuItem key={index} value={m}>
                        {m}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="select-year">Year</InputLabel>
                  <Select
                    labelId="select-year"
                    id="year-dropdown"
                    label="Year"
                    required
                    value={year}
                    onChange={handleYearChange}
                  >
                    {years.map((y) => (
                      <MenuItem key={y} value={y}>
                        {y}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  className="btn btn-block bg-black btn-submit"
                  fullWidth
                  variant="contained"
                  type="submit"
                >
                  SAVE CHANGES &nbsp;
                  <EastIcon />
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};
