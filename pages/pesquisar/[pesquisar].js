import Link from "next/link"
import styles from '../../styles/Home.module.css'

import { API_KEY } from '../api/key'

export async function getServerSideProps(context){
   
    const {params} = context
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${params.pesquisar}`)
    const json = await response.json()
    return {props: { name: params.pesquisar ,movies: json.results}}
}


const pesquisarId = ({movies, name}) => {
    
    return ( 
        <main className={styles.main} >
        <h1>{`resultados para "${name}"`}</h1>


          <div className={styles.containerNav}>
            {movies.map(movie => {
              return <div key={movie.id}>
                <Link href={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="250px" /></Link></div>})}
          </div>
      </main>
      

    );
}
 
export default pesquisarId;