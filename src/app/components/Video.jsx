"use client";
import React, { useEffect, useRef } from "react";

const Video = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   // Set the playback speed to 0.5x (slower)
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 0.5; // Adjust this value for desired speed
  //   }
  // }, []);
  return (
    <div className="relative w-full h-[650px] overflow-hidden bg-black bg-opacity-60 z-0">
      <video
        // ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src={
            "https://videos.pexels.com/video-files/3186590/3186590-uhd_2560_1440_30fps.mp4"
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className=" relative z-10 flex bg-black opacity-50 justify-center  items-center h-full">
        <div className="">
          <h1 className="w-full text-white text-2xl md:text-4xl font-bold text-center">
            Turning Plastic Waste into Sustainable Possibilities
          </h1>
          <h3 className="pl-0 p-5 w-full m-5  text-white  md: text-xl font-bold text-center">
            We specialize in manufacturing high-quality plastic granules and
            molded products, contributing to a circular economy.
          </h3>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Video;
