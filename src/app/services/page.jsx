import React from "react";

const page = () => {
  return (
    <section className="pt-24 text-black bg-white text-center">
      <div className="container mx-auto p-4">
        <h2 className="my-5 text-3xl font-bold mb-4">Our Services </h2>

        {/* <div className="my-10 w-full rounded-xl flex justify-center">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3k3dmEycjdkdXhka2hvZG1zZXExaGx5bGF2cHpjbGw5NDRjdmtiMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cvpWnSPOrJhCK56v7b/giphy.gif"
            alt=""
          />
        </div> */}
        <div className="md:w-full md:h-[80vh] md:flex items-center justify-center">
          <div className="md:w-1/2 p-10 flex justify-center ">
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3k3dmEycjdkdXhka2hvZG1zZXExaGx5bGF2cHpjbGw5NDRjdmtiMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cvpWnSPOrJhCK56v7b/giphy.gif"
              alt=""
              className="rounded-xl h-[70vh] md:w-[30vw] bg-slate-400"
            />
          </div>
          <div className="md:w-1/2 md:px-32 text-black ">
            <h1 className="md:my-10 text-2xl font-bold">
              Our Expertise in Sustainable Plastic Solutions
            </h1>
            <h1 className="my-10 text-1xl font-bold">
              Delivering innovative and eco-friendly plastic recycling and
              manufacturing solutions tailored to your needs
            </h1>

            <p>
              At Sanmati Plastic, we specialize in transforming plastic waste
              into valuable resources through advanced recycling techniques,
              premium granule manufacturing, and precision plastic molding. Our
              services are designed to support industries with sustainable,
              high-quality solutions while contributing to a cleaner, greener
              future{" "}
            </p>
          </div>
        </div>

        <div className="p-5 md:w-full md:h-[80vh] md:flex items-center justify-center">
        <div className="md:hidden md:w-1/2 p-10 flex justify-center ">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjE1b2NyNHJ4YjRtZzM5cXU1cTd1emh0eWVjejhtODY3Ymg0cTF2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WayAbbaCcY7W82dLcX/giphy.webp"
              alt=""
              className="rounded-xl md:h-[70vh] bg-slate-400"
            />
          </div>
          <div className="md:w-1/2 md:px-32 text-black ">
            <h1 className="md:my-10 text-2xl font-bold">Plastic Recycling </h1>
            <h1 className="md:my-10 text-1xl font-bold">
              Transforming plastic waste into reusable raw materials.
            </h1>

            <p>
              Our advanced recycling facilities turn discarded plastic waste
              into high-quality plastic granules. With state-of-the-art
              technology, we ensure minimal waste and maximum efficiency. By
              choosing us, you contribute to a sustainable future while reducing
              environmental impact.
            </p>
            <h1 className="my-10 text-1xl font-bold">Key Features </h1>
            <li>Collection of post-consumer and industrial plastic waste.</li>
            <li>Sorting, shredding, and cleaning processes.</li>
            <li>High-quality recycled granules for various applications.</li>
          </div>
          <div className="hidden md:block md:w-1/2 p-10 flex justify-center ">
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjE1b2NyNHJ4YjRtZzM5cXU1cTd1emh0eWVjejhtODY3Ymg0cTF2aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WayAbbaCcY7W82dLcX/giphy.webp"
              alt=""
              className="rounded-xl h-[70vh] bg-slate-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
