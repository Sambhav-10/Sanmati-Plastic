// components/ContactForm.js
const ContactForm = () => {
    return (
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form action="/submit" method="POST" className="max-w-lg mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-xl">Name</label>
              <input type="text" id="name" name="name" required className="w-full p-4 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-xl">Email</label>
              <input type="email" id="email" name="email" required className="w-full p-4 mt-2 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label htmlFor="message" className="block text-left text-xl">Message</label>
              <textarea id="message" name="message" required className="w-full p-4 mt-2 border border-gray-300 rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition">Submit</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactForm;
  