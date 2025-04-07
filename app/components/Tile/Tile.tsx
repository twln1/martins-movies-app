import TileDescription from "./TileDescription";
import TileImage from "./TileImage";
import { Movie } from "@/app/types/Media";
import PlayButton from "../Buttons/PlayButton";

export default function Tile({ movie }: { movie: Movie }) {
  return (
    <div className="relative flex flex-col h-full max-w-[350px] overflow-hidden rounded-md hover:-translate-y-3 duration-200 drop-shadow-xl">
      <div className="absolute top-1/2 right-4 transform -translate-y-2/3 z-10">
        <PlayButton />
      </div>

      <TileImage posterPath={movie.poster_path} title={movie.title} />
      <TileDescription
        id={movie.id}
        genres={movie.genres}
        imdbId={movie.imdb_id}
        voteAverage={movie.vote_average}
        title={movie.title}
        overview={movie.overview}
      />
    </div>
  );
}
