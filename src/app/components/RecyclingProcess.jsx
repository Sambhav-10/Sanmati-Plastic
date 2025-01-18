// components/RecyclingProcess.js
const RecyclingProcess = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Recycling Process</h2>
          <ol className="list-decimal list-inside text-xl space-y-4">
            <li><strong>Collection:</strong> Plastic waste is collected from various sources.</li>
            <li><strong>Sorting:</strong> Plastics are sorted by type and color for purity.</li>
            <li><strong>Shredding:</strong> Plastics are shredded into smaller pieces.</li>
            <li><strong>Washing & Drying:</strong> We clean plastics to remove contaminants.</li>
            <li><strong>Granulation:</strong> Clean plastic is melted and shaped into granules.</li>
            <li><strong>Quality Control:</strong> Granules are tested for consistency and quality.</li>
          </ol>
        </div>
      </section>
    );
  };
  
  export default RecyclingProcess;
  