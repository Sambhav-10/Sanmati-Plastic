// components/ServiceCard.js
const ServiceCard = ({ title, description, link }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
        <h3 className="text-xl font-semibold text-green-600 mb-4">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700">Discover More →</a>
      </div>
    );
  };
  
  export default ServiceCard;
  