import React, { useState } from "react";
import productBannerImage from "../../../images/banners/desktop/3.jpg";
import productImage from "../../../images/products/3.jpg";
import { Box, Chip, Divider, Grid, ListItem, Stack } from "@mui/material";

export const ProductCatalogues = () => {
    const [chipData, setChipData] = useState([
        { key: 0, label: "ALL", selected: false },
        { key: 1, label: "DIAMOND RINGS", selected: false },
        { key: 2, label: "GOLD RINGS", selected: false },
        { key: 3, label: "SILVER RINGS", selected: false },
    ]);

    const handleChipDelete = (chipToDelete) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        );
    };

    return (
        <div className="product-catalogues">
            <div className="product-catalogue-banner">
                <img src={productBannerImage} alt="banner image" />
            </div>

            <div className="container">
                <div className="filter-chips">
                    <Stack direction="row" spacing={1}>
                        {chipData.map((chip) => (
                            <Chip
                                key={chip.key}
                                label={chip.label}
                                onDelete={handleChipDelete(chip)}
                                sx={{
                                    borderRadius: "0px",
                                    border: "1px solid #000",
                                    borderColor: "#000",
                                    color: chip.selected ? "#fff" : "#000",
                                    backgroundColor: chip.selected ? "#000" : "#fff",
                                }}
                                clickable
                                onClick={() => {
                                    setChipData((chips) =>
                                        chips.map((c) =>
                                            c.key === chip.key ? { ...c, selected: !c.selected } : c
                                        )
                                    );
                                }}
                            />
                        ))}
                    </Stack>
                </div>

                <Box>
                    <Grid container spacing={1}>
                        <Grid item className="product-item-card">
                            <img
                                src={productImage}
                                alt="product image"
                                className="image"
                            />
                            <div className="text">
                                <hr />
                                <p>Product category name</p>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};
