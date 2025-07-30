import React from "react";
import { Link, NavLink } from "react-router-dom";

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
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">

        {/* logo */}
        <Link to="/" className="font-bold">Logo</Link>

        {/* menu items for desktop */}
        <div>
          <NavItems />
        </div>

        {/* cart items */}
        <div>Cart items</div>

      </nav>
    </header>
  );
};
export default Navbar;
