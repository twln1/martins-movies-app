import { Movie } from "@/app/types/Media";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WatchedButton from "../Buttons/WatchedButton";
export default function TileDescription({
  id,
  title,
  overview,
  imdbId,
  voteAverage,
  genres,
}: {
  id: Movie["id"];
  title: Movie["title"];
  overview: Movie["overview"];
  imdbId: Movie["imdb_id"];
  voteAverage: Movie["vote_average"];
  genres: Movie["genres"];
}) {
  const genreNames =
    genres
      ?.slice(0, 2)
      .map((genre) => genre.name)
      .join(", ") || "N/A";
  return (
    <div className="bg-white p-8 flex flex-col flex-grow ">
      <h3 className="line-clamp-1 pb-2">{title}</h3>
      <div className="flex justify-between text-center items-center text-sm">
        <p>
          <StarIcon style={{ color: "gold" }} />
          <span className="pb-2 pl-2">{voteAverage?.toFixed(1)}/10</span>
        </p>
        <div>{genreNames}</div>
      </div>
      <p className="overflow-hidden text-ellipsis line-clamp-5 mt-4 mb-8">{overview}</p>
      <div className="flex justify-between mt-auto">
        <Button
          rel="noreferrer"
          target="_blank"
          href={`https://www.imdb.com/title/${imdbId}`}
          color="secondary"
          variant="contained"
          disableElevation
          disabled={!imdbId}
        >
          Details
        </Button>
        <WatchedButton id={id} />
      </div>
    </div>
  );
}
