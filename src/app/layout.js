import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sanmati Plastic",
  description: "Recycling Today for a Greener Tomorrow!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* <Navbar/> */}
        <Header />
        <main className="bg-white">
          {children}
          <div className=" w-14 md:w-16 bottom-10 md:bottom-16 sticky hover:opacity-60 left-5 md:left-10" >
            
            <Link target="_blank" href={"https://api.whatsapp.com/send/?phone=919584841008&text&type=phone_number&app_absent=0"}> <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
              alt=""
            /></Link>
           
            
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
