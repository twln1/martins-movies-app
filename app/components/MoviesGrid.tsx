"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Tile from "@/app/components/Tile/Tile";
import { Movie } from "@/app/types/Media";
import Pagination from "@/app/components/Pagination";
import SearchBar from "./SearchBar";
import { useFetchMovieData } from "@/app/hooks/useFetchMovieData";
import { Suspense } from "react";
import Loader from "@/app/components/Loader";

export default function MoviesGrid() {
  return (
    <Suspense fallback={<Loader />}>
      <MoviesGridContent />
    </Suspense>
  );
}

function MoviesGridContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const { movies, loading, error, totalPages } = useFetchMovieData(query, currentPage);
  const handleSearch = (searchQuery: string) => {
    router.push(`/?query=${searchQuery}&page=1`);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    router.push(`/?query=${query}&page=${page}`);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="row">
        <div className="py-8 max-w-3xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>

        {movies.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <p>No results found for your search.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {movies.map((movie: Movie) => (
                <Tile movie={movie} key={movie.id} />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Pagination count={totalPages} page={currentPage} onPageChange={handlePageChange} color="primary" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
