import Banner from "../components/Banner";
import FilterButton from "../components/FilterButton";
import MovieList from "../components/MovieList";

function HomePage() {
  return (
    <div className="bg-slate-200 w-full">
      <Banner></Banner>
      <FilterButton></FilterButton>
      <MovieList></MovieList>
    </div>
  );
}

export default HomePage;
