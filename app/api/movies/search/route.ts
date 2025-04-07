import { NextResponse } from "next/server";
import { Movie } from "@/app/types/Media";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") || "";
  const page = searchParams.get("page") || "1";

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 }
    );
  }

  const url = `${process.env.TMDB_API_URL}/search/movie?query=${encodeURIComponent(query)}&page=${page}&include_adult=false`;
  try {
    const data = await fetchData(url);

    const moviesWithAdditionalData = await retrieveAdditionalData(data.results);
    return NextResponse.json({ ...data, results: moviesWithAdditionalData });

  } catch (error) {
    console.error("Error fetching search results:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}

async function fetchData(endpoint: string) {
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from endpoint: ${endpoint}`);
  }

  return response.json();
}

async function retrieveAdditionalData(movies: Movie[]) {
  return Promise.all(
    movies.map(async (movie) => {
      try {
        const movieData = await fetchData(`${process.env.TMDB_API_URL}/movie/${movie.id}`);
        return {
          ...movie,
          imdb_id: movieData.imdb_id || null,
          genres: movieData.genres || [],
        };
      } catch (error) {
        console.error(`Error fetching details for movie ID: ${movie.id}. Error: ${error}`);
        return { ...movie, imdb_id: null, genres: [] };
      }
    })
  );
}
