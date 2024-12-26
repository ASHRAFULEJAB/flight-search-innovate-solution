import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className=" ">
      <div className=" flex justify-between items-center ">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt=" Logo" className="w-full h-28" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-purple-700 focus:outline-none mr-3"
          >
            ☰
          </button>
        </div>
        {/* Mobile Menu Toggle */}

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "block w-full z-10" : "hidden"
          } absolute top-16 left-0 
           bg-white flex flex-col space-y-4 p-4 
           md:static md:flex md:flex-row md:space-y-0 md:space-x-8
            md:bg-transparent md:p-0 text-gray-600 font-medium`}
        >
          <Link to="/flight" className="hover:text-purple-700">
            Flight
          </Link>
          <Link to="/hotel" className="hover:text-purple-700">
            Hotel
          </Link>

          <Link to="/holiday" className="hover:text-purple-700">
            Holiday
          </Link>
          <Link to="/visa" className="hover:text-purple-700">
            Visa
          </Link>

          <Link
            to="/business-class"
            className="text-purple-600 hover:text-purple-700"
          >
            Business Class
          </Link>
          <div className="relative z-10 group ">
            <button className="hover:text-purple-700">Others</button>
            <div className="absolute  hidden group-hover:block bg-white border rounded shadow-lg mt-2 p-4 text-nowrap">
              <Link to="/option1" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </Link>
              <Link to="/option2" className="block px-4 py-2 hover:bg-gray-100">
                FaQ & Support
              </Link>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="block md:hidden mt-4 w-full">
              <button
                className="w-full bg-purple-600 text-white px-4 py-2
             rounded text-sm font-medium hover:bg-purple-700"
              >
                Login
              </button>
            </div>
          )}
        </nav>
        <div className="flex justify-center md:justify-end p-4 md:p-0 hidden md:block">
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Login
          </button>
        </div>
        {/* Mobile Login Button */}
      </div>
    </header>
  );
};

export default Header;
