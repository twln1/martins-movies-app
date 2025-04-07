import { Movie } from "@/app/types/Media";
import { useState, useEffect } from "react";

export function useFetchMovieData(query: string, currentPage: number){
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const url = query
      ? `/api/movies/search?query=${encodeURIComponent(query)}&page=${currentPage}`
      : `/api/movies/popular?page=${currentPage}`;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch movies");

        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, currentPage]);

  return { movies, loading, error, totalPages };
};
