import {useRouter} from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../../styles/PaginaFilme.module.css"
import { useState } from "react"
import ReactPlayer from "react-player"

const API_KEY= "53e49a3f63f347af01773560db28ed78"



export async function getServerSideProps(context){
   
    
    const {params} = context
    const response = await fetch(`https://api.themoviedb.org/3/tv/${params.seriesId}?api_key=53e49a3f63f347af01773560db28ed78&language=pt-BR`)
    const json = await response.json()
    return {props: {movie: json}}
}


const seriesId = ({movie}) => {
    const [trailerUrl, setTrailer] = useState(null)
    const [genresName] = movie.genres
    const [production] = movie.production_countries
   
 

    return ( 
    <>
       
        <div className={styles.containerFilme}>
            <h1>{movie.name}</h1> 
            <div><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="300px"></img></div>
            <div className={styles.filmeText}>
               <div className={styles.textItem}> Nota: {movie.vote_average},</div>
               <div className={styles.textItem}> Genero: {genresName.name},</div>
               <div className={styles.textItem}> Pais: {production.name},</div>
               <div className={styles.textItem}> Numero de episodios: {movie.number_of_episodes}</div>
               <div className={styles.textItemOver}> Resumo: {movie.overview}</div>
            </div>
            
        </div>
    </>
    );
}
 
export default seriesId;