import React from "react";
import LoaderImage from "../assets/leafLoader.svg";
import LeafBack from "../assets/bg-leaves.png";

export default function Loader() {
  return (
    <div
      className="absolute h-full w-full flex items-center justify-center bg-opacity-40"
      style={{
        backgroundColor: "#BAB28E",
        backgroundImage: `url(${LeafBack})`,
      }}
    >
      <img
        src={LoaderImage}
        className="animate-spin h-24  mr-3 relative top-11"
      />
    </div>
  );
}
