'use client';

import React, {useState} from "react";
import Link from "next/link";
import { MembershipProvider, useMembership } from "./MembershipContext";
import PlansModal from "@/components/layout/PlansModal";

export default function Membership() {
  const { selectedMembership, selectMembership } = useMembership();
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('basic')

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleSubscribe = (membership) => {
    selectMembership(membership);
  };

  return (
    <MembershipProvider>
      <PlansModal showModal={showModal} setShowModal={setShowModal} plan={selectedPlan}/>
      <div className="membership">
        <div className="container">
          <div className="membership__inner">
            <div className="membership__card" id="basic">
              <div className="card__title">Basic Membership</div>
              <div className="card__benefits">
                <img src="one.jpg" alt="basic"></img>
              </div>
              <div className="card__price">
                <span className="flex justify-center">Price:</span>
                <div className="flex justify-center membership__price">
                Free
                </div>
                <button
                    onClick={() => openModal('basic')}
                   >
                    {selectedMembership === 'basic' ? 'Current plan' : 'Subscribe'}

                </button>
              </div>
            </div>

            <div className="membership__card" id="business">
              <div className="card__title">Business Membership</div>
              <div className="card__benefits">
                <img src="two.jpg" alt="business"></img>
              </div>
              <div className="card__price">
                <span className="flex justify-center">Price:</span>
                <div className="flex justify-center membership__price">
                  KZT 100K/ year
                </div>
                <button
                    onClick={() => openModal('business')}
                    >
                    {selectedMembership === 'business' ? 'Current plan' : 'Subscribe'}



                </button>
              </div>
            </div>

            <div className="membership__card" id="premium">
              <div className="card__title">Premium Membership</div>
              <div className="card__benefits">
                <img src="three.jpg" alt="Premium"></img>
              </div>
              <div className="card__price">
                <span className="flex justify-center">Price:</span>
                <div className="flex justify-center membership__price">
                  KZT 400K/ year
                </div>
                  <button
                    onClick={() => openModal('premium')}>
                    {selectedMembership === 'premium' ? 'Current plan' : 'Subscribe'}


                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MembershipProvider>
  );
}
