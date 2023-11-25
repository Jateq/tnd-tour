'use client';

import Balancer from "react-wrap-balancer";
import { useState} from "react";
import Mountains from "@/components/layout/mountains";
import LandingNavTool from "@/components/layout/landingnavtool";
import { DEPLOY_URL } from "@/lib/constants";

export default function Landing() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const screenHeight = window.innerHeight;
    window.scrollTo({ top: screenHeight/2 + 170, behavior: 'smooth' });
    setClicked(true);
  };

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="mb-[1px]"></div>
      </div>
      <Mountains/>
      <LandingNavTool />

      <div className="mb-[900px]"></div>

    </>
  )
}