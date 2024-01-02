import * as React from 'react';
import PropTypes, { element } from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function ProductDetailsTab({ dataList }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs className='product-desctiption-tabs-container' value={value} onChange={handleChange} aria-label="basic tabs example">
                    {dataList.map((element, index) => (
                        <Tab label={element.label} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            <>
                {dataList.map((element, index) => (
                    <CustomTabPanel value={value} index={index}>
                        <p className='product-details-description'>
                            Product Code : GP1
                        </p>
                        <p className='product-details-description'>
                            Product Name : 1 Grams Ganesha Silver Coin
                        </p>
                    </CustomTabPanel>
                ))}
            </>
        </Box>
    );
}