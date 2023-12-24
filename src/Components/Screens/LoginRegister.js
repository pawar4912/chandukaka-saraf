import * as React from "react";
import successCheckIcon from "../../images/icons/successful-checkbox.svg";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Dialog,
  DialogActions,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import rightArrowIcon from "../../images/icons/right-arrow-white.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LoginRegister = ({ open, handleClose }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("Props", open, handleClose);
  }, []);

  const [showPhoneNumberScreen, setshowPhoneNumberScreen] = useState(true);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [otpValues, setOtpValues] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  });

  const handleChange = (value, event) => {
    setOtpValues({ ...otpValues, [value]: event.target.value });
  };

  const handleCloseButton = () => {
    setShowOtpScreen(false);
    setShowThankYou(false);
    handleClose();
  }

  const handleOtpSubmit = (event) => {
    const data = new FormData(event.target);
    console.log(otpValues);
    setshowPhoneNumberScreen(false);
    setShowOtpScreen(false);
    setShowThankYou(true);
    event.preventDefault();
  };

  const inputFocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 4) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  ////////////////
  const handlePhoneNumberSubmit = () => {
    // Add your logic to validate and submit the phone number
    // For simplicity, let's assume the phone number is valid
    setshowPhoneNumberScreen(false);
    setShowOtpScreen(true);
  };

  const handleThankYouClose = () => {
    setOpen(false);
  };

  const countrycode = [
    {
      value: "ind",
      label: "+91",
    },
    {
      value: "EUR",
      label: "+21",
    },
  ];

  return (
    <div>
      {/* <Button onClick={open}>Login Register</Button>
      <Button><Link to="/myorder"> My Order </Link></Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        // slotProps={{
        //   backdrop: {
        //     timeout: 500,
        //   },
        // }}
      >
        <Fade in={open}>
          <Box
            sx={Boxstyle}
            style={{ border: "12px solid #ede5e5", width: "30em" }}
          >
            <DialogActions>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </DialogActions>

            {(showPhoneNumberScreen) && (
              <div className="container phone-number">
                <Typography
                  className="text-center text-bold"
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  LOGIN/REGISTER
                </Typography>

                <Box
                  className="d-flex mt-3"
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Country Code*"
                    defaultValue="ind"
                  >
                    {countrycode.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="outlined-number"
                    label="Mobile Number*"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>

                <div>
                  <FormGroup className="mt-2">
                    <div className="d-flex">
                      <div>
                        {" "}
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                        />
                      </div>
                      <div>
                        {" "}
                        <small>
                          "I have read and accepted the{" "}
                          <Link to="/" style={{ color: " #c07b7b" }}>
                            terms and conditions
                          </Link>{" "}
                          and{" "}
                          <Link style={{ color: " #c07b7b" }} to="/">
                            privacy and policy
                          </Link>{" "}
                        </small>
                      </div>
                    </div>
                  </FormGroup>

                  {/*button  start */}
                  <div>
                    <Button
                      className="mt-4"
                      style={{ background: "black" }}
                      variant="contained"
                      fullWidth={true}
                      type="submit"
                      onClick={handlePhoneNumberSubmit}
                    >
                      CONTINUE{" "}
                      <img
                        className="ms-2"
                        src={rightArrowIcon}
                        alt="rightArrowIcon"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            { showOtpScreen  &&  (
              <div className="container otp-input-container">
                <Typography
                  className="text-center text-bold"
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  VERIFY MOBILE OTP
                </Typography>
                <small>
                  Enter 4 digit verification code received on your mobile
                  number.
                </small>

                <Container maxWidth="sm">
                  <form onSubmit={handleOtpSubmit}>
                    <div className="mt-2 otpContainer">
                      {[1, 2, 3, 4].map((index) => (
                        <input
                          key={index}
                          name={`otp${index}`}
                          type="text"
                          autoComplete="off"
                          className="otpInput"
                          value={otpValues[`otp${index}`]}
                          onChange={(e) => handleChange(`otp${index}`, e)}
                          tabIndex={index}
                          maxLength="1"
                          onKeyUp={(e) => inputFocus(e)}
                        />
                      ))}
                    </div>
                    <Button
                      className="primary mt-4 bg-black"
                      style={{ background: "black" }}
                      variant="contained"
                      fullWidth={true}
                      type="submit"
                    >
                      VERIFY
                    </Button>
                  </form>
                </Container>

                <FormGroup className="mt-2">
                  <div className="d-flex justify-content-end">
                    <a href="/">RESEND OTP</a>
                  </div>
                </FormGroup>
              </div>
            )}

            {showThankYou && (
              <div className="container">
                <div className="d-flex justify-content-center">
                  <img src={successCheckIcon} alt="successful icon" />
                </div>

                <Typography
                  className="text-center text-bold mt-3"
                  id="transition-modal-title"
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: "36px",
                    letterSpacing: "5.4px",
                    fontWeight: "bolder",
                    textTransform: "uppercase",
                  }}
                >
                  THANK YOU!
                </Typography>

                <Typography
                  className="text-center mt-1 mb-5"
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  Code successfully verified
                </Typography>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default LoginRegister;
