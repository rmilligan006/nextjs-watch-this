import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="bg-white shadow-sm rounded-lg cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={700}
          height={800}
          className="rounded-t-lg"
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-1">{movie.title}</div>
          <p className="text-gray-700 text-base mb-2">{movie.release_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;