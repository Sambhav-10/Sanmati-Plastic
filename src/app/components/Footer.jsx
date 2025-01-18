import Link from "next/link";

// components/Footer.js
const Footer = () => {
    return (
      <footer className="p-4 bg-[#C39D63] text-white  ">
        <div className="w-full flex items-center justify-evenly">
          <p className=" font-bold">Ready to Make a Difference?</p>
          <div className="mb-4  md:flex justify-center font-bold space-x-6 mt-4">
           <Link href="/about">About</Link>
           <Link href="/contact">Contact </Link>
          </div>
        </div>
          <p className="text-center">© 2025 Sanmati Plastic. All Rights Reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  