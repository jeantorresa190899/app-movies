import React, { useState } from "react";
import MovieDetailPopup from "./MovieDetailPopup";

function MovieCard({ movie }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <a onClick={togglePopup} className="mx-auto bg-slate-100 p-2 rounded-lg cursor-pointer relative transition-all">
        <img
          src={
            "https://www.themoviedb.org/t/p/w220_and_h330_bestv2" +
            movie.poster_path
          }
          alt=""
          className="rounded-md"
        />
        <div>
          <h1 className="font-bold m-2 text-lg leading-tight">{movie.title}</h1>
          <h2 className="text-slate-600 mx-2 leading-tight">
            {movie.release_date}
          </h2>
        </div>
        <div className="absolute right-1 top-1 p-2 rounded-full transition-all hover:bg-gradient-to-r from-slate-800 to-slate-950 hover:shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        </div>
      </a>

      {/* popup */}

      {showPopup && 
        <MovieDetailPopup movie={movie} closePopup={closePopup}></MovieDetailPopup>
      }
    </>
  );
}

export default MovieCard;
