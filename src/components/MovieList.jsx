import { useFetchMovies } from "../data/useFetchMovies";
import MovieCard from "./MovieCard";

function MovieList() {
  const { data } = useFetchMovies(
    "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1"
  );

  if (data === null) {
    return <h1 className="text-white font-bold text-xl" >No hay películas aún.</h1>;
  }

  return (
    <div className="container px-16 mx-auto grid grid-cols-6 gap-4 mt-3">
        {data.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}></MovieCard>
        ))}
    </div>
  );
}

export default MovieList;
