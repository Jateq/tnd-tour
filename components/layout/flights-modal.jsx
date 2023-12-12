'use client';

import React, {Fragment, useEffect, useState} from "react";
import { Dialog, Transition } from '@headlessui/react'
import Link from "next/link";

const FlightsModal = ({ showModal, setShowModal, flight }) => {
console.log(flight)

    const [flightsCity, setFlightsCity] = useState("");
    const [flightsDeparture, setFlightsDeparture] = useState("");
    const [flightsReturn, setFlightsReturn] = useState("");
    const [flightsPassengers, setFlightsPassengers] = useState(0);

    useEffect(() => {
        const storedFlightsCity = localStorage.getItem('flightsCity');
        const storedFlightsDeparture = localStorage.getItem('flightsDeparture');
        const storedFlightsReturn = localStorage.getItem('flightsReturn');
        const storedFlightsPassengers = parseInt(localStorage.getItem('flightsPassengers'), 10);

        if (storedFlightsCity) setFlightsCity(storedFlightsCity);
        if (storedFlightsDeparture) setFlightsDeparture(storedFlightsDeparture);
        if (storedFlightsReturn) setFlightsReturn(storedFlightsReturn);
        if (!isNaN(storedFlightsPassengers)) setFlightsPassengers(storedFlightsPassengers);

    }, []);
    const handleOnClick = (flight) => {
        localStorage.setItem('flightsDestination', flight.destination);
        localStorage.setItem('flightsPrice', flight.price);
    };

    return (
        <Transition appear show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-40 " open={showModal} onClose={() => setShowModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed  inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed  inset-0">
                    <div className="flex min-h-full  items-center justify-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="flex  justify-center text-center min-w-[700px] overflow-hidden shadow-xl md:max-w-md md:rounded-2xl bg-stone-200 md:border md:border-gray-200 transition-all">

                                <div className="p-6 ">

                                    <h3 className="font-display text-3xl font-bold w-[400px] mb-[20px]">Your flight to {flight?.destination}</h3>
                                    <div className='flex rounded-t-md gap-2 justify-between border border-b-0 border-amber-950 p-4'>

                                    <p>{flightsCity} - {flight?.destination}
                                    </p>
                                    <p>
                                        {flightsDeparture} - {flightsReturn}
                                    </p>
                                    </div>
                                    <div className='flex rounded-b-md  gap-2 justify-between border border-amber-950 p-4'>

                                        <p> For {flightsPassengers} passenger/s</p>

                                    </div>

                                    <div>
                                        <h3 className='text-xl font-bold text-left mb-3 ml-1 mt-5'>Baggage:</h3>
                                        <div className='flex rounded-t-md gap-2 justify-between border border-b-0 border-amber-950 p-4'>
                                            <p className='flex'>
                                                <svg className='mt-[15px]' xmlns="http://www.w3.org/2000/svg" height="40"
                                                     viewBox="0 -960 960 960" width="40">
                                                    <path
                                                        d="M440-756q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4ZM280-80q-33 0-56.5-23.5T200-160v-320q0-85 44.5-152T360-732v-28q0-50 34.5-85t85.5-35q51 0 85.5 35t34.5 85v28q63 29 105 85.5T758-518q-18-2-40-2t-40 3q-14-69-69-116t-129-47q-83 0-141.5 58.5T280-480v320h172q6 20 16.5 41.5T490-80H280Zm40-320h170q14-21 37.5-43t48.5-37H320v80Zm400-40q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14ZM490-400Z"/>
                                                </svg>
                                                <div className='flex flex-col text-left w-[200px]'>
                                                    <span>1 personal item</span>
                                                    <span>Fits under the seat in front of you</span>
                                                </div>
                                            </p>
                                            <p className='mt-[24px]' >{flight?.personalItem}</p>
                                        </div>

                                        <div className='flex  gap-2 justify-between border border-b-0 border-amber-950 p-4'>
                                            <p className='flex'>
                                                <svg className='mt-[15px]' xmlns="http://www.w3.org/2000/svg" height="40"
                                                     viewBox="0 -960 960 960" width="40">
                                                    <path
                                                        d="M360-200v-400h-40v400h40Zm108 80H320q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h240v-120q-33 0-56.5-23.5T480-880h160v372q-24 8-41.5 16T560-470v-130H440v400h4q3 24 9 42t15 38Zm252-320q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14ZM400-400Zm-40 200v-400 400Zm80 0v-400 400Z"/>
                                                </svg>
                                                <div className='flex flex-col text-left w-[200px]'>
                                                    <span>1 carry-on bag</span>
                                                    <span>56 x 45 x 25 cm · Max weight 8 kg</span>
                                                </div>
                                            </p>
                                            <p className='mt-[24px]'>{flight?.carryOnBag}</p>
                                        </div>

                                        <div className='flex rounded-b-md  gap-2 justify-between border border-amber-950 p-4'>
                                            <p className='flex'>
                                                <svg className='mt-[5px]' xmlns="http://www.w3.org/2000/svg" height="40"
                                                     viewBox="0 -960 960 960" width="40">
                                                    <path
                                                        d="M280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-100q0-25 17.5-42.5T420-880h120q25 0 42.5 17.5T600-820v100h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120Zm0-80h400v-440H280v440Zm40-40h60v-360h-60v360Zm130 0h60v-360h-60v360Zm130 0h60v-360h-60v360ZM480-420Zm-60-300h120v-100H420v100Z"/>
                                                </svg>
                                                <div className='flex flex-col text-left w-[200px]'>
                                                    <span>1 checked bag</span>
                                                    <span>Max weight 23 kg</span>
                                                </div>
                                            </p>
                                            <p className='mt-[17px]'>{flight?.checkedBag}</p>
                                        </div>

                                    </div>

                                    <div className='flex justify-between'>
                                        <div className='text-left mt-4 '>
                                        <p className='text-xl font-bold'>KZT {flight?.price}</p>
                                            <p className='text-gray-500 text-sm'>Total price for all travellers</p>
                                        </div>
                                        <Link href={'/flights/pay'}>
                                            <button
                                                onClick={() => handleOnClick(flight)}
                                                className='w-[160px] hover:bg-white border border-[#4c9e9e] px-5 rounded py-2 hover:text-[#4c9e9e] bg-[#4c9e9e] text-white duration-75 mt-5'>
                                                Select
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default FlightsModal;
