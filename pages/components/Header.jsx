import styles from "../../styles/Header.module.css"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";



const Header = () => {
    
    const [text, setText] = useState("")
   

    function handleChange(e){
        setText(e.target.value)
    }

    function click(){
        setText("")
    }


    return ( 
    <header>
        <nav className={styles.nav}>
        <div className={styles.img}><Link href="/"><Image src="/images/Logo.svg" width={"40px"} height="40px"></Image></Link>
          
        </div>
        <div className={styles.link}>
                <Link href="/popular"><a>Populares</a></Link>
                <Link href="/soon"><a>Em Breve</a></Link>
                <Link href="/series"><a>Series</a></Link>
               
        </div>
        
        <div className={styles.pesquisa}>
            <input type="text" value={text} onChange={e => {handleChange(e)}} placeholder="Pesquisar"></input>
            <button onClick={click}><Link href={text === ""? "" :  `/pesquisar/${text}` }>Pesquisar</Link></button>
        </div>
        </nav>
    </header>
     );
}
 
export default Header;