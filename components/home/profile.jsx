'use client';

import { useState, useMemo } from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { useMembership } from '../layout/MembershipContext';

import './profile.css'
import Image from "next/image";
import Link from "next/link";

function Profile({ session }) {
    const { email, image } = session?.user || {};
    const { selectedMembership } = useMembership();

    //Flights
    const flightsDestination = localStorage.getItem('flightsDestination');
    const flightsPrice = localStorage.getItem('flightsPrice');
    const storedFlightsCity = localStorage.getItem('flightsCity');
    // const storedFlightsTo = localStorage.getItem('flightsTo');
    const storedFlightsDeparture = localStorage.getItem('flightsDeparture');
    const storedFlightsReturn = localStorage.getItem('flightsReturn');
    const storedFlightPassengers = localStorage.getItem('flightsPassengers');
    console.log( storedFlightsCity, storedFlightsDeparture, storedFlightsReturn, storedFlightPassengers);


    // Stays
    const storedStayCity = localStorage.getItem('stayCity');
    const storedStayHotel = localStorage.getItem('stayHotel');
    const storedAdults = localStorage.getItem('adults');
    const storedChildren = localStorage.getItem('children');
    const storedDepartureDate = localStorage.getItem('departureDate');
    const storedReturnDate = localStorage.getItem('returnDate');

    const [name, setName] = useState(email);
    const [age, setAge] = useState(19);
    const [location, setLocation] = useState("Almaty, KZ");
    const [bio, setBio] = useState("Student at KBTU");
    const [bigEdit, setBigEdit] = useState(true);
    const [bigStays, setBigStays] = useState(false);
    const [bigFlights, setBigFlights] = useState(false);
    const [bigMembership, setBigMembership] = useState(false);
    const [bigNotifications, setBigNotifications] = useState(false);
    const [bigHelp, setBigHelp] = useState(false);



    const [isEditing, setIsEditing] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);


    const handleNavClick = (navName) => {
        setBigEdit(false);
        setBigStays(false);
        setBigFlights(false);
        setBigMembership(false);
        setBigNotifications(false);
        setBigHelp(false);

        switch (navName) {
            case 'edit':
                setBigEdit(true);
                break;
            case 'stays':
                setBigStays(true);
                break;
            case 'flights':
                setBigFlights(true);
                break;
            case 'membership':
                setBigMembership(true);
                break;
            case 'notifications':
                setBigNotifications(true);
                break;
            case 'help':
                setBigHelp(true);
                break;
            default:
                break;
        }
    };


    const handleEditClick = () => {
        setIsEditing(true);
        setIsDisplayed(false);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setIsDisplayed(true);
    };

    const displayedBlock = useMemo(() => (
        <main className='person-info'>
            <h1>{name}</h1>

            <p>Location: {location}</p>
            <p>Bio: {bio}</p>
            <p>Age: {age}</p>
        </main>

    ), [name, age, location, bio]);


    const editBlock = useMemo(() => (
        <div>
            {isEditing ? (
                <main className='person-info'>
                    <label>
                        Username:
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>
                        Age:
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    </label>
                    <label>
                        Bio:
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                    </label>
                    <button onClick={handleSaveClick}>Save</button>
                </main>
            ) : (
                <div className='person-info'>
                    {displayedBlock}
                    <button onClick={handleEditClick}>Edit</button>
                </div>
            )}
        </div>
    ), [isEditing, displayedBlock, name, age, bio, handleSaveClick, handleEditClick]);

    const staysBlock = useMemo(() => {
        if (
            storedDepartureDate === null ||
            storedReturnDate === null ||
            storedAdults === null ||
            storedChildren === null ||
            storedStayCity === null ||
            storedStayHotel === null
        ) {
            return (
                <div>
                    <div>Your stays</div>
                    <div className='profile-stay-block'>
                        <p>Nothing reserved yet</p>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div>Your stays</div>
                    <div className='profile-stay-block'>
                        <p>You have reserved from</p>
                        <p>{storedDepartureDate} to {storedReturnDate}</p>
                        <p>for {storedAdults} adults and {storedChildren} children</p>
                        <p>to {storedStayCity} in {storedStayHotel}</p>
                    </div>
                </div>
            );
        }
    }, [storedDepartureDate, storedReturnDate, storedAdults, storedChildren, storedStayCity, storedStayHotel]);


    const flightsBlock = useMemo(() => {
    if (
        storedFlightsCity === null ||
        flightsDestination === null ||
        storedFlightPassengers === null ||
        storedFlightsDeparture === null ||
        storedFlightsReturn === null ||
        flightsPrice === null
    ) {
        return (
            <div>
                <div>Your Flights</div>
                <div className='profile-stay-block'>
                    <p>Nothing booked yet</p>
                </div>

            </div>
        );
    } else {
        return(
        <div>
            <div>Your Flights</div>
            <div className='profile-stay-block'>
                <p>You have reserved flight from</p>
                <p>{storedFlightsCity} to {flightsDestination}</p>
                <p>for {storedFlightPassengers} passenger/s</p>
                <p>from {storedFlightsDeparture} till {storedFlightsReturn}</p>
                <p>for KZT {flightsPrice}</p>
            </div>
        </div>
        );
        }
    }, [flightsDestination, flightsPrice, storedFlightPassengers, storedFlightsCity, storedFlightsDeparture, storedFlightsReturn]);

    const membershipBlock = useMemo(() => (
        <div>
            <div>Your membership</div>
            <div className='profile-stay-block'>
                <p className='italic text-gray-700'>{selectedMembership}</p>
            </div>
            <div className='person-info mt-10'>
                <Link href='/membership'>
                <button className=''>Change the plan</button>
                </Link>
            </div>
        </div>
    ), [selectedMembership]);

    const notificationsBlock = useMemo(() => (
        <div>Email notifications</div>
    ), []);

    const helpBlock = useMemo(() => (
        <div>Help</div>
    ), []);



    return (
        <div className="main-block">
            <div className="profile">
                <Image
                    alt={email}
                    src={image || `https://avatars.dicebear.com/api/micah/${email}.svg`}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div className="left">
                    <div className="left-settings">


                            <div onClick={() => handleNavClick('edit')}>
                                Edit profile
                            </div>
                        <div onClick={() => handleNavClick('flights')}>
                            Your flights
                        </div>
                        <div onClick={() => handleNavClick('stays')}>
                            Your stays
                        </div>

                        <div onClick={() => handleNavClick('membership')}>
                            Your membership
                        </div>
                        <div onClick={() => handleNavClick('notifications')}>
                            Email notifications
                        </div>
                        <div onClick={() => handleNavClick('help')}>
                            Help
                        </div>

                    </div>
                </div>
            </div>

                <div className='right'>
                    <div className="big-edit">
                    <div className='editprof-block'>

                        {bigEdit && editBlock}
                        {bigStays && staysBlock}
                        {bigFlights && flightsBlock}
                        {bigMembership && membershipBlock}
                        {bigNotifications && notificationsBlock}
                        {bigHelp && helpBlock}

                    </div>


                </div>

                </div>
        </div>

    );
}

export default Profile;