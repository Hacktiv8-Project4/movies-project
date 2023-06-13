import React from "react";

function CardComponent({ mv, button }) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={mv.Poster} alt={mv.Title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{mv.Title}</div>
          {/* <p className="text-gray-700 text-base">{movie.description}</p> */}
        </div>
        <div className="px-6 py-4">
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {movie.genre}
        </span> */}
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {mv.Year}
          </span>
        </div>
        {button}
      </div>
    </>
  );
}

export default CardComponent;
