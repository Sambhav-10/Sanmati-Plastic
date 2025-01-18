// components/PlasticGranules.js
const PlasticGranules = () => {
    return (
      <section className="py-20 bg-green-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Plastic Granules (Dana) for Manufacturing</h2>
          <p className="text-xl mb-8">Our plastic granules are manufactured from 100% recycled plastic waste and are suitable for a wide range of industrial applications, including automotive, packaging, and consumer goods.</p>
          <div className="text-violet-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <div className="text-black bg-white p-6 shadow-lg rounded-lg">
              Polyethylene Granules
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              Polypropylene Granules
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              PVC Granules
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              PET Granules
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PlasticGranules;
  