import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const click = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a className="flex items-center py-4 px-2">
                  <span className="font-semibold text-gray-500 text-lg">
                    Arraytics
                  </span>
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">
                <Link
                  to={"/"}
                  className="py-4 px-2 border-green-500 font-semibold "
                >
                  Items
                </Link>
                <Link
                  to={"/createitem"}
                  className="py-4 px-2 border-green-500 font-semibold "
                >
                  Createitem
                </Link>
                <Link
                  to={"/users"}
                  className="py-4 px-2 border-green-500 font-semibold "
                >
                  Users
                </Link>
                <Link
                  to={"/createuser"}
                  className="py-4 px-2 border-green-500 font-semibold "
                >
                  CreateUser
                </Link>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={click}
              >
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`${showMenu ? `` : `hidden`} mobile-menu`}>
          <ul className="">
            <li>
              <Link
                to={"/"}
                className="block text-sm px-2 py-4 transition duration-300"
              >
                Items
              </Link>
            </li>
            <li>
              <Link
                to={"/createitem"}
                className="block text-sm px-2 py-4 transition duration-300"
              >
                Createitem
              </Link>
            </li>
            <li>
              <Link
                to={"/users"}
                className="block text-sm px-2 py-4 transition duration-300"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to={"/createuser"}
                className="block text-sm px-2 py-4 transition duration-300"
              >
                CreateUser
              </Link>
              {/* <a>Contact Us</a> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
