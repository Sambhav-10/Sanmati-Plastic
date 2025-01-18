import Image from "next/image";
import Link from "next/link";
import React from "react";

const KeyServices = () => {
  return (
    <div className=" md:h-[95vh] ">
      <div className="text-center ">
        <div className="flex justify-center ">
          <p className="text-[#C39D63] font-bold mt-5">What We Do</p>
        </div>
        <div className="flex justify-center">
          <p
            className="bg-[C39D63] w-10 mt-2 border-b-4
             border-[#C39D63]"
          ></p>
        </div>

        <div className="flex justify-center font-bold text-black text-2xl md:text-6xl my-5">
          Key Services
        </div>

        <div className=" text-black block  md:flex justify-center mt-10 p-4 gap-8">
          <div className="rounded-xl  md:w-1/4 text-start shadow-md ">
            <img
              className="rounded-xl h-50"
              src="https://jugo-impex.com/wp-content/uploads/2022/09/10-sta-je-granulat-plastike-i-za-sta-se-sve-koristi.jpg"
              alt=""
            />
            <div className="m-2 p-2">
              <h1 className="text-2xl font-bold my-3">Plastic Granules Manufacturing</h1>
              <h4 className="text-[#C39D63] font-bold mt-1"> CATEGORY</h4>
              <p className="mt-4 text-xl text-gray-400">
                High-quality recycled granules for industrial applications
              </p>
            </div>
          </div>
          <div className="rounded-lg my-5 md:my-0 md:w-1/4 text-start shadow-md">
            <img
              className="rounded-xl "
              src="https://images.pexels.com/photos/5719838/pexels-photo-5719838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <div className="m-5 p-2 ">
              <h1 className="text-2xl  font-bold">Custom Plastic Molding</h1>
              <h4 className="text-[#C39D63] font-bold my-1">CATEGORY</h4>
              <p className="mt-2  text-xl text-gray-400 ">
                Innovative designs and durable products tailored to your needs
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full ">
          <Link
            href={"/services"}
            className=" p-4 rounded-xl my-5 bg-[#C39D63]"
          >
            Now more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeyServices;
