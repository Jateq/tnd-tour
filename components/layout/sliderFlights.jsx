'use client';

import sliderFlightsData from "mockapi/flights.json";
import Link from "next/link";
import './Slider.css';
import {useEffect, useState} from "react";




export default function SliderFlights() {

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

    return (
        <div className='main-flights-page'>

            <header>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path  fill='gray' d="M120-120v-80h720v80H120Zm74-200L80-514l62-12 70 62 192-52-162-274 78-24 274 246 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L194-320Z"/></svg>
                    {flightsCity}</div>
                <div> <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='gray' d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z"/></svg> </div>
                <div className='search'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='gray' d="M754-324 120-500v-220l60 20 28 84 192 54v-318l80 20 110 350 200 56q23 6 36.5 24.5T840-388q0 33-27 53t-59 11ZM120-120v-80h720v80H120Z"/></svg>
                    <input placeholder='Where to?'/>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill='gray' d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg> {flightsDeparture} - {flightsReturn}
                </div>
                <button>
                    Search
                </button>
            </header>

            <div className='flights-content'>
                <div className='filters'>
                    <h2>Filters</h2>

                </div>

                <div className='flights-slider-container'>
                    <div className='flights-slider-inner'>
                    {sliderFlightsData.flightsData.map((flight) => (
                        <div key={flight.destination} className='flights-card'>
                            <h2>{flight.destination}</h2>
                            <p>{`Price: $${flight.price}`}</p>
                            <p>{flight.desc}</p>
                            {/* Add additional flight information rendering as needed */}
                            <Link href={`/flights/${flight.destination}`}>
                                <button>View details</button>
                            </Link>
                        </div>
                    ))}
                    </div>
                </div>


            </div>


        </div>
    );
}
