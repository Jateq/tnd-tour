'use client';

import React, { useState, useEffect } from 'react';
import sliderStaysData from "mockapi/stays.json";
import './Slider.css';
import Link from "next/link"; // Import your CSS file

export default function SliderStays() {
    const [sliderValue, setSliderValue] = useState(sliderStaysData.staysData);

    const getStayById = (id) => {
        return sliderStaysData.staysData.find(stay => stay.id === id);
    }






    return (
        <>
            <div className='slider-container'>
                <div className='slider-inner'>
                    {sliderValue.map((stay) => (
                        <div key={stay.id} className='card'>
                            <h2>{stay.hotel}</h2>
                            <p>{stay.city}</p>
                            <img src={stay.img} alt={stay.hotel} />
                            <p>{stay.desc}</p>
                            <p>Rating: {stay.rating}</p>
                            <Link href={`/stays/${stay.id}`}>
                                <button >View details</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

