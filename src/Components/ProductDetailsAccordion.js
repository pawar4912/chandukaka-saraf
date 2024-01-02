import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProductDetailsAccordion({dataList}) {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
        <div>
            {dataList.map((element, index) => (
                <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '90%', flexShrink: 0 }}>
                            {element.label}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='product-details-description'>
                            Product Code : GP1
                        </p>
                        <p className='product-details-description'>
                            Product Name : 1 Grams Ganesha Silver Coin
                        </p>
                    </AccordionDetails>
                </Accordion>))
            }
        </div>
    )
}
