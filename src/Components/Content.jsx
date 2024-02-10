import React, { useEffect, useState } from "react";
import Axios from "axios";
import Books from "../assets/books.webp";
import Leaf from "../assets/leaf.png";
import Leafr from "../assets/leafr.png";
import LeafBack from "../assets/bg-leaves.png";
import Loader from "./Loader";

export default function Content({ input }) {
  const [data, setData] = useState({ books: [] });
  const [loading, setLoading] = useState(true);

  const getData = () => {
    Axios.get("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  //for filtering the books data according to the input.
  const filteredArrayOfBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(input)
  );

  return (
    <>
      {/* for showing the result books name */}
      {input && (
        <div className="md:flex md:flex-col justify-center items-center hidden">
          {filteredArrayOfBooks.length !== 0 && (
            <div className="absolute right-10 top-44 h-64 w-44 p-1 m-1 z-5 bg-white bg-opacity-70 rounded">
              {filteredArrayOfBooks.map((eachBook) => (
                <div key={eachBook.id} className="cursor-pointer">
                  <h1 className="font-thin text-center p-1 m-2 text-xs bg-red-300 rounded-r">
                    {eachBook.title}
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div
        className=" shadow-sm h-96  px-4 mt-20 flex text-center justify-between items-center z-40"
        style={{
          backgroundColor: "#BAB28E",
          backgroundImage: `url(${LeafBack})`,
        }}
      >
        <img src={Leaf} className="z-12 absolute top-24 left-36" />
        <img
          src={Leafr}
          className="z-12 absolute  h-12 .lg:inset-4 rotate-45"
        />
        <h1 className="font-body font-bold md:text-4xl shadow-xl  absolute md:static  lg:text-5xl  w-11/12 text-3xl bg-opacity-70 rounded-md p-6 bg-white md:bg-opacity-40 animate-blink">
          "A room without books is like a body without a soul." - Marcus Tullius
          Cicero
        </h1>
        <img src={Books} className="md:h-50 lg:h-2/3  md:block hidden" />
        <img src={Leaf} className="z-12 absolute right-10 top-80" />
        <img src={Leafr} className="z-12 absolute right-10 top-14" />
      </div>

      <div className="flex flex-wrap gap-20 justify-center m-10">
        {filteredArrayOfBooks.length == 0 && input && (
          <h1 className="font-body m-28 sm:m-36  text-2xl md:text-5xl text-center text-red-500">
            No Result found for {input}
          </h1>
        )}
        {filteredArrayOfBooks.map((eachBook) => {
          return (
            <div
              key={eachBook.id}
              className="flex flex-col items-center justify-center shadow-2xl rounded-lg cursor-pointer w-60 hover:bg-gray-200 hover:shadow-inner"
            >
              <img
                src={eachBook.imageLinks.smallThumbnail}
                alt="image"
                className="p-6 h- w-45 "
              />
              <div className="flex flex-col justify-center items-center ">
                <h1 className="font-semibold  m-2 text-center text-xl">
                  {eachBook.title}
                </h1>
                <p className="text-slate-400 m-6 text-center mb-6">
                  {eachBook.authors}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
