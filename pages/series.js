import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Link from "next/link"
import { useState } from 'react'



export async function getServerSideProps(){

  const responseTrending = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=53e49a3f63f347af01773560db28ed78&language=en-US&page=1`)
  const jsonTrending = await responseTrending.json()

  const responseTop = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=53e49a3f63f347af01773560db28ed78&language=en-US&page=1`)
  const jsonTop = await responseTop.json()

  return {props: {movies: jsonTrending.results, moviesTop: jsonTop.results }}
}


export default function series({movies, moviesTop}) {
  
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main} >
        <h1>Destaque da semana</h1>


          <div className={styles.containerNav}>
            {movies.map(movie => {
              return <div key={movie.id}>
                <Link href={`/series/${movie.id.toString()}`}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="250px"  alt="movie poster"/></Link>
                </div>})}
          </div>
      </main>
      <main className={styles.main} >
        <h1>Top Rated</h1>


          <div className={styles.containerNav}>
            {moviesTop.map(movie => {
              return <div key={movie.id}>
                <Link href={`/series/${movie.id.toString()}`}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="250px"  alt="movie poster" /></Link>
                <div>Nota: {movie.vote_average}</div>
                </div>})}
               
          </div>
      </main>
      


        
    </div>
  )
}
