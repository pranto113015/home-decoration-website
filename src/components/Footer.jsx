import React from "react";
import {  FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-black dark:bg-gray-800 dark:text-white pt-2 pb-5">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
        {/* logo and details */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">
            <Link to="/">HATIL</Link>
          </h2>
          <p className="md:mr-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            nam?
          </p>
        </div>


        {/* services */}

<div>
    <h2 className="text-xl font-semibold mb-4">
    Services
    </h2>
        <ul>
            <li>
                <Link to='/' className='hover:text-primary'>Email Marketing</Link>
                
            </li>
            <li>
                <Link to='/' className='hover:text-primary'>Campains</Link>
                
            </li>
            <li>
                <Link to='/' className='hover:text-primary'>Banding</Link>
                
            </li>
        </ul>
</div>


<div>
    <h2 className="text-xl font-semibold mb-4">
    Furnitures
    </h2>
        <ul>
            <li>
                <Link to='/' className='hover:text-primary'>Beds</Link>
                
            </li>
            <li>
                <Link to='/' className='hover:text-primary'>Chair</Link>
                
            </li>
            <li>
                <Link to='/' className='hover:text-primary'>All</Link>
                
            </li>
        </ul>
</div>


<div>
    <h2 className="text-xl font-semibold mb-4">
    Follow Us
    </h2>
        <ul>
            <li>
                <Link to='/' className='hover:text-primary flex items-center space-x-2'>
                   <FaFacebookF /> <span>FaceBook</span>
                </Link>
                
            </li>
            <li>
                <Link to='/' className='hover:text-primary flex items-center space-x-2'>
                   <FaTwitter /> <span>Twitter</span>
                </Link>
                
            </li>
            <li>
                <Link to='/' className='hover:text-primary flex items-center space-x-2'>
                   <FaInstagram /> <span>Instagram</span>
                </Link>
                
            </li>
        </ul>
</div>
      </div>


      {/* copyright */}
<div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
  <p>© {new Date().getFullYear()} HATIL. All rights reserved.</p>

  <div className="flex items-center gap-4">
    <Link to='/' className='hover:text-primary'>Terms & Conditions</Link>
    <Link to='/' className='hover:text-primary'>Privacy Policy</Link>
    
  </div>
</div>


    </footer>
  );
};

export default Footer;
