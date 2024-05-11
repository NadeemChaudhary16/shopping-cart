import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import cartIcon from "../assets/cart-icon.svg"
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  
  return (
    <div className="bg-gray-100">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="text-4xl ml-8 font-semibold">
            <h1>EcomZy</h1>
          </div>
        </NavLink>

        <div className="flex items-center font-normal  space-x-6">
          <NavLink to="/">
            <p className="hover:text-green-600">Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              {/* <FaShoppingCart className="text-2xl" /> */}
              <img src={cartIcon} alt=""  className="w-10"/>
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
            justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
