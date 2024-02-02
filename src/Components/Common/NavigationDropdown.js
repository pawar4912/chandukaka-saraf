import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const NavigationDropdown = () => {
  const navigations = {
    jewelleryTypes: ["Gold", "Diamonds", "Silver"],
    jwewlleries: [
      "Rings",
      "Mangalsutra",
      "Earrings",
      "Chain",
      "Pendants",
      "Necklace",
      "Bangles",
      "Toe rings",
      "Nosepins",
      "Anklet",
      "Bracelets",
    ],
  };
  return (
    <Box>
        <Grid>
            <div className="navigation-dropdown-wrapper p-4">
              <div className="jewellery-links">
                {navigations.jewelleryTypes.map((jewelleryType) => {
                  return (
                    <div className="catergory-section" key={jewelleryType}>
                      <h5
                        variant="h5"
                        color="initial"
                        className="jewellwery-type mb-4"
                      >
                        {jewelleryType}
                      </h5>
                      <div className="jewelleries">
                        {navigations.jwewlleries.map((jewellery) => (
                          <div className=""  key={jewellery}>
                            <Link className="jewellery-link" to="#" onClick={() => {console.log("Jai shree ram")}}>
                              {jewellery}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
              {/* <div className="bestsellers-section">
                <div>
                  <img
                    src="https://source.unsplash.com/random/300x300?jewellery=1"
                    alt=""
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                  <CardContent className="overlay-text">
                    <Typography variant="h5" component="div">
                      Meet our bestsellers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      SHOP NOW
                    </Typography>
                  </CardContent>
                </div>
              </div> */}
            </div>
        </Grid>
    </Box>
  );
};
