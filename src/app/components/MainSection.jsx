// components/MainSection.js
import ServiceCard from './ServiceCard';

const MainSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <ServiceCard 
            title="Sustainable Plastic Granules (Dana) for Industry Use"
            description="We process post-consumer plastic waste into high-quality plastic granules, suitable for manufacturing various plastic products."
            link="/plastic-granules"
          />
          <ServiceCard 
            title="Environmentally Friendly Recycling Process"
            description="Our advanced recycling process ensures that plastic is repurposed efficiently, reducing waste and conserving natural resources."
            link="/recycling-process"
          />
          <ServiceCard 
            title="Serving Industries Nationwide"
            description="From automotive to packaging industries, our plastic granules serve a wide range of applications across various sectors."
            link="/services"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
