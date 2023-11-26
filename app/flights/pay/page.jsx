'use client';
import React, { useState } from 'react';
import PaymentModal from "@/components/layout/paymentModal";


export default function FlightsPay() {

        const [showModal, setShowModal] = useState(false);


        const [cardNumber, setCardNumber] = useState('');
        const [expiryDate, setExpiryDate] = useState('');
        const [cvc, setCvc] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');


        const handlePayment = () => {
            if (!arePaymentInputsFilled()) {
                alert("Please fill in all the required fields before continuing.");
            } else if (!isCardNumberValid(cardNumber)) {
                alert("Please enter a valid card number.");
            } else {
                setShowModal(true)
            }
        };


        const isCardNumberValid = (cardNumber) => {

            const cardNumberPattern = /^\d{16}$/;
            return cardNumberPattern.test(cardNumber);
        };
        const arePaymentInputsFilled = () => {
            return cardNumber && expiryDate && cvc && email && name;
        };

        return (
                    <div className='payment-left'>
                        <PaymentModal showModal={showModal} setShowModal={setShowModal}/>

                        <p className='text-center'> Enter your payment details</p>
                        <form>
                            <label>
                                Email:
                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john.doe@gmail.com" />
                            </label>
                            <label>
                                Cardholder Name:
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                            </label>
                            <label>Card number:
                                <input
                                    className='payment-left-card'
                                    type="text"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    placeholder=" 1234 5678 9012 3456"
                                />
                            </label>
                            <label>
                                Expiry Date:
                                <input
                                    type="text"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    placeholder="MM/YYYY"
                                />
                            </label>
                            <label>
                                CVC:
                                <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" />
                            </label>
                            <button type="button" onClick={handlePayment}

                            >
                                Pay Now
                            </button>

                        </form>



                    </div>

        );
    };

