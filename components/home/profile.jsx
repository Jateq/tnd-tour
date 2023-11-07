'use client';

import { useState, useMemo } from 'react';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

import './profile.css'
import Image from "next/image";

function Profile({ session }) {
    const [name, setName] = useState("Temirlan");
    const [age, setAge] = useState(19);
    const [location, setLocation] = useState("Almaty, KZ");
    const [bio, setBio] = useState("Student at KBTU");
    const [isEditing, setIsEditing] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(true);


    const { email, image } = session?.user || {};
    const handleEditClick = () => {
        setIsEditing(true);
        setIsDisplayed(false);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setIsDisplayed(true);
    };

    const displayedBlock = useMemo(() => (
        <div className='displayed-block'>
            <h1>{name}</h1>

            <p>Age: {age}</p>
            <p>Location: {location}</p>
            <p>Bio: {bio}</p>
        </div>
    ), [name, age, location, bio]);

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

            {isDisplayed && displayedBlock}
            {isEditing ? (
                <div>
                    <label>
                        Name:
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
                </div>
            ) : (
                <button onClick={handleEditClick}>Edit</button>
            )}

            </div>
            <div>
                Hello
            </div>
        </div>
    );
}

export default Profile;