import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { MembershipProvider, useMembership } from "./MembershipContext";

const PlansModal = ({ showModal, setShowModal, plan }) => {

    const { selectedMembership, selectMembership } = useMembership();


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

    return (
        <MembershipProvider>
        <Transition appear show={showModal} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-40"
                open={showModal}
                onClose={() => setShowModal(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0">
                    <div className="flex min-h-full items-center justify-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="flex justify-center text-center min-w-[500px] min-h-[480px] overflow-hidden shadow-xl md:max-w-md md:rounded-2xl bg-stone-200 md:border md:border-gray-200 transition-all">
                                <div className="p-6 ">
                                    <h3 className="font-display text-3xl font-bold w-[400px] mb-[20px]">
                                        {plan.charAt(0).toUpperCase() + plan.slice(1)} plan
                                    </h3>


                                        <div className='mb-7'>
                                            <h1 className='font-bold'>Features</h1>
                                            {plan === "basic" && (
                                                <ul className='mt-7 p-2 border border-amber-950 rounded-xl'>

                                                    {basicFeatures.map((feature, index) => (
                                                        <li className='gap-2 justify-between  p-1'
                                                            key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {plan === "business" && (
                                                <ul className='mt-7 p-2 border border-amber-950 rounded-xl'>
                                                    {businessFeatures.map((feature, index) => (
                                                        <li className='gap-2 justify-between  p-1'
                                                            key={index}>{feature}</li>

                                                    ))}
                                                </ul>
                                            )}

                                            {plan === "premium" && (
                                                <ul className='mt-4 p-2 border border-amber-950 rounded-xl'>
                                                    {premiumFeatures.map((feature, index) => (
                                                        <li className='gap-2 justify-between  p-1'
                                                            key={index}>{feature}</li>

                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                    <Link href='/membership/pay'>
                                            <button
                                                    disabled={selectedMembership === plan}
                                                    className={selectedMembership === plan ? 'disabled-membership-button' : 'membership-button'}>

                                            Lets Fly
                                            </button>
                                    </Link>
                                    </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
        </MembershipProvider>
    );
};

export default PlansModal;
