import Balancer from "react-wrap-balancer";
import SliderFlights from "@/components/layout/sliderFlights";
import Link from "next/link";

export default async function Flights() {

    return (
        <>
        <div className='flex mt-300px'>Enjoy!</div>
            <Link href={'/profile'}>
                <button className='hover:bg-white border border-[#4c9e9e] px-5 rounded py-2 hover:text-[#4c9e9e] bg-[#4c9e9e] text-white duration-75 mt-5' >See in profile</button>
            </Link>
        </>
    );
}
