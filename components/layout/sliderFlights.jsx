'use client';

import sliderFlightsData from "mockapi/flights.json";
import Link from "next/link";
import './Slider.css';
import {useEffect, useState} from "react";
import FlightsModal from "@/components/layout/flights-modal";




export default function SliderFlights() {
    const [showModal, setShowModal] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);

        const openModal = (flight) => {
            setSelectedFlight(flight);
            setShowModal(true);
        };
    const [flightsCity, setFlightsCity] = useState("");
    const [flightsDeparture, setFlightsDeparture] = useState("");
    const [flightsReturn, setFlightsReturn] = useState("");
    const [flightsPassengers, setFlightsPassengers] = useState(0);

    const [sortAscending, setSortAscending] = useState(false);
    const [sortDescending, setSortDescending] = useState(false);
    const [sortAny, setSortAny] = useState(true)
    const [selectedPersonalItem, setSelectedPersonalItem] = useState(null);
    const [filterCheckedBag, setFilterCheckedBag] = useState(null);
    const [filterCarryOnBag, setFilterCarryOnBag] = useState(null);

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

    function handleFlightsDepartureChange(event) {
        const value = event.target.value;
        setFlightsDeparture(value);
        localStorage.setItem('flightsDeparture', value);
    }

    function handleFlightsReturnChange(event) {
        const value = event.target.value;
        setFlightsReturn(value);
        localStorage.setItem('flightsReturn', value);
    }


    const [searchTerm, setSearchTerm] = useState('');
    const filteredFlights = sliderFlightsData.flightsData.filter(flight =>
        flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortFlights = (flights) => {
        if (sortAscending) {
            return flights.slice().sort((a, b) => a.price - b.price);
        } else if (sortDescending) {
            return flights.slice().sort((a, b) => b.price - a.price);
        } else if (sortAny){
            return flights;
        } else{
            return flights;
        }
    };

    const filterFlights = (flights) => {
        return flights.filter((flight) => {
            const personalItemMatch = selectedPersonalItem ? flight.personalItem === selectedPersonalItem : true;
            const checkedBagMatch = filterCheckedBag ? flight.checkedBag === filterCheckedBag : true;
            const carryOnBagMatch = filterCarryOnBag ? flight.carryOnBag === filterCarryOnBag : true;

            return personalItemMatch && checkedBagMatch && carryOnBagMatch;
        });
    };

    const sortedAndFilteredFlights = filterFlights(sortFlights(filteredFlights));

    return (
        <div className='main-flights-page'>

            <header>
                <div className='departure-city'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path  fill='gray' d="M120-120v-80h720v80H120Zm74-200L80-514l62-12 70 62 192-52-162-274 78-24 274 246 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L194-320Z"/></svg>
                    {flightsCity}
                </div>
                <div> <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='gray' d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg> </div>
                <div className='search'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='gray' d="M754-324 120-500v-220l60 20 28 84 192 54v-318l80 20 110 350 200 56q23 6 36.5 24.5T840-388q0 33-27 53t-59 11ZM120-120v-80h720v80H120Z"/></svg>
                    <input value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                           placeholder='Where to?'/>
                </div>

                <div className='date'>
                    <input className='ml-2' type="date" value={flightsDeparture} onChange={handleFlightsDepartureChange}/>
                    <p> - </p>
                    <input className='mr-2' type="date" value={flightsReturn} onChange={handleFlightsReturnChange}/>
                </div>


                <button>
                    Search
                </button>
            </header>

            <div className='flights-content'>
                <div className='filters'>
                        <h2>Filters:</h2>
                    <p className='text-[15px] text-gray-500 mt-2'>Showing {sortedAndFilteredFlights.length} results</p>

                    <h3 className='mb-2'>Filter by Price:</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="any"
                            name="priceSort"
                            checked={sortAny}
                            onChange={() => {
                                setSortAny(!sortAny)
                                setSortDescending(false);
                                setSortAscending(false);

                            }}
                        />
                        <label htmlFor="any" className='ml-2'>Any</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="ascending"
                            name="priceSort"
                            checked={sortAscending}
                            onChange={() => {
                                setSortAscending(!sortAscending);
                                setSortDescending(false);
                                setSortAny(false);

                            }}
                        />
                        <label htmlFor="ascending" className='ml-2'>Ascending</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="descending"
                            name="priceSort"
                            checked={sortDescending}
                            onChange={() => {
                                setSortDescending(!sortDescending);
                                setSortAscending(false);
                                setSortAny(false);

                            }}
                        />
                        <label htmlFor="descending" className='ml-2'>Descending</label>
                    </div>

                    <h3>Filter by Personal Item:</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="personalItemAny"
                            name="personalItemFilter"
                            checked={selectedPersonalItem === null}
                            onChange={() => setSelectedPersonalItem(null)}
                        />
                        <label htmlFor="personalItemAny" className='ml-2'>Any</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="personalItemIncluded"
                            name="personalItemFilter"
                            checked={selectedPersonalItem === 'included'}
                            onChange={() => setSelectedPersonalItem('included')}
                        />
                        <label htmlFor="personalItemIncluded" className='ml-2'>Included</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="personalItemExtraFee"
                            name="personalItemFilter"
                            checked={selectedPersonalItem === 'extra fee'}
                            onChange={() => setSelectedPersonalItem('extra fee')}
                        />
                        <label htmlFor="personalItemExtraFee" className='ml-2'>Extra fee</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="personalItemNotAvail"
                            name="personalItemFilter"
                            checked={selectedPersonalItem === 'not avail.'}
                            onChange={() => setSelectedPersonalItem('not avail.')}
                        />
                        <label htmlFor="personalItemNotAvail" className='ml-2'>Not avail.</label>
                    </div>

                    <h3>Filter by Carry On Bag:</h3>
                <div>
                    <input
                        type="checkbox"
                        id="carryOnBagAny"
                        name="carryOnBagFilter"
                        checked={filterCarryOnBag === null}
                        onChange={() => setFilterCarryOnBag(null)}
                    />
                    <label htmlFor="carryOnBagAny" className='ml-2'>Any</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="carryOnBagIncluded"
                        name="carryOnBagFilter"
                        checked={filterCarryOnBag === 'included'}
                        onChange={() => setFilterCarryOnBag('included')}
                    />
                    <label htmlFor="carryOnBagIncluded" className='ml-2'>Included</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="carryOnBagExtraFee"
                        name="carryOnBagFilter"
                        checked={filterCarryOnBag === 'extra fee'}
                        onChange={() => setFilterCarryOnBag('extra fee')}
                    />
                    <label htmlFor="carryOnBagExtraFee" className='ml-2'>Extra fee</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="carryOnBagNotAvail"
                        name="carryOnBagFilter"
                        checked={filterCarryOnBag === 'not avail.'}
                        onChange={() => setFilterCarryOnBag('not avail.')}
                    />
                    <label htmlFor="carryOnBagNotAvail" className='ml-2'>Not avail.</label>
                </div>





                <h3>Filter by Checked Bag:</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="checkedBagAny"
                            name="checkedBagFilter"
                            checked={filterCheckedBag === null}
                            onChange={() => setFilterCheckedBag(null)}
                        />
                        <label htmlFor="checkedBagIncluded" className='ml-2'>Any</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="checkedBagIncluded"
                            name="checkedBagFilter"
                            checked={filterCheckedBag === 'included'}
                            onChange={() => setFilterCheckedBag('included')}
                        />
                        <label htmlFor="checkedBagIncluded" className='ml-2'>Included</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="checkedBagExtraFee"
                            name="checkedBagFilter"
                            checked={filterCheckedBag === 'extra fee'}
                            onChange={() => setFilterCheckedBag('extra fee')}
                        />
                        <label htmlFor="checkedBagNotAvail" className='ml-2'>Extra fee</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="checkedBagNotAvail"
                            name="checkedBagFilter"
                            checked={filterCheckedBag === 'not avail.'}
                            onChange={() => setFilterCheckedBag('not avail.')}
                        />
                        <label htmlFor="checkedBagNotAvail" className='ml-2'>Not avail.</label>
                    </div>


                </div>


            <div className='flights-slider-container'>
                    <div className='flights-slider-left'>
                        {sortedAndFilteredFlights.length > 0 ? (
                            sortedAndFilteredFlights.map((flight) => (
                            <div key={flight.destination} className='flights-card'>

                                <div className='flights-card-info'>
                                    <div className='mt-[5px]'>
                                        <h2>{flightsCity}</h2>
                                        <div className='flex flex-col justify-center text-center'>
                                            <p className='text-xs'>Direct</p>
                                            <div className='w-[150px] border-b border-gray-400 '>
                                            </div>
                                            <p className='text-xs'>{flight.time}</p>
                                        </div>
                                        <h2>{flight.destination}</h2>
                                    </div>

                                    <div className='mt-[20px] '>
                                        <h2>{flight.destination}</h2>
                                        <div className='flex flex-col justify-center text-center'>
                                            <p className='text-xs'>Direct</p>
                                            <div className='w-[130px] border-b border-gray-400 '>
                                            </div>
                                            <p className='text-xs'>{flight.time}</p>
                                        </div>
                                        <h2>{flightsCity}</h2>
                                    </div>
                                <p className='text-xs pl-4'>{flight.desc} with TND Fly</p>

                                </div>

                                <div className='extra-fee'>
                                    <div className='extra-fee-block'>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                 viewBox="0 -960 960 960" width="24">
                                                <path
                                                    d="M440-756q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4ZM280-80q-33 0-56.5-23.5T200-160v-320q0-85 44.5-152T360-732v-28q0-50 34.5-85t85.5-35q51 0 85.5 35t34.5 85v28q63 29 105 85.5T758-518q-18-2-40-2t-40 3q-14-69-69-116t-129-47q-83 0-141.5 58.5T280-480v320h172q6 20 16.5 41.5T490-80H280Zm40-320h170q14-21 37.5-43t48.5-37H320v80Zm400-40q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14ZM490-400Z"/>
                                            </svg>
                                            <span>Personal item</span>
                                        </p>
                                        <p className={flight.personalItem === 'included' ? 'text-green-600' : (flight.personalItem === 'not avail.' ? 'text-red-600' : '')}>
                                            {flight.personalItem}
                                        </p>
                                    </div>
                                    <div className='extra-fee-block'>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                 viewBox="0 -960 960 960" width="24">
                                                <path
                                                    d="M360-200v-400h-40v400h40Zm108 80H320q-33 0-56.5-23.5T240-200v-400q0-33 23.5-56.5T320-680h240v-120q-33 0-56.5-23.5T480-880h160v372q-24 8-41.5 16T560-470v-130H440v400h4q3 24 9 42t15 38Zm252-320q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440Zm0 320q11 0 18.5-7.5T746-146q0-11-7.5-18.5T720-172q-11 0-18.5 7.5T694-146q0 11 7.5 18.5T720-120Zm-18-76h36v-10q0-11 6-19.5t14-16.5q14-12 22-23t8-31q0-29-19-46.5T720-360q-23 0-41.5 13.5T652-310l32 14q3-12 12.5-21t23.5-9q15 0 23.5 7.5T752-296q0 11-6 18.5T732-262q-6 6-12.5 12T708-236q-3 6-4.5 12t-1.5 14v14ZM400-400Zm-40 200v-400 400Zm80 0v-400 400Z"/>
                                            </svg>
                                            <span>Carry on bag</span>
                                        </p>
                                        <p className={flight.carryOnBag === 'included' ? 'text-green-600' : (flight.carryOnBag === 'not avail.' ? 'text-red-600' : '')}>
                                            {flight.carryOnBag}
                                        </p>
                                    </div>
                                    <div className='extra-fee-block'>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20"
                                                 viewBox="0 -960 960 960" width="24">
                                                <path
                                                    d="M280-120q-33 0-56.5-23.5T200-200v-440q0-33 23.5-56.5T280-720h80v-100q0-25 17.5-42.5T420-880h120q25 0 42.5 17.5T600-820v100h80q33 0 56.5 23.5T760-640v440q0 33-23.5 56.5T680-120q0 17-11.5 28.5T640-80q-17 0-28.5-11.5T600-120H360q0 17-11.5 28.5T320-80q-17 0-28.5-11.5T280-120Zm0-80h400v-440H280v440Zm40-40h60v-360h-60v360Zm130 0h60v-360h-60v360Zm130 0h60v-360h-60v360ZM480-420Zm-60-300h120v-100H420v100Z"/>
                                            </svg>
                                            <span>Checked bag</span>
                                        </p>

                                        <p className={flight.checkedBag === 'included' ? 'text-green-600' : (flight.checkedBag === 'not avail.' ? 'text-red-600' : '')}>
                                            {flight.checkedBag}
                                        </p>
                                    </div>


                                    <div className='clickable-block'>
                                        <div>
                                            <span>Price:</span>
                                            <p>{`KZT ${flight.price}`}</p>
                                        </div>

                                        <button onClick={() => openModal(flight)}>View details</button>
                                </div>

                                </div>

                            </div>

                        ))) : (
                            <div className='flights-slider-container'>
                                <div className='no-flights-card'>
                                    <p>We do not perform flights to that city yet</p>
                                </div>
                            </div>
                            )}

                    </div>
                </div>


            </div>

            <FlightsModal showModal={showModal} setShowModal={setShowModal} flight={selectedFlight}/>

        </div>
    );
}
