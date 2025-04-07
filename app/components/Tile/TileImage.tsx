import Image from "next/image";
import { Movie } from "@/app/types/Media";

export default function TileImage({ posterPath, title }: { posterPath: Movie["poster_path"]; title: Movie["title"] }) {
  return (
    <div className="relative max-h-80 max-w-[500px] bg-gray-200 flex items-center justify-center aspect-[1/2]">
      {posterPath ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover"
          priority // Important for LCP
        />
      ) : (
        <div className="w-full h-full py-40 px-12 flex items-center justify-center text-gray-500">
          No Image Available
        </div>
      )}
    </div>
  );
}
