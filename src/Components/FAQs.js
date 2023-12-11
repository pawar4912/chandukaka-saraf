import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import plusIcon from "../images/icons/plusicon.svg"
import minusIcon from "../images/icons/minusicon.svg"

export default function FAQs({ dataList, isContactusPage = true }) {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const dataList = [
    {
        title: "Do I need to sign up for an account to place an order?",
        description: "you can browse through the collection and select the jewel you like. But at the time of purchasing from the cart, you will be required to create an account which is fairly a simple process. Creating an account will ensure you purchase in a safe and secure environment."
    },
    {
        title: "What should I do, if I have forgotten my password?",
        description: "If you have forgotten your password,follow the 'FORGOT PASSWORD' instructions on the SIGN IN menu.."
    },
    {
        title: "How do I know that the products you sell are BIS Hallmarked?",
        description: "We can guarantee that every gold item over 2 gram we sell with BIS Hall marked Jewel. The same way, Diamond and Platinum jewellery will be accompanied by a certificate which establishes the genuineness of the product."
    },
    {
        title: "Are the colors of products shown on the website accurate?",
        description: "Care has been taken while photographing the jewels to provide the users with better viewing experience and make it appear as accurate as possible. High resolution pictures of the Jewels are captured to give the users the feel of design, the way it is crafted, the expertise and the workmanship, the color and the size in detail. However, there can be a slight variation in the photograph with the actual product and the cause can be due to lighting, camera and sensor quality, photo effects, reflection of stones or the background etc.."
    },
    {
        title: "How do I know if an item is in stock?",
        description: "Majority of the products displayed on the website will be available in stock.However, sometimes there may be a situation where the particular product is either sold or not available. In such a case we will arrange it by make to order or check from a manufacture the same in their factory is available and will pass on the information to the customer either through email or through phone. For diamonds and other precious stones or semi – precious stones, irrespective of the displayed information the sale will happen only based on availability and the customer’s acceptance. In such a case, prices may vary."
    },
    {
        title: "Is it safe to use my credit card online at CS Jewellers?",
        description: "We take appropriate precautions to protect the security of Personally Identifiable Information. We encrypt certain sensitive information using Secure technology to ensure that your Personally Identifiable Information is safe as it is transmitted to us."
    },
    {
        title: "Does CS Jewellers ship to multiple addresses?",
        description: "Unfortunately, we can ship items only to a single address as per order. If your order contains gifts or items that require shipping to multiple locations/addresses, you will need to place separate orders for each address."
    },
    {
        title: "Do I need to sign for my order?",
        description: "Due to the high value of the goods that we sell and in the interest of our customers, we require proof of delivery for all orders. This is to ensure additional security and hence it is imperative that the customer who has made the purchase sign for the package. We will not be in a position to authorize packages to be delivered without the customer’s signature."
    },
    {
        title: "Can I change my shipping address after my order has been dispatched?",
        description: "We are unfortunately unable to redirect orders once your items have been dispatched. Therefore, please ensure you provide a suitable shipping address for the specified delivery times."
    },
    {
        title: "Can I add items to an existing order?",
        description: "Unfortunately, it is not possible to combine orders or add items to an existing order. If you would like all your items to be delivered toto same address you can place another order for the new product."
    },
  
    {
        title: "How will I know you received my order and when will payment be deducted?",
        description: "After you place your order, we will be sent an email confirmation that your order has been confirmed. The amount will be debited from your credit/debit card/netbanking at the time of placement of order itself. In a rare circumstance that any of the items you have ordered are not available, we will contact you by email or call."
    },
    {
        title: "How can I track my order?",
        description: "Once your package ships we will send an email or sms with a link to track your order. You can also check the status of your order by logging into your account."
    },
    {
        title: "Is my package insured?",
        description: "All Jewellery bought online will be fully insured against theft, damage or loss on transit from CS Jewellers to the shipping address. Once your items have been delivered to the specified delivery address and signed for, they are no longer covered by insurance."
    },
    {
        title: "What packaging will my order be shipped in?",
        description: "CS Jewellers Jewellery takes special care in the package of the user’s precious purchase. The jewels purchased are secured in a box, layered with durable and tamper proof seal along with the security tag from CS Jewellers."
    },
    {
        title: "How can i ensure my product arrive safely?",
        description: "We do send the items in a tamper proof package along with the certificates (if any). All products cover insurance until the time of delivery to the customer."
    },
    {
        title: "How does the Gold Rates decided?",
        description: " The rates are decided as per International Commodity Market."
    },
    {
        title: "Why are the making charges so high?",
        description: "The making charges are depend on authenticity, craftsmanship, type of jewellery, quality, etc. However we offer Best quality product at Best Rate."
    },
    {
        title: "What are the labor charges while exchanging Diamond Jewellery?",
        description: "Labor charges are different for each product; there is no difference in labor charges whether you purchase against exchange or fresh purchase."
    },
    {
        title: "Why the GST of loose diamond is less than the GST of diamond jewelry?",
        description: "As per the Government of India guidelines the GST rates of all the products has been fixed."
    },
    {
        title: "Why the labor charges of Diamond jewelry is more than gold jewelry?",
        description: "Diamond jewellery is manufactured in 18kt gold & has multiple processes while manufacturing than of Gold Jewellery; also there is more amount of gold wastage as it is harder than of regular gold jewellery; so."
    },

  ]

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