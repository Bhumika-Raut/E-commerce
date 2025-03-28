import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import {useState} from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} alt="Logo" className="w-36 h-auto" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="group flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
        <NavLink
          to="/collection"
          className="group flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
        <NavLink to="/about" className="group flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
        <NavLink
          to="/contact"
          className="group flex flex-col items-center gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="" />
        <div className="relative group">
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="hidden absolute right-0 pt-4 group-hover:block">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
          <p className="absolute -right[-5px] -bottom-1 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className="w-5 cursor-pointer sm:hidden" />
      </div>
      {/* Sidebar menu for smaller screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0' }`}>
        <div className="flex flex-col text-gray-600">
        <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
  <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
  <p>Back</p>
</div>

          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
