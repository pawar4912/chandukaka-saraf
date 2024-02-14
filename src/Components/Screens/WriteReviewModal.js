import React, { useEffect, useState } from "react";
import {
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
  IconButton,
  DialogActions,
  Grid,
  Tooltip,
} from "@mui/material";
import successCheckIcon from "../../images/icons/successful-checkbox.svg";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CloseIcon from "@mui/icons-material/Close";
import rightArrowIcon from "../../images/icons/right-arrow-white.svg";
import ErrorList from "../Common/ErrorList";
import { addReview } from "../../services/FrontApp/index.service";
import { getLoginUserInfo, isLoggedIn } from "../../services/auth.service";
import { myProfile } from "../../services/profile";
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

export const WriteReviewModal = ({ open, handleClose, productId }) => {
  const [showReviewScreen, setShowReviewScreen] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState([]);
  const [data, SetData] = useState({});
  const [rating, setRating] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const getUserInformation = async () => {
    let result = await myProfile();
    setUserInfo(result.data.data[0]);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      getUserInformation();
      SetData({
        email: userInfo.email,
        name: userInfo.first_name + " " + userInfo.last_name,
      });
    }
  }, []);

  const handleCloseButton = () => {
    if (setShowThankYou) {
    }
    setShowThankYou(false);
    setShowReviewScreen(true);
    handleClose();
  };

  const handleChange = ({ target }) => {
    data[target.name] = target.value;
    const temp = Object.assign({}, data);
    SetData(temp);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async () => {
    setErrors([]);
    try {
      const payload = {
        product_master_id: productId,
        rating: rating,
        description: data.review,
        email: data.email,
        name: data.name,
      };
      console.log(payload);

      // await addReview(payload);
      setShowReviewScreen(false);
      setShowThankYou(true);
      setTimeout(() => {
        handleCloseButton();
      }, 3000);
    } catch (error) {
      setErrors(error.response.data.message);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            sx={Boxstyle}
            style={{ border: "12px solid #ede5e5", width: "40em" }}
          >
            <DialogActions>
              <IconButton aria-label="close" onClick={handleCloseButton}>
                <CloseIcon />
              </IconButton>
            </DialogActions>
            <ErrorList errors={errors} />

            {showReviewScreen && (
              <div className="container phone-number">
                <Typography
                  className="text-center text-bold"
                  id="transition-modal-title"
                  variant="h5"
                  component="h2"
                  style={{ fontWeight: "bolder" }}
                >
                  WRITE A REVIEW
                </Typography>

                <Box
                  className="d-flex mt-3"
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={1} className="w-100">
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="outlined-basic"
                        label="Name"
                        name="name"
                        variant="outlined"
                        sx={{ color: "#fff" }}
                        required
                        fullWidth
                        value={data.name}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        variant="outlined"
                        sx={{ color: "#fff" }}
                        required
                        fullWidth
                        value={data.email}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </Box>

                <div>
                  <div className="mt-2">
                    <span>Ratings</span> <br />
                    {[1, 2, 3, 4, 5].map((starValue) => (
                      <Tooltip title={`${starValue} Star`} key={starValue}>
                        <IconButton
                          color={starValue <= rating ? "primary" : "default"}
                          onClick={() => handleRatingChange(starValue)}
                        >
                          {starValue <= rating ? (
                            <StarIcon />
                          ) : (
                            <StarBorderIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </div>

                  <Box>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <TextField
                          id="outlined-basic"
                          label="Write a review"
                          name="review"
                          multiline
                          rows={4}
                          variant="outlined"
                          sx={{ color: "#fff" }}
                          required
                          fullWidth
                          value={data.first_name}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <div>
                    <Button
                      className="mt-4"
                      style={{ background: "black" }}
                      variant="contained"
                      fullWidth={true}
                      type="submit"
                      onClick={handleSubmit}
                    >
                      SAVE &amp; CONTINUE{" "}
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
                  Your submission has been sent.
                </Typography>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
