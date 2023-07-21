import { useState, useEffect } from "react";

export function useFetchMovies(url) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDFmYTkxNTAyYzU2ZjY5MDI2YzI0Y2MzYWI1ZmZmNCIsInN1YiI6IjY0NjI1NDgxZWY4YjMyMDBmZTdlMTNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QCpdi4z0v1Ou3WBD2PrR0mB4Fqe1ldanELqt-seBuIY",
    },
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  }, []);

  return {data};
}
