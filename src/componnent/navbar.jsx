import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { Cart, Logo, Search, SearchM, UserIcon } from "./asset/svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#FDF5E6] py-10 lg:px-[50px] text-[#353535] xxl:px-[100px]">
      <div className="mx-[5%] xsm:mx-[3%] lg:mx-auto flex text-sm lg:text-[20px] font-serif justify-between items-center">
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu}>
            <Logo />
          </Link>
        </div>
        <div className="flex-grow flex justify-center">
          <div className="hidden sm:flex md:space-x-2 lg:space-x-8 font-medium">
            <Link to="/" className="p-[10px]" onClick={closeMenu}>
              Home
            </Link>
            <a href="#" className="p-[10px]" onClick={closeMenu}>
              Shop
            </a>
            <a href="#" className="p-[10px]" onClick={closeMenu}>
              About us
            </a>
            <a href="#" className="p-[10px]" onClick={closeMenu}>
              Contact us
            </a>
          </div>
        </div>
        <div className="hidden sm:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="px-10 py-1 lg:py-2 border border-[#D4AF37] text-[#7A7A7A] rounded-full w-[150px] xl:w-[280px] focus:outline-none"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search />
            </span>
          </div>
          <Link to="/cart">
            <Cart className="cursor-pointer" />
          </Link>
          <UserIcon className="cursor-pointer" />
        </div>
        <div className="sm:hidden flex gap-5 items-center">
          <SearchM onClick={closeMenu}/>
          <Link to="/cart" onClick={closeMenu}>
            <Cart className="cursor-pointer" />
          </Link>
          <button onClick={toggleMenu}>
            {isOpen ? (
              <X className="text-[#D4AF37]" size={24} />
            ) : (
              <Menu className="text-[#D4AF37]" size={24} />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-white z-10 w-full h-screen border-t border absolute flex flex-col mt-4 px-[5%] space-y-2">
          <Link to="/" className="block py-4" onClick={closeMenu}>
            Home
          </Link>
          <a href="#" className="block py-4" onClick={closeMenu}>
            Shop
          </a>
          <a href="#" className="block py-4" onClick={closeMenu}>
            About us
          </a>
          <a href="#" className="block py-4" onClick={closeMenu}>
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
