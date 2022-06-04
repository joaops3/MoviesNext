import {useRouter} from "next/router"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../../styles/PaginaFilme.module.css"
import ReactPlayer from 'react-player'
import { useState } from "react"

const API_KEY= "53e49a3f63f347af01773560db28ed78"



export async function getServerSideProps(context){
    
    "http://localhost:3000/api/expecifico/${params.filmeId}"
    
     "https://api.themoviedb.org/3/movie/${params.filmeId}?api_key=53e49a3f63f347af01773560db28ed78&language=pt-BR"
    
    const {params} = context
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.filmeId}?api_key=53e49a3f63f347af01773560db28ed78&language=pt-BR`)
    const json = await response.json()
    return {props: {movie: json}}
}

//   export async function getStaticPaths(){
//      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
//      const data = await response.json()
//      const list = await data.results
//      const paths = list.map(filme => ({params: {filmeId: `${filme.id}`}}))
//      return {paths, fallback: false}

//    }




const filmeId = ({movie}) => {

    const [trailerUrl, setTrailer] = useState(null)
    const [genresName] = movie.genres
    const [production] = movie.production_countries
    const id = movie.id


    const handleTrailer= async (id) =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=53e49a3f63f347af01773560db28ed78&language=en-US`)
        const data = await response.json()

        for(let trailer of data.results){
            if(trailer.name ==="Official Trailer"){
                setTrailer(trailer.key)                
            }
        }
    
       
    }

    return ( 
    <>
       
        <div className={styles.containerFilme}>
            <h1>{movie.title}</h1> 
            <div><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="300px"></img></div>
            <div className={styles.filmeText}>
               <div className={styles.textItem}> Nota: {movie.vote_average},</div>
               <div className={styles.textItem}> Genero: {genresName.name},</div>
               <div className={styles.textItem}> Pais: {production.name},</div>
               <div className={styles.textItem}> Data de lançamento: {movie.release_date}</div>
               <div className={styles.column}>
               <div className={styles.textItemTrailer} onClick={ ()=> handleTrailer(id)}> Assistir Trailer</div>
               <div className={styles.video}>
               {trailerUrl && <ReactPlayer url={`https://www.youtube.com/watch?v=${trailerUrl}`} controls playing={true}></ReactPlayer>}
               </div>
               </div>
               <div className={styles.textItemOver}> Resumo: {movie.overview}</div>
              

               
            </div>


            
        </div>

    </>
    );
}
 
export default filmeId;