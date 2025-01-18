// components/AboutUs.js
const AboutUs = () => {
  return (
    <section className="pt-24 text-black bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="my-5 md:text-3xl font-bold mb-4">Who We Are</h2>

        <div className="my-10 w-full rounded-xl flex justify-center">
          <img
            src="https://images.pexels.com/photos/3641377/pexels-photo-3641377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-full md:h-[80vh] md:flex items-center justify-center">
          <div className="hidden md:block md:w-1/2 p-10 md:flex justify-center ">
            <img
              src="https://images.pexels.com/photos/8542550/pexels-photo-8542550.jpeg?auto=compress&cs=tinysrgb&w"
              alt=""
              className="rounded-xl h-[70vh] bg-slate-400"
            />
          </div>
          <div className="md:w-1/2 md:px-32 text-black ">
            <h1 className="my-10 text-4xl font-bold">About us</h1>
            <p>
              At SanmatiPlastic, we recycle plastic waste into high-quality
              granules that are used to create new products. Our work helps
              reduce plastic pollution and supports a more sustainable, circular
              economy.
            </p>
            <h4 className="text-2xl my-5 font-bold ">
              Our Mission: Turning Waste into Value
            </h4>
            <p>
              We take plastic waste that would otherwise pollute our planet and
              recycle it into valuable materials. By producing plastic granules
              from recycled plastics,
            </p>
            <h4 className="text-2xl my-5 font-bold ">
              Our Process: Recycling for a Greener Tomorrow
            </h4>
            <p>
              We collect used plastics, process them into granules, and use
              advanced molding machines to create a wide range of products. This
              not only helps reduce landfill waste but also lowers carbon
              emissions and supports a circular economy.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 mt-10 md:mx-auto md:px-4">
        <div className="w-full  md:h-[80vh] md:flex items-center justify-center">
        <div className="md:hidden md:w-1/2 md:p-10 flex justify-center mb-5 md:mb-0">
            <img
              src="https://images.pexels.com/photos/7152280/pexels-photo-7152280.jpeg?auto=compress&cs=tinysrgb&w"
              alt=""
              className="rounded-xl h-[70vh] bg-slate-400"
            />
          </div>
          <div className="md:w-1/2 md:px-32 text-black ">
            <h1 className=" md:my-10 md:text-4xl font-bold">
              Fighting Climate Change
            </h1>
            <p >
              Plastic pollution is a major contributor to climate change, and at
              [Company Name], we aim to combat it by reducing waste and
              conserving resources. Our sustainable practices help lower
              greenhouse gas emissions and contribute to a cleaner, healthier
              planet.
            </p>
            <h4 className="text-2xl my-5 font-bold ">
              Join Us in Creating a Sustainable Future{" "}
            </h4>
            <p>
              By choosing products made from recycled plastic, you’re helping
              reduce waste, fight climate change, and promote a circular
              economy. Together, we can make a difference for a better tomorrow.
              Sanmati – Recycling for a Sustainable Future.
            </p>
          </div>
          <div className="hidden md:block md:w-1/2 p-10 md:flex justify-center ">
            <img
              src="https://images.pexels.com/photos/7152280/pexels-photo-7152280.jpeg?auto=compress&cs=tinysrgb&w"
              alt=""
              className="rounded-xl h-[70vh] bg-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
