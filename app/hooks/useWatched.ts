import { useEffect, useState } from "react";

export function useWatched(id: number) {
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched_movies") || "[]");
    setIsWatched(watched.includes(id));
  }, [id]);

  const toggleWatched = () => {
    const watched: number[] = JSON.parse(localStorage.getItem("watched_movies") || "[]");

    let updated: number[];
    if (watched.includes(id)) {
      updated = watched.filter((movieId) => movieId !== id);
      setIsWatched(false);
    } else {
      updated = [...watched, id];
      setIsWatched(true);
    }

    localStorage.setItem("watched_movies", JSON.stringify(updated));
  };

  return { isWatched, toggleWatched };
}