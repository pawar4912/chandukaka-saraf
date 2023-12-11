import * as React from "react";
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
} from "@mui/material";
import rightArrowIcon from "../../images/icons/right-arrow-white.svg";
import { Link } from "react-router-dom";

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

const LoginRegister = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Button onClick={handleOpen}>Login Register</Button>
      <Button><Link to="/myorder"> My Order </Link></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={Boxstyle}
            style={{ border: "12px solid #ede5e5", width: "30em" }}
          >
            <Typography
              className="text-center text-bold"
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              LOGIN/REGISTER
            </Typography>
            {/* Country Code and Mobile Number Start  */}
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

            {/*checkbox start  */}
            <FormGroup className="mt-2">
              <div className="d-flex">
                <div>
                  {" "}
                  <FormControlLabel control={<Checkbox defaultChecked />} />
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
              >
                CONTINUE{" "}
                <img
                  className="ms-2"
                  src={rightArrowIcon}
                  alt="rightArrowIcon"
                />
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default LoginRegister;
