'use client';

import React, {useEffect, useState} from 'react';
import {MembershipProvider, useMembership} from "@/components/layout/MembershipContext";
import PaymentModal from "@/components/layout/paymentModal";

const PaymentPage = () => {

    const [showModal, setShowModal] = useState(false);


    const { selectedMembership, selectMembership } = useMembership();
    const [selectedPlan, setSelectedPlan] = useState(localStorage.getItem('unverifiedPlan') || '');

    const [emaild, setEmaild] = useState('');
    const [named, setNamed] = useState('');
    const [surnamed, setSurnamed] = useState('');
    let totalName = named + ' ' + surnamed;

    useEffect(() => {
        const emailF = localStorage.getItem('email');
        const nameF = localStorage.getItem('name');
        const surnameF = localStorage.getItem('surname');


        if (emailF) setEmaild(emailF);
        if (nameF) setNamed(nameF);
        if (surnameF) setSurnamed(surnameF);
    }, []);




    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [name, setName] = useState(totalName);
    const [email, setEmail] = useState(emaild);

    const handleCheckboxChange = (plan) => {
        // Update the selected plan in the state
        setSelectedPlan(plan);

        // Update unverifiedPlan in local storage based on the selected plan
        localStorage.setItem('unverifiedPlan', plan);

    };
    const basicFeatures = [
        "Flights all over the world",
        "Meal on the plane for 8 hour or longer flights",
        "Help with stays",
        "Support in country",
        "Internet access",
        "Animals zone"
    ];

    const businessFeatures = [
        "All the benefits of basic plan",
        "Priority boarding",
        "Lounge access",
        "Meal selection",
        "Personalized travel experiences",
        "Comfortable business class"
    ];

    const premiumFeatures = [
        "All the benefits of business",
        "Exclusive travel concierge",
        "Luxury accommodations",
        "High-speed internet",
        "Exclusive discounts",
        "Urgent flies booking"
    ];


    const handlePayment = () => {
        if (!arePaymentInputsFilled()) {
            alert("Please fill in all the required fields before continuing.");
        } else if (!isCardNumberValid(cardNumber)) {
            alert("Please enter a valid card number.");
        } else {
            setShowModal(true)
            selectMembership(selectedPlan);
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
        <MembershipProvider>
        <div className='payment'>
            <div className='payment-left'>
            <p> Enter your payment details</p>
            <form>
                <label>
                    Email:
                    <input type="text" value={emaild} onChange={(e) => setEmail(e.target.value)} placeholder="john.doe@gmail.com" />
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


            </form>
            </div>


            <div className='payment-right'>
                <div>
                    <h1>{selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan</h1>
                </div>

                <div className='boxes'>
                    <label>
                        <div>
                            <p> <input
                                type='checkbox'
                                value='basic'
                                checked={selectedPlan === 'basic'}
                                onChange={() => handleCheckboxChange('basic')}
                            /> Basic </p> <p>{selectedMembership === 'basic' ? 'Current plan' : 'FREE' }</p>
                        </div>
                    </label>
                    <label>

                        <div>
                        <p>         <input
                            type='checkbox'
                            value='business'
                            checked={selectedPlan === 'business'}
                            onChange={() => handleCheckboxChange('business')}
                        /> Business</p> <p>{selectedMembership === 'business' ? 'Current plan' : '100K/YEAR'  }</p>
                        </div>
                    </label>
                    <label>

                        <div>
                        <p>    <input
                            type='checkbox'
                            value='premium'
                            checked={selectedPlan === 'premium'}
                            onChange={() => handleCheckboxChange('premium')}
                        /> Premium</p> <p>{selectedMembership === 'premium' ? 'Current plan' : '400K/YEAR' }</p>
                        </div>
                    </label>
                </div>

                <div className='mb-7'>
                    {selectedPlan === "basic" && (
                        <ul className='mt-7 p-4 border border-amber-950 min-h-[260px]  text-center rounded-xl'>

                            {basicFeatures.map((feature, index) => (
                                <li className='gap-2 justify-between  p-1'
                                    key={index}>{feature}</li>
                            ))}
                        </ul>
                    )}

                    {selectedPlan === "business" && (
                        <ul className='mt-7 p-4 border border-amber-950 min-h-[260px] text-center rounded-xl'>
                            {businessFeatures.map((feature, index) => (
                                <li className='gap-2 justify-between  p-1'
                                    key={index}>{feature}</li>

                            ))}
                        </ul>
                    )}

                    {selectedPlan === "premium" && (
                        <ul className='mt-7 p-4 border border-amber-950 min-h-[260px] text-center  rounded-xl'>
                            {premiumFeatures.map((feature, index) => (
                                <li className='gap-2 justify-between  p-1'
                                    key={index}>{feature}</li>

                            ))}
                        </ul>
                    )}
                </div>
                <button type="submit" onClick={handlePayment}
                        disabled={selectedPlan === selectedMembership}
                        className={selectedPlan === selectedMembership ? "payment-disabled-button" : ""}
                >
                    Pay Now
                </button>
                <PaymentModal showModal={showModal} setShowModal={setShowModal}/>


            </div>
        </div>
        </MembershipProvider>
    );
};

export default PaymentPage;
