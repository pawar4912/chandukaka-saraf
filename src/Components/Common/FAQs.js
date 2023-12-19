import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import plusIcon from "../../images/icons/plusicon.svg"
import minusIcon from "../../images/icons/minusicon.svg"

export default function FAQs({ dataList, isContactusPage = true }) {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    return (
        <div className='faqs-container'>
            {dataList.map((element, index) => (
                <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel' + index ? <img src={minusIcon} alt="rightArrowIcon" /> : <img src={plusIcon} alt="rightArrowIcon" />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '90%', flexShrink: 0 }}>
                            {element.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {isContactusPage ?
                            <Typography>
                                {element.description}
                            </Typography>
                            :
                            <>
                                <Typography className='find-store-description find-store-description-text'>
                                    {element.description}
                                </Typography>
                                <Typography className='find-store-description'>
                                    Toll Free No: {" "}
                                    <p className='toll-free-no'>
                                        {element.tollFreeNo}
                                    </p>
                                </Typography>
                                <Typography className='working-hours-container find-store-description'>
                                    <p>Working Hours: {" "}</p>
                                    <p><p className='workingHours-text-field'>{element.workingHours}</p>{element.holiday}</p>
                                </Typography>
                            </>}
                    </AccordionDetails>
                </Accordion>))}
        </div>
    );
}