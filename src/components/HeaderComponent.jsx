import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/slices/moviesSlice";
import { Link } from "react-router-dom";

function HeaderComponent() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  let [open, setOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchTerm));
    setSearchTerm("");  
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-30 h-[72px] bg-opacity-20  backdrop-blur-sm bg-black ">
    <div className="bg-transparent md:flex items-center justify-between py-4 md:px-10 px-7">
      <div className="font-bold text-2xl cursor-pointer items-center font-[Poppins] text-gray-300">
      <i className="fa-solid fa-film mr-1" style={{color:"rgb(253 224 71 )"}}/> 
        ListMovies
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
      >
        <i
          className={
            open
              ? "fa-solid fa-xmark text-gray-300"
              : "fa-solid fa-bars text-gray-300"
          }
        ></i>
      </div>

      <ul
        // duration-100 ease-in 
        className={` bg-opacity-70  backdrop-blur-xl bg-black md:bg-opacity-0 md:backdrop-blur-none md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ${
          open ? "" : "top-[-490px]  "
        }`}
      >
        <li className="md:ml-8 text-md md:my-0 my-7 ">
          <Link
            to="/"
            className="text-gray-300 hover:text-gray-400 duration-100 hover:border-b-2 hover:border-b-gray-400"
          >
            Home
          </Link>
        </li>
        <li className="md:ml-8 text-md md:my-0 my-7 mr-3 ">
          <Link
            to="/saved"
            className="text-gray-300 hover:text-gray-400 duration-100 hover:border-b-2 hover:border-b-gray-400"
          >
            Favorites
          </Link>
        </li>
        <div className="relative mx-auto text-gray-400">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 bg-black/50 rounded-xl mr-2 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute left-40 mt-1 md:right-0 md:mt-1 md:mr-4"
            >
              <i className="fa-solid fa-magnifying-glass text-gray-200"></i>
            </button>
          </form>
        </div>
      </ul>
    </div>
  </div>
  );
}

export default HeaderComponent;
