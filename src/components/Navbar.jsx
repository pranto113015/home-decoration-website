import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const navItems = () => [
  { path: "/", label: "Furnitures" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];



const NavItems = () => {
  return (
    <ul className="flex flex-col md:flex-row  items-center md:space-x-8 gap-8">
      {
        navItems().map((item, index) => (
            <li key={index}>
            <NavLink to={item.path} className={({isActive})=>isActive 
            ? 'text-primary font-bold' 
            : 'hover:text-primary'
            }>{item.label}</NavLink>
            </li>
        ))
      }
    </ul>
  );
};



const Navbar = () => {
  return (
    <header>
      <nav className="max-w-screen-1xl container mx-auto flex justify-between items-center py-6 px-6">

        {/* logo */}
        <Link to="/" className="font-bold">Logo</Link>

        {/* menu items for desktop */}
        <div className="hidden md:flex">
          <NavItems />
        </div>



        {/* hamburger menu for mobile  */}
        <div className="md:hidden text-xl cursor-pointer hover:text-primary">
          <FaBars className="text-xl"/>
        </div>

        {/* cart items */}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingBag className="text-xl"/>
          <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>

      </nav>
    </header>
  );
};
export default Navbar;
