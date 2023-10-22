import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import plusIcon from "../images/icons/plusicon.svg"
import minusIcon from "../images/icons/minusicon.svg"

export default function FAQs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dataList = [
    {
        title: "Do I need to sign up for an account to place an order?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "How do I know that the products you sell are BIS Hallmarked?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Are the colors of products shown on the website accurate?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "How do I know if an item is in stock?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Is it safe to use my credit card online at CS Jewellers?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Does CS Jewellers ship to multiple addresses?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Do I need to sign for my order?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Can I change my shipping address after my order has been dispatched?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Can I add items to an existing order?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    }
  ]

  return (
    <div className='faqs-container'>
      {dataList.map((element, index) => (
        <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)}>
            <AccordionSummary
                expandIcon={expanded === 'panel' + index? <img src={minusIcon} alt="rightArrowIcon" />: <img src={plusIcon} alt="rightArrowIcon" />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
             >
                <Typography sx={{ width: '90%', flexShrink: 0 }}>
                    {element.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {element.description}
                </Typography>
        </AccordionDetails>
      </Accordion>))}
    </div>
  );
}