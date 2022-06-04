import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Link from "next/Link"
import { useState } from 'react'


const API_KEY= "53e49a3f63f347af01773560db28ed78"

export async function getServerSideProps(){

 

  const responseTrending = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=53e49a3f63f347af01773560db28ed78&language=en-US&page=1`)
  const jsonTrending = await responseTrending.json()


  return {props: {movies: jsonTrending.results}}
}


export default function soon({movies}) {
  
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main} >
        <h1>Em breve</h1>


          <div className={styles.containerNav}>
            {movies.map(movie => {
              return <div key={movie.id}>
                <Link href={`/movies/${movie.id.toString()}`}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="250px" /></Link>
                </div>})}
          </div>
      </main>
     
      


        
    </div>
  )
}
