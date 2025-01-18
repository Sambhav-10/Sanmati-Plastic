import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full text bg-white">
      <div className=" block text-center md:flex justify-center">
        <div className="w-full md:w-1/3 p-20 ">
          <p className="text-gray-500 font-bold">OUR STORY</p>
          <div className="flex justify-center">
            <p
              className="w-16 border-b-4
             border-[#C39D63] ml-1 text-center"
            ></p>
          </div>
 
          <h1 className="text-4xl text-black mt-10">Welcome To Royal</h1>
          <p className="text-sm  mt-5 text-gray-500">
            Our Story At Sanmati Plastic, we began with a simple goal: to reduce
            plastic waste and create a more sustainable future. By recycling
            plastic into high-quality granules, we’re turning waste into
            valuable resources and supporting a circular economy.
          </p>
          <h4 className="text-xl mt-10 text-gray-700 font-bold">Our Impact</h4>
          <p className="mt-5 text-gray-500">
            {" "}
            We collect plastic waste, transform it into granules, and make
            useful products. Our process helps reduce plastic pollution and
            carbon emissions.
          </p>
          <h4 className="text-xl mt-5 text-gray-700 font-bold">Our Vision</h4>
          <p className="mt-5 text-gray-500">
            We’re committed to creating a sustainable future, fighting climate
            change, and building a world where waste is minimized and resources
            are reused. Sanmati Plastic – Recycling for a Greener Tomorrow.
          </p>
        </div>

        <div className="w-full flex justify-center md:w-1/3 md:p-5  ">
          <Image
            src="https://images.pexels.com/photos/4498089/pexels-photo-4498089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Description of image"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
