import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/slices/moviesSlice";

function HeaderComponent() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchMovies(searchTerm));
    setSearchTerm("");  
    console.log(searchTerm)
  };
  return (
    <nav className="  md:fixed md:top-0 md:left-0 md:right-0 z-30 h-[72px] bg-opacity-20  backdrop-blur-sm bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 max-sm:justify-center ">

          <div className="flex items-center max-sm:hidden ">
            <div className="flex-shrink-0 max-sm:invisible">
              <i className="fa-solid fa-film mr-1" style={{color:"rgb(253 224 71 )"}}/>
              <span className="text-white cursor-pointer font-bold font-[Poppins]">MovieList</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="text-gray-300  hover:text-white mx-3 my-2 text-sm font-medium hover:border-b-2 hover:border-b-white"
                >
                  Home
                </a>
                <a
                  href="/saved"
                  className="text-gray-300  hover:text-white mx-3 my-2 text-sm font-medium hover:border-b-2 hover:border-b-white"
                >
                  Favorites
                </a>
              </div>
            </div>
          </div>


          <div className="flex ">
            <div className="relative mx-auto ">
              <form onSubmit={handleSearch} className="flex text-white ">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search a movie "
                  className="px-4 py-2 border rounded-3xl pr-16 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gray-300 text-white px-4 py-2 ml-2 rounded-xl bg-opacity-30    hover:bg-gray-300 hover:text-black"
                >
                  Search
                </button>
              </form>
            </div>
          </div>


        </div>
      </div>
    </nav>
  );
}

export default HeaderComponent;
