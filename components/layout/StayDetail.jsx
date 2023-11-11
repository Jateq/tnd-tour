import React, {useState} from 'react';
import './Slider.css'
import ReservedModal from "@/components/layout/reserved-modal";

const StayDetail = ({ stay }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <div className='stay-detail'>
            <h2>{stay.hotel}</h2>
            <p>{stay.city}</p>
            <img src={stay.img} alt={stay.hotel} />
            <p>{stay.desc}</p>
            <p>Rating: {stay.rating}</p>


            <button onClick={openModal}>Reserve</button>
            <ReservedModal showModal={showModal} setShowModal={setShowModal} />

        </div>
    );
}

export default StayDetail;
