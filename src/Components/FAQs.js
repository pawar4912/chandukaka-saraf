import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import plusIcon from "../images/icons/plusicon.svg"
import minusIcon from "../images/icons/minusicon.svg"
import { getFaqs } from '../services/FrontApp/index.service';

export default function FAQs() {
    const [expanded, setExpanded] = React.useState(false);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const result = await getFaqs();
            console.log(result.data.data)
            setData(result.data.data)
          } catch (error) {
            console.error(error.message)
          }
    }

    useEffect(() => {
        getData()
    }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <div className='faqs-container'>
            {data.map((element, index) => (
                <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel' + index ? <img className="expand-icon" src={minusIcon} alt="rightArrowIcon" /> : <img className="expand-icon" src={plusIcon} alt="rightArrowIcon" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '90%', flexShrink: 0, fontFamily: 'Lato', fontWeight: 'bold', fontSize: '18px' }}>
                            {element.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontFamily: 'Lato', fontWeight: 'normal', fontSize: '16px'}}>
                            <div
                                dangerouslySetInnerHTML={{ __html: element.answers}}
                            />
                        </Typography>
                    </AccordionDetails>
                </Accordion>))}
        </div>
    );
}