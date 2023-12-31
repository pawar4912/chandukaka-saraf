import React from 'react'
import productDashBoardImage from "../../images/productDashBoardImage.png";
import { Box, Button, Checkbox, Chip, Divider, Grid, ListItemText, MenuItem, OutlinedInput, Pagination, Select, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import fillWhiteLeftIcon from '../../images/icons/fillWhiteLeftIcon.svg';
import fillWhiteRightIcon from '../../images/icons/fillWhiteRightIcon.svg';
import ProductBreadcrumb from '../ProductBreadcrumb';
import ClearFilterIcon from "../../images/icons/ClearFilterIcon.svg";
import productImage from "../../images/productImage.png";
import ProductCard from '../ProductCard';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {

            arr.splice(i, 1);

        }
    }
    return arr;
}

const typeValues = [
    {
        "id": 1,
        name: "Coins"
    },
    {
        "id": 2,
        name: "Bars"
    },
    {
        "id": 3,
        name: "Vedhani"
    },
]

const allProduct = [
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "0.5 gram",
        Metal_Cost: "3092",
        Wastage_Charges: "154",
        GST: "97",
        Final_Cost: "3343",
        Wastage_percentage: "0.025"
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "1 gram",
        Metal_Cost: "6185",
        Wastage_Charges: "154",
        GST: "190",
        Final_Cost: "6529",
        Wastage_percentage: "0.025"
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "2 gram",
        Metal_Cost: "12370",
        Wastage_Charges: "154",
        GST: "375",
        Final_Cost: "12899",
        Wastage_percentage: "0.025"
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "3 gram",
        Metal_Cost: "18555",
        Wastage_Charges: "154",
        GST: "561",
        Final_Cost: "19270",
        Wastage_percentage: "0.025"
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "5 gram",
        Metal_Cost: "30925",
        Wastage_Charges: "185",
        GST: "933",
        Final_Cost: "32043",
        Wastage_percentage: "0.030 "
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "10 gram",
        Metal_Cost: "61850",
        Wastage_Charges: "309",
        GST: "1865",
        Final_Cost: "64024",
        Wastage_percentage: "0.050 "
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "15 gram",
        Metal_Cost: "92775",
        Wastage_Charges: "495",
        GST: "2798",
        Final_Cost: "96068",
        Wastage_percentage: "0.080 "
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "20 gram",
        Metal_Cost: "123700",
        Wastage_Charges: "618",
        GST: "3729",
        Final_Cost: "128047",
        Wastage_percentage: "0.100 "
    },
    {
        productImage: productImage,
        Product_Type: "Gold Coin",
        Metal_Weight: "25 gram",
        Metal_Cost: "154625",
        Wastage_Charges: "711",
        GST: "4660",
        Final_Cost: "159996",
        Wastage_percentage: "0.115 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "0.5 gram",
        Metal_Cost: "3092",
        Wastage_Charges: "93",
        GST: "96",
        Final_Cost: "3281",
        Wastage_percentage: "0.015"
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "1 gram",
        Metal_Cost: "6185",
        Wastage_Charges: "93",
        GST: "188",
        Final_Cost: "6466",
        Wastage_percentage: "0.015"
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "2 gram",
        Metal_Cost: "12370",
        Wastage_Charges: "93",
        GST: "374",
        Final_Cost: "12867",
        Wastage_percentage: "0.015"
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "3 gram",
        Metal_Cost: "18555",
        Wastage_Charges: "93",
        GST: "557",
        Final_Cost: "19205",
        Wastage_percentage: "0.015"
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "5 gram",
        Metal_Cost: "30925",
        Wastage_Charges: "155",
        GST: "932",
        Final_Cost: "32012",
        Wastage_percentage: "0.025 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "6 gram",
        Metal_Cost: "37110",
        Wastage_Charges: "155",
        GST: "1118",
        Final_Cost: "38383",
        Wastage_percentage: "0.025 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "7 gram",
        Metal_Cost: "43295",
        Wastage_Charges: "155",
        GST: "1303",
        Final_Cost: "44753",
        Wastage_percentage: "0.025 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "10 gram",
        Metal_Cost: "61850",
        Wastage_Charges: "248",
        GST: "1863",
        Final_Cost: "63961",
        Wastage_percentage: "0.040 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "12 gram",
        Metal_Cost: "74220",
        Wastage_Charges: "248",
        GST: "2234",
        Final_Cost: "76702",
        Wastage_percentage: "0.040 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "15 gram",
        Metal_Cost: "92775",
        Wastage_Charges: "309",
        GST: "2792",
        Final_Cost: "95876",
        Wastage_percentage: "0.050 "
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "20 gram",
        Metal_Cost: "123700",
        Wastage_Charges: "402",
        GST: "3723",
        Final_Cost: "127825",
        Wastage_percentage: "0.065"
    },
    {
        productImage: productImage,
        Product_Type: "Vedhani",
        Metal_Weight: "25 gram",
        Metal_Cost: "154625",
        Wastage_Charges: "495",
        GST: "4654",
        Final_Cost: "159774",
        Wastage_percentage: "0.080 "
    },
    {
        productImage: productImage,
        Product_Type: "Rose Gold Bar",
        Metal_Weight: "5 gram",
        Metal_Cost: "30925",
        Wastage_Charges: "185",
        GST: "933",
        Final_Cost: "32043",
        Wastage_percentage: "0.030 "
    },
    {
        productImage: productImage,
        Product_Type: "Rose Gold Bar",
        Metal_Weight: "10 gram",
        Metal_Cost: "61850",
        Wastage_Charges: "309",
        GST: "1865",
        Final_Cost: "64024",
        Wastage_percentage: "0.050 "
    },
    {
        productImage: productImage,
        Product_Type: "Rose Gold Bar",
        Metal_Weight: "15 gram",
        Metal_Cost: "92775",
        Wastage_Charges: "495",
        GST: "2798",
        Final_Cost: "96068",
        Wastage_percentage: "0.080 "
    },
    {
        productImage: productImage,
        Product_Type: "Rose Gold Bar",
        Metal_Weight: "20 gram",
        Metal_Cost: "123700",
        Wastage_Charges: "618",
        GST: "3729",
        Final_Cost: "128047",
        Wastage_percentage: "0.100 "
    },
    {
        productImage: productImage,
        Product_Type: "Rose Gold Bar",
        Metal_Weight: "25 gram",
        Metal_Cost: "154625",
        Wastage_Charges: "711",
        GST: "4660",
        Final_Cost: "159996",
        Wastage_percentage: "0.115 "
    },
    {
        productImage: productImage,
        Product_Type: "Silver Coin",
        Metal_Weight: "10 gram",
        Metal_Cost: "750",
        Wastage_Charges: "67",
        GST: "24",
        Final_Cost: "842",
        Wastage_percentage: "Rs.6.70 per gram"
    },
    {
        productImage: productImage,
        Product_Type: "Silver Coin",
        Metal_Weight: "20 gram",
        Metal_Cost: "1500",
        Wastage_Charges: "134",
        GST: "49",
        Final_Cost: "1685",
        Wastage_percentage: "Rs.6.70 per gram"
    },
    {
        productImage: productImage,
        Product_Type: "Silver Coin",
        Metal_Weight: "50 gram",
        Metal_Cost: "3750",
        Wastage_Charges: "335",
        GST: "122",
        Final_Cost: "4209",
        Wastage_percentage: "Rs.6.70 per gram"
    },
    {
        productImage: productImage,
        Product_Type: "Silver Coin",
        Metal_Weight: "100 gram",
        Metal_Cost: "7500",
        Wastage_Charges: "670",
        GST: "245",
        Final_Cost: "8421",
        Wastage_percentage: "Rs.6.70 per gram"
    }
]
export default function Bullions() {
    const navigationData = [
        {
            text: "Home",
            path: ""
        },
        {
            text: "Bullion",
            path: "bullion"
        },
        {
            text: "Silver",
            path: "silver"
        },
    ]
    const [typeNameSelected, setTypeName] = React.useState([
        {
            "id": 1,
            name: "Coins"
        },
    ]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log(value);
        const preventDuplicate = value.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
        setTypeName(
            // On autofill we get a the stringified value.
            typeof preventDuplicate === 'string' ? preventDuplicate.split(',') : preventDuplicate
        );
    };
    const handleDeleteFilterData = (event) => {
        var tempArray = typeNameSelected;
        tempArray = removeByAttr(tempArray, 'id', event)
        setTypeName(tempArray)
        console.info(tempArray);
    };
    return (
        <div className='about-us'>
            <div className='col-12'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} className='product-dash-board-header-image-container' style={{ backgroundImage: `url(${productDashBoardImage})` }}>
                            <div className='breadcrumb-container-productpage'>
                                <ProductBreadcrumb navigationData={navigationData} />
                            </div>
                            <div className='product-dash-board-image-header-text-container'>
                                <div className="product-dash-board-header text-only-grid-header">
                                    <img src={fillWhiteLeftIcon} alt="React Logo" />
                                    {'  '}
                                    Bullion
                                    {' '}
                                    <img src={fillWhiteRightIcon} alt="React Logo" />
                                </div>
                                <div className="product-dash-board-description">
                                    Discover the timeless beauty and enduring value of bullion, a symbol of luxury that transcends generations.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Select
                            defaultVa   lue={1}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            displayEmpty
                            value={typeNameSelected}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => "TYPE"}
                        >
                            {typeValues.map(variant => (
                                <MenuItem key={variant.id} value={variant}>
                                    <Checkbox
                                        checked={
                                            typeNameSelected.findIndex(item => item.id === variant.id) >= 0
                                        }
                                    />
                                    <ListItemText primary={variant.name} />
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            defaultValue={1}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            displayEmpty
                            value={typeNameSelected}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => "METAL"}
                        >
                            {typeValues.map(variant => (
                                <MenuItem key={variant.id} value={variant}>
                                    <Checkbox
                                        checked={
                                            typeNameSelected.findIndex(item => item.id === variant.id) >= 0
                                        }
                                    />
                                    <ListItemText primary={variant.name} />
                                </MenuItem>
                            ))}
                        </Select>
                        <Select
                            defaultValue={1}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            displayEmpty
                            value={typeNameSelected}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => "WEIGHT"}
                        >
                            {typeValues.map(variant => (
                                <MenuItem key={variant.id} value={variant}>
                                    <Checkbox
                                        checked={
                                            typeNameSelected.findIndex(item => item.id === variant.id) >= 0
                                        }
                                    />
                                    <ListItemText primary={variant.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    <Grid className='product-page-sort-by-container' item xs={1} md={6}>
                        <Select
                            defaultValue={1}
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            renderValue={(selected) => "SORT BY"}
                        >
                            <MenuItem value={1}>Price - low to high</MenuItem>
                            <MenuItem value={2}>Price - high to low</MenuItem>
                            <MenuItem value={3}>Popularity</MenuItem>
                            <MenuItem value={3}>Newly added</MenuItem>
                            <MenuItem value={3}>Bestsellers</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={1} md={12}>
                        <Divider className='product-page-divider' variant="middle" />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={1} md={10}>
                        {typeNameSelected.map(element =>
                        (<Chip
                            className='product-page-chip'
                            key={element.id}
                            onDelete={() => handleDeleteFilterData(element.id)}
                            label={element.name}
                            deleteIcon={<img src={ClearFilterIcon} />}
                        />)
                        )}
                        <Button className='product-page-clear-all-button' >CLEAR ALL</Button>
                    </Grid>
                    <Grid item xs={1} md={1}>
                        <Item className="empty-container-section">xs=6 md=4</Item>
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} className="product-grid-container">
                    <Grid className="product-list-grid-section" item xs={12} md={10}>
                        {allProduct.map(element => (
                            <ProductCard
                                productImage={element.productImage}
                                productNmae={element.Product_Type + ' - ' +element.Metal_Weight}
                                isFavourite={element.isFavourite}
                                newArrival={element.newArrival}
                                productPrice={'₹' + element.Final_Cost}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1} className="product-grid-container">
                    <Grid className='product-list-page-pagination-container' item xs={12} md={10}>
                        <Pagination count={8} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
