import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import axios from "axios";
import { server } from "../config";
import PopularMovie from "../components/PopularMovie";
import { useState } from "react";

export default function Home({ movies }) {
  const [page, setPage] = useState(1);
  const [numOfPages, setnumOfPages] = useState([]);

  return (
    <div>
      <div className="bg-gray-600">
        <Hero />
        <PopularMovie movies={movies.results} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&include_adult=true&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}

//`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}
