import React from "react";
import LeafBack from "../assets/bg-leaves.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="h-30 p-4 mt-10 bg-cover w-full"
      style={{ backgroundImage: `url(${LeafBack})` }}
    >
      <div className="flex justify-between">
        <h1 className="font-body font-bold text-xl md:text-3xl">
          Designed by Swasti Mohanty
        </h1>
        <Link to="https://reactnd-books-api.udacity.com/books">
          <button className="bg-blue-500 shadow-lg text-xs md:text-xl shadow-blue-500/50 p-3 rounded-md text-white font-semibold hover:bg-blue-600 ">
            "Reactnd-books-api"
          </button>
        </Link>
      </div>
    </footer>
  );
}
