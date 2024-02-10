import React from "react";
import Search from "../assets/search.png";
import Nav from "../assets/nav.jpg";
import { Link } from "react-router-dom";

export default function NavBar({ handleInput, showSearchBar }) {
  // for scrolling to the bottom (content) when clicking the search button
  const scrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className=" shadow-lg h-20 flex items-center px-2 md:gap-3 fixed top-0 w-full z-10 justify-between"
        style={{ backgroundImage: `url(${Nav})` }}
      >
        <Link to="/">
          <h1 className="text-red-600 font-bold text-sm bg-white p-1 pt-2 pb-2 rounded md:text-2xl md:p-3 sm:p-3 lg:p-3 lg:text-2xl">
            Kalvium <span className="text-red-700">Books</span>
          </h1>
        </Link>
        {showSearchBar && (
          <div className="flex items-center shadow-lg sm:w-fit md:w-70  lg:w-80 lg:rounded-3xl h-30 p-2 text-center rounded-2xl justify-between bg-white w-2/5 mr-2 ml-2">
            <input
              className="pl-2 border-none outline-none w-3/5 text-xs md:text-sm"
              placeholder="Search here"
              onChange={handleInput}
            />
            <button className="hover:shadow-inner" onClick={scrollBottom}>
              <img src={Search} className="h-5 md:h-9" />
            </button>
          </div>
        )}
        {showSearchBar ? (
          <Link to="/register">
            <button className="md:w-40 bg-blue-500 shadow-lg shadow-blue-500/50 text-xs md:text-sm p-2 sm:p-3 sm:w-fit rounded-md text-white font-semibold  hover:bg-blue-600 ">
              Register
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button className="md:w-40 bg-blue-500 shadow-lg shadow-blue-500/50 text-sm md:text-sm p-2 sm:p-3 sm:w-fit rounded-md text-white font-semibold  hover:bg-blue-600 mr-3">
              Back to home
            </button>
          </Link>
        )}
      </nav>
    </>
  );
}
