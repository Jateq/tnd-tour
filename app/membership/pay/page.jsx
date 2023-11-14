'use client';

import React, { useState } from 'react';

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [name, setName] = useState('');

    const handlePayment = () => {
        // Perform payment processing logic here
        // This is where you would integrate with a payment processing service
        console.log('Payment processed successfully!');
    };

    return (
        <div className='payment'>
            <div className='payment-left'>
            <p> Enter your payment details</p>
            <form>
                <label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                    />
                </label>
                <br />
                <label>
                    Expiry Date:
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YYYY"
                    />
                </label>
                <br />
                <label>
                    CVC:
                    <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} placeholder="123" />
                </label>
                <br />
                <label>
                    Cardholder Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
                </label>
                <br />
                <button type="button" onClick={handlePayment}>
                    Pay Now
                </button>
            </form>
            </div>


            <div className='payment-left'>


            </div>
        </div>
    );
};

export default PaymentPage;
