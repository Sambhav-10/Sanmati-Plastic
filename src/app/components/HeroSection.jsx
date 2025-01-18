// components/HeroSection.js



const HeroSection = () => {
  return (
    <section className="bg-green-500 text-white py-20 text-center">
     

      <div className=" w-full h-[600px] bg-[url(https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] ">
        <div className="text-white text-center bg-black  bg-opacity-60 h-full w-full flex items-center">
          <div className=" md:p-0">
            <h1 className="text-4xl md:text-7xl text-bold text-white font-bold ">
              Turning Plastic Waste into Sustainable Possibilities.
            </h1>
            <div className="w-full flex justify-center">
              <p className="text-l w-1/2 md:text-xl mt-9">
                We specialize in manufacturing high-quality plastic granules and
                molded products, contributing to a circular economy.
              </p>
            </div>

            <div className="mt-9 space-x-9 ">
              <button className="border-2 border-white p-2">
                {" "}
                Explore Our Products
              </button>
              <button className="bg-[#C39D63] p-2">Contact Now</button>
            </div>
            <div className="flex justify-center mt-9 ">
              {/* <img width={"30px"}className={} src="https://cdn-icons-png.flaticon.com/512/159/159666.png"   alt="" /> */}
            </div>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;
