import React from "react";

function MovieDetailPopup({ movie, closePopup }) {
  const playTrailer = () => {
    const id = "Db5SvKPJc-w";
    if (id) {
      const url = 'https://www.youtube.com/watch?v='+id;
      window.open(url);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-75"></div>
        <div className="absolute bg-white p-4 rounded-lg">
          <img
            src={
              "https://www.themoviedb.org/t/p/w220_and_h330_bestv2" +
              movie.poster_path
            }
            alt=""
            className="rounded-md"
          />
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          <a onClick={playTrailer} data-site="Youtube" data-id="Db5SvKPJc-w" className="bg-blue-500 text-white px-4 py-2 rounded">Reproducir Trailer</a>
          <button
            onClick={closePopup}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Cerrar
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieDetailPopup;
