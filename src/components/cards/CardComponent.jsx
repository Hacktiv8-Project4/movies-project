import React from "react";


function CardComponent({ movie, button }) {

  return (
    <>
      <div className="  group max-w-sm rounded overflow-hidden shadow-lg shadow-slate-800 relative " >

        <img className=" rounded-xl h-full   " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

        
        <div className="absolute w-full h-full  bottom-0  invisible group-hover:visible bg-gradient-to-t from-black flex-col justify-center backdrop-blur-md bg-opacity-60 overflow-y-auto">

          <div className="flex justify-between items-center pt-4 pb-2 px-3 ">
            <span className=" box-border bg-gray-300 border-2 rounded-full px-3 py-1 text-sm font-bold text-[#00184b]">
              {movie.original_language}
            </span>
            {button}
          </div>
          
          <div className="px-6 overflow-auto  ">
            <div className="font-bold text-lg  text-white "><h2>{movie.title} </h2><span className="text-xs text-yellow-300">{ movie.release_date} | </span> </div> 
            <span className="text-gray-100 text-sm ">{movie.overview}</span>
          </div>
              
        </div>

        
      </div>
     
    </>
  );
}

export default CardComponent;
