// Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars} from "react-icons/fa";
import Cart from "../Cart/Cart";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const Navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Pokemons",
      link: "/pokemons",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="w-full h-auto bg-gray-800 lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="flex items-center justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Sección del logo */}
          <div>
            <Link className="text-3xl text-red-600 font-semibold tracking-[0.1rem]">
              Poke-Club
            </Link>
          </div>

          {/* Boton de activación */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <FaTimes className="text-gray-400 cursor-pointer" size={24} />
              ) : (
                <FaBars className="text-gray-400 cursor-pointer" size={24} />
              )}
            </button>
          </div>

          {/* Items del navbar */}
          <div
            className={`flex items-center space-x-5 md:space-x-0 ${
              navbar ? "block" : "hidden"
            } md:block`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Carrito y Botón Register */}
          <div className="flex items-center space-x-3">
            <Cart itemCount={cartItemCount} onAddToCart={() => setCartItemCount(cartItemCount + 1)} />
            <button className="bg-red-600 text-[1.1rem] font-normal text-white px-5 py-1.5 rounded">
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
