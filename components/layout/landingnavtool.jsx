import { useState } from "react";
import Link from "next/link";

export default function Landingnavtool() {
    const [activeTab, setActiveTab] = useState('Flights');
    const [inputValue, setInputValue] = useState('');

    // For flights
    const [flightsCity, setFlightsCity] = useState('');
    const [flightsDeparture, setFlightsDeparture] = useState('')
    const [flightsReturn, setFlightsReturn] = useState('')
    const [flightsPassengers, setFlightsPassengers] = useState(0)

    function handleFlightsCityChange(event) {
        const value = event.target.value;
        setFlightsCity(value);
        localStorage.setItem('flightsCity', value);
    }

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

    function handleFlightsPassengersChange(event) {
        const value = parseInt(event.target.value, 10);
        setFlightsPassengers(value);
        localStorage.setItem('flightsPassengers', value);
    }




    // For stays
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    function handleAdultsChange(event) {
        const value = parseInt(event.target.value, 10);
        setAdults(value);
        localStorage.setItem('adults', value);
    }
    function handleChildrenChange(event) {
        const value = parseInt(event.target.value, 10);
        setChildren(value);
        localStorage.setItem('children', value);
    }
    function handleDepartureDateChange(event) {
        const value = event.target.value;
        setDepartureDate(value);
        localStorage.setItem('departureDate', value);
    }
    function handleReturnDateChange(event) {
        const value = event.target.value;
        setReturnDate(value);
        localStorage.setItem('returnDate', value);
    }




    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="container">
            <div className="nav_tool">
                <div className="nav_tabs">
                    <ul className="tab_list">
                        <li className={`tab ${activeTab === 'Flights' ? 'active' : ''}`} onClick={() => handleTabClick('Flights')}>Flights</li>
                        <li className={`tab ${activeTab === 'Stays' ? 'active' : ''}`} onClick={() => handleTabClick('Stays')}>Stays</li>
                        <li className={`tab ${activeTab === 'Tours' ? 'active' : ''}`} onClick={() => handleTabClick('Tours')}>Tours</li>
                        <li className={`tab ${activeTab === 'Membership' ? 'active' : ''}`} onClick={() => handleTabClick('Membership')}>Membership</li>
                    </ul>
                </div>
                <div className="tab_content">



                    {/*FLIGHTS*/}


                    <div className={`tab_pane ${activeTab === 'Flights' ? 'active' : ''}`} id="flights">
                        <div className="tab_container">
                            <div className="flex justify-between mb-4">
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Departure city"
                                        value={flightsCity}
                                        onChange={handleFlightsCityChange}
                                    />
                                </div>

                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="w-1/4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        value={flightsDeparture}
                                        onChange={handleFlightsDepartureChange}
                                    />
                                </div>
                                <div className="w-1/4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        value={flightsReturn}
                                        onChange={handleFlightsReturnChange}
                                    />
                                </div>
                                <div className="w-1/4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                                    <input
                                        type="number"
                                        min="1"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        value={flightsPassengers}
                                        onChange={handleFlightsPassengersChange}
                                    />
                                </div>
                                <div className='w-1/4'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                                    <Link href="/flights"> <button className="flex bg-cyan-500 hover:bg-stone-600 text-white font-bold ml-auto justify-center w-[170px] py-2 px-4 rounded-md transition-[0.3s]">
                                        Continue
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/*STAYS*/}


                    <div className={`tab_pane ${activeTab === 'Stays' ? 'active' : ''}`} id="myStays">
                        <div className="tab_container">
                            <div className="flex justify-between mb-4">

                                <div className="w-full">
                                    <div className='flex'>
                                    <div className='w-1/2'><label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="adults">Adults:</label>
                                    <input
                                        type="number"
                                        id="adults"
                                        min="1"
                                        value={adults}
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"

                                        onChange={handleAdultsChange}
                                    />
                                    </div>
                                    <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="children">Children:</label>
                                    <input
                                        type="number"
                                        id="children"
                                        min="0"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"

                                        value={children}
                                        onChange={handleChildrenChange}
                                    />
                                    </div>
                                </div>


                                </div>

                            </div>
                            <div className="flex  mb-4">
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        value={departureDate}
                                        onChange={handleDepartureDateChange}
                                    />
                                </div>
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Return</label>
                                    <input
                                        type="date"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        value={returnDate}
                                        onChange={handleReturnDateChange}

                                    />
                                </div>
                                <div className='w-1/3'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                                    <Link href="/stays"><button className=" flex bg-cyan-500 hover:bg-stone-600 text-white font-bold ml-auto justify-center w-[170px] py-2 px-4 rounded-md transition-[0.3s]">
                                        Continue
                                    </button></Link>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/*Tours*/}


                    <div className={`tab_pane ${activeTab === 'Tours' ? 'active' : ''}`} id="tours">
                        <div className="tab_container">
                            <div className="flex justify-between mb-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Going to"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <div className='flex'>
                                        <div className='w-1/2'>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Cabin</label>
                                            <input
                                                type="number"
                                                min="0"
                                                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div className='w-1/2'><label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="adults">Adults:</label>
                                            <input
                                                type="number"
                                                id="adults"
                                                min="1"
                                                value={adults}
                                                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"

                                                onChange={handleAdultsChange}
                                            />
                                        </div>
                                        <div className='w-1/2'>
                                            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="children">Children:</label>
                                            <input
                                                type="number"
                                                id="children"
                                                min="0"
                                                className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"

                                                value={children}
                                                onChange={handleChildrenChange}
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                            <div className="flex  mb-4">
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Transportation</label>
                                    <select
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        name="transportation"
                                        id="transportation"
                                    >
                                        <option value="cruise">Cruise</option>
                                        <option value="car">Car</option>
                                        <option value="bus">Bus</option>
                                        <option value="plane">Plane</option>
                                    </select>
                                </div>
                                <div className="w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                                    <div className="flex justify-between">
                                        <input
                                            type="number"
                                            placeholder="min nights"
                                            className="block w-1/2 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                        <input
                                            type="number"
                                            placeholder="max nights"
                                            className="block w-1/2 py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>


                                <div className='w-1/3'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                                    <Link href="/tours"><button className=" flex bg-cyan-500 hover:bg-stone-600 text-white font-bold ml-auto justify-center w-[170px] py-2 px-4 rounded-md transition-[0.3s]">
                                        Continue
                                    </button></Link></div>
                            </div>
                        </div>
                    </div>



                    {/*Membership*/}


                    <div className={`tab_pane ${activeTab === 'Membership' ? 'active' : ''}`} id="membership">
                        <div className="tab_container">
                            <div className="flex justify-between mb-4">
                                <div className="w-1/2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your Email"
                                    />
                                </div>

                                <div className="w-1/2 flex">
                                    <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your Name"
                                    />
                                    </div>
                                    <div className='w-1/2'>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Surname</label>
                                        <input
                                            type="text"
                                            className="block w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Your Surname"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="flex mb-4">
                                <div className="w-1/2">
                                    <h1 className="block mt-7 ml-2 font-medium text-gray-700 mb-2 text-2xl">Try our new membership
                                        travel more, spend less
                                    </h1>

                                </div>
                                <div className='w-1/2'>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">&nbsp;</label>
                                    <Link href="/membership"> <button className=" flex bg-cyan-500 hover:bg-stone-600 text-white font-bold ml-auto justify-center w-[170px] py-2 px-4 rounded-md transition-[0.3s]">
                                        Continue
                                    </button></Link></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}