import React from "react";
import { FaF, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-black dark:bg-gray-800 dark:text-white pt-2 pb-5">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-8">
        {/* logo and details */}
        <div>
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
                  <FaTwitter /> <span>Twitter</span>
                </Link>
                
            </li>
        </ul>
</div>
      </div>
    </footer>
  );
};

export default Footer;
