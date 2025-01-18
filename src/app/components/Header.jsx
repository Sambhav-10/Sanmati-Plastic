// // components/Header.js
// "use client";
// import Link from "next/link";

// import HeroSection from "./HeroSection";
// import MainSection from "./MainSection";
// import PlasticGranules from "./PlasticGranules";
// import { useState } from "react";

// const Header = () => {
//   const [Mobile, SetMobile] = useState(true);
//   const [active, SetActive] = useState(false);

//   return (
//     <header className="fixed w-full z-10 bg-[#C39D63]  text-white py-4 h-20">
//       <div className="h-full container mx-auto flex justify-around items-center px-4">
//         <h1 className="text-xl md:text-2xl font-bold">Sanmati Plastic</h1>

//         <nav>
//           <ul className=" flex space-x-6">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/services">Services</Link>
//             </li>
//             <li>
//               <Link href="/about">About</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;




"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="h-24 fixed w-full z-10 bg-[#C39D63] text-white py-4 md:flex items-center">
      <div className="container mx-auto flex justify-between md:justify-around items-center px-4 h-20">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold"> <Link href="/" className="hover:text-gray-200">
        Sanmati Plastic 
              </Link></h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex  space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#C39D63]">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            <li>
              <Link
                href="/"
                className="hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
