import React from "react";

function CardComponent({ mv, button }) {
  return (
    <>
      <div className="group max-w-sm rounded  shadow-lg shadow-slate-800 relative " >

        <img className=" rounded-xl h-full  border-2 border-black" src={mv.Poster} alt={mv.Title} />

        
        <div className="absolute w-full h-full  bottom-0  invisible group-hover:visible bg-gradient-to-t from-black flex-col justify-center">

          <div className="flex justify-between items-center py-4 px-3 ">
            <span className=" box-border bg-[#00184b] border-2 border-[#142549] rounded-full px-3 py-1 text-sm font-semibold text-white">
              {mv.Type}
            </span>
            {button}
          </div>
          
          <div className="px-6 mt-48  pb-4  ">
            <div className="font-bold text-2xl mb-2 text-gray-300 ">{mv.Title} ({ mv.Year})</div> 
          </div>
              
        </div>

        
      </div>
    </>
  );
}

export default CardComponent;
