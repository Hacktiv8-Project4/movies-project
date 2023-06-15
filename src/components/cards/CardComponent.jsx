import React from "react";

function CardComponent({ movie, button }) {
  return (
    <>
      <div className="  group max-w-sm rounded overflow-hidden shadow-lg shadow-slate-800 relative " >

        <img className=" rounded-xl h-full   " src={movie.Poster} alt={movie.Title} />

        
        <div className="absolute w-full h-full  bottom-0  invisible group-hover:visible bg-gradient-to-t from-black flex-col justify-center">

          <div className="flex justify-between items-center py-4 px-3 ">
            <span className=" box-border bg-[#00184b] border-2 border-[#142549] rounded-full px-3 py-1 text-sm font-semibold text-white">
              {movie.Type}
            </span>
            {button}
          </div>
          
          <div className="px-6 mt-48  pb-4  ">
            <div className="font-bold text-2xl mb-2 text-gray-300 ">{movie.Title} ({ movie.Year})</div> 
          </div>
              
        </div>

        
      </div>
    </>
  );
}

export default CardComponent;
