import { useEffect, useState } from "react";
const KEY = "<Enter your API key here>";
export function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      callback?.();
      //browser API for cleaning up unecessary requests
      // const controller = new AbortController()
      // const signal = controller.signal;
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const req = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            // {signal}
          );
          if (!req.ok) throw new Error("Something went wrong!");
          const data = await req.json();
          if (data.Response === "False") throw new Error("Movie not found!");
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
      //cleanup function to clean up unecessary requests
      // return function(){
      //   controller.abort()
      // }
    },
    [query]
  );
  return { movies, isLoading, error };
}
