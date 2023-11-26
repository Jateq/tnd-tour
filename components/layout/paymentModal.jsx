import {Fragment, useEffect} from "react";
import { Dialog, Transition } from '@headlessui/react'
import Link from "next/link";

const PaymentModal = ({ showModal, setShowModal }) => {

    return (
        <Transition appear show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-40" open={showModal} onClose={() => setShowModal(false)}>
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
                            <Dialog.Panel className="flex justify-center text-center w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl bg-stone-200 md:border md:border-gray-200 transition-all">

                                <div className="p-6">
                                    <h3 className="font-display text-2xl font-bold">Congratulations</h3>

                                    <Link href={'/profile'}>
                                        <button className='hover:bg-white border border-[#4c9e9e] px-5 rounded py-2 hover:text-[#4c9e9e] bg-[#4c9e9e] text-white duration-75 mt-5' >See in profile</button>
                                    </Link>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default PaymentModal;
