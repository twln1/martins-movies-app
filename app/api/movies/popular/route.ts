import { Movie } from '@/app/types/Media';
import { NextResponse } from 'next/server';

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  const response = await fetch(
    `${process.env.TMDB_API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
    options
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to fetch popular movies' }, { status: 500 });
  }

  const data = await response.json();
  const moviesWithImdbId = await retrieveAdditionalData(data.results);
  data.results = moviesWithImdbId;

  return NextResponse.json(data);
}

async function retrieveAdditionalData(movies: Movie[]) {
  return Promise.all(
    movies.map(async (movie) => {

      try {
        const response = await fetch(
          `${process.env.TMDB_API_URL}/movie/${movie.id}`,
          options
        );

        if (!response.ok) {
          console.error(`Failed to fetch details for movie ID: ${movie.id}`, response);
          return { ...movie, imdb_id: null, genres: [] };
        }

        const movieData = await response.json();
        return { ...movie, imdb_id: movieData.imdb_id, genres: movieData.genres };
      } catch (error) {
        console.error(
          `Error fetching details for movie ID: ${movie.id}. Error: ${error}`
        );
        return { ...movie, imdb_id: null, genres: [] };
      }
    })
  );
}