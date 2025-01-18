// import Image from 'next/image'

import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import KeyServices from "./components/KeyServices";
import PlasticGranules from "./components/PlasticGranules";
import Video from "./components/Video";

export default function Home() {
  return (
    <>
      <div className=" pt-20">
        <Video />
        <AboutUs />
        <KeyServices />
      </div>

      {/* <HeroSection /> */}

      {/* <PlasticGranules /> */}
    </>
  );
}
