import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Link from "next/link";
import { useState } from "react";
import { API_KEY } from "./api/key";
import Banner from "./components/Banner";

export async function getServerSideProps() {
  const responseTrending = await fetch(
    `http://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  );
  const jsonTrending = await responseTrending.json();

  const responseTop = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const jsonTop = await responseTop.json();

  return {
    props: { movies: jsonTrending.results, moviesTop: jsonTop.results },
  };
}

export default function Home({ movies, moviesTop }) {
  return (
    <div className={styles.container}>
    
      <Head>
        <title>Filmes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main className={styles.main}>
          <h1>Destaque da semana</h1>

          <div className={styles.containerNav}>
            {movies.map((movie) => {
              return (
                <div key={movie.id}>
                  <Link href={`/movies/${movie.id.toString()}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      width="250px"
                      alt="movie poster"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
        <main className={styles.main}>
          <h1>Top Rated</h1>

          <div className={styles.containerNav}>
            {moviesTop.map((movie) => {
              return (
                <div key={movie.id}>
                  <Link href={`/movies/${movie.id.toString()}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      width="250px"
                      alt="movie poster"
                    />
                  </Link>
                  <div>Nota: {movie.vote_average}</div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
