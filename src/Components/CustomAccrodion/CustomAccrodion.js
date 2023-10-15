"use client"

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';


const CustomAccrodion = () => {
    const faqs = [
        {
            id: 1,
            question: "Is it legal to purchase gaming currency from your website?",
            answer: "Yes, our services are legal and comply with the terms of service of the games we support. We ensure a safe and secure transaction process."
        },
        {
            id: 2,
            question: "How do I purchase gaming currency from your website?",
            answer: "To make a purchase, select the game and currency type you want, proceed to checkout, and follow the payment instructions. Once the payment is confirmed, we will deliver the currency to your in-game account."
        },
        {
            id: 3,
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment gateways. You can find the complete list of accepted payment methods during the checkout process."
        },
        {
            id: 4,
            question: "How long does it take to receive the purchased gaming currency?",
            answer: "Delivery times vary depending on the game and currency type. Typically, we strive to deliver the currency within [mention expected time frame, e.g., 24 hours] after the payment is confirmed."
        },
        {
            id: 5,
            question: "Is my personal and payment information safe when making a purchase?",
            answer: "Yes, we prioritize the security and confidentiality of your data. We use advanced encryption technologies to protect your personal and payment information. Your details are never shared with third parties."
        },
        {
            id: 6,
            question: "What happens if there's an issue with my purchase or delivery?",
            answer: "In the rare event of any issues, please contact our 24/7 customer support team via email, live chat, or phone. We are here to assist you and resolve any problems you might encounter."
        },
        {
            id: 7,
            question: "Do you offer refunds if I change my mind or face issues with the purchased currency?",
            answer: "Yes, we have a transparent refund policy. If you are not satisfied with your purchase or face any problems, please refer to our refund policy guidelines or contact our customer support for assistance."
        },
        {
            id: 8,
            question: "Are there any discounts for bulk purchases?",
            answer: "Yes, we offer discounts for bulk purchases. The more you buy, the more you save. Check our pricing page for details on bulk purchase discounts."
        },
        {
            id: 9,
            question: "Do you support currencies for all games?",
            answer: "While we support a wide range of popular games, please check our website to see the list of games and currencies available. We continually update our offerings based on customer demand."
        },
        {
            id: 10,
            question: "Can I trust the testimonials on your website?",
            answer: "Absolutely. Our testimonials are from genuine customers who have had positive experiences with our services. We take pride in the satisfaction of our customers and value their feedback."
        }
    ];

    return (
        <div className='my-3'>
            <Accordion>
                {
                    faqs.map(sfaqs =>
                        <AccordionItem key={sfaqs.id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                   {sfaqs.question}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>
                                    {sfaqs.answer}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>


                    )
                }
            </Accordion>
        </div>
    );
};

export default CustomAccrodion;