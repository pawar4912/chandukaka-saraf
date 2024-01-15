import React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

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
    <div className="navigation-dropdown-wrapper p-4">
      <div className="jewellery-links">
        {navigations.jewelleryTypes.map((jewelleryType) => {
          return (
            <div className="catergory-section" key={jewelleryType}>
              <Typography
                variant="h5"
                color="initial"
                className="jewellwery-type mb-4"
              >
                {jewelleryType}
              </Typography>
              <div className="jewelleries">
                {navigations.jwewlleries.map((jewellery) => {
                  return <div className="" key={jewellery}>{jewellery}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bestsellers-section">
        <Card>
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
        </Card>
      </div>
    </div>
  );
};
