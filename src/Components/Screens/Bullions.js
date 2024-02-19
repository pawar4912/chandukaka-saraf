import React, { useEffect, useState } from 'react'
import productDashBoardImage from "../../images/productDashBoardImage.png";
import { Box, Button, Checkbox, Chip, Divider, Grid, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import fillWhiteLeftIcon from '../../images/icons/fillWhiteLeftIcon.svg';
import fillWhiteRightIcon from '../../images/icons/fillWhiteRightIcon.svg';
import ProductBreadcrumb from '../ProductBreadcrumb';
import ClearFilterIcon from "../../images/icons/ClearFilterIcon.svg";
import ProductCard from '../ProductCard';
import { Paginator } from '../Common/Paginator';
import { getMetals, getProducts, getProductCategory } from '../../services/FrontApp/index.service';
import { useSearchParams } from 'react-router-dom';

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

export default function Bullions() {
    const [queryParameters] = useSearchParams()
    const [types, setTypes] = useState([])
    const [metals, setMetals] = useState([])
    const metal = queryParameters.get("metal")
    const item_type = queryParameters.get("item_type")
    const navigationData = [
        {
            text: "Home",
            path: ""
        },
        {
            text: "Bullion",
            path: "bullion"
        },
    ]
    const [typeNameSelected, setTypeName] = React.useState([
        {
            "id": 1,
            name: "Coins"
        },
    ]);
    const [filterData, setFilterData] = useState({
        limit: 12,
        page: 1,
        sort_by: ''
    })
    const [refreshCount, setRefreshCount] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [products, setProducts] = useState([])

    const getData = async () => {
        try {
            const { data } = await getProducts(filterData)
            setProducts(data.data.data)
            setTotalPages(data.data.last_page)
        } catch (error) {
            setProducts([])
            setTotalPages(0)
        }
    }

    useEffect(() => {
        filterData['metal_type[0]'] = metal
        filterData['search_query'] = item_type
        const temp = Object.assign({}, filterData)
        setFilterData(temp)
        setRefreshCount(refreshCount + 1)
    }, [metal, item_type])

    const getFiltersData = async () => {
        let result = await getProductCategory();
        setTypes(result.data.data)
        result = await getMetals();
        setMetals(result.data.data)
    }

    useEffect(() => {
        getFiltersData()
    }, [])

    useEffect(() => {
        getData()
    }, [refreshCount])

    const handleChange = ({ target }) => {
        filterData[target.name] = target.value
        const temp = Object.assign({}, filterData)
        setFilterData(temp)
        setRefreshCount(refreshCount + 1)
    }

    const handleChangePage = (event, newPage) => {
        filterData['page'] = newPage
        const temp = Object.assign({}, filterData)
        setFilterData(temp)
        setRefreshCount(refreshCount + 1)
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
            <div className="product-main">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} md={4}>
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
                                renderValue={(selected) => "TYPE"}
                            >
                                {types.map(type => (
                                    <MenuItem key={type.id} value={type}>
                                        <Checkbox />
                                        <ListItemText primary={type.category_name} />
                                    </MenuItem>
                                ))}
                            </Select>
                            <Select
                                defaultValue={1}
                                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                value={metal}
                                onChange={handleChange}
                                renderValue={(selected) => selected}
                            >
                                {metals.map((item, index) => (
                                    <MenuItem key={index} value={item.id}>
                                        <Checkbox
                                            checked={metal == item.id}
                                        />
                                        <ListItemText primary={item.metal_type} />
                                    </MenuItem>
                                ))}
                            </Select>
                            {/* <Select
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
                            </Select> */}
                        </Grid>
                        <Grid className='product-page-sort-by-container' item xs={1} md={6}>
                            <Select
                                defaultValue={1}
                                sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                renderValue={(selected) => "SORT BY"}
                            >
                                <MenuItem value='low_to_high'>Price - low to high</MenuItem>
                                <MenuItem value='high_to_low'>Price - high to low</MenuItem>
                                <MenuItem value='is_popular'>Popularity</MenuItem>
                                <MenuItem value='bestseller'>Newly added</MenuItem>
                                <MenuItem value='newly_added'>Bestsellers</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={1} md={12}>
                            <Divider className='product-page-divider' variant="middle" />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
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

                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    {products.length > 0 ? (
                        <Grid spacing={1} className="product-grid-container">
                            <Grid className="product-list-grid-section" xs={12} md={10}>
                                {products.map(product => (
                                    <ProductCard
                                        productImage={product.image_path}
                                        productName={product.product_name}
                                        productPrice={product.sales_price}
                                        id={product.product_id}
                                        key={product.product_id}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                    ) : ''}

                </Box>
                <Paginator currentPage={filterData.page} totalPage={totalPages} handleChangePage={handleChangePage} />
            </div>
        </div>
    )
}
