import styles from "../../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const navigate = useRouter();
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function click() {
    navigate.replace(`/pesquisar/${text}`);
    setText("");
  }
  function enter(e) {
    console.log("fdas");
    if (e.key === "Enter") {
      navigate.replace(`/pesquisar/${text}`);
      setText("");
    }
  }

  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.img}>
          <Link href="/">
            <Image src="/images/Logo.svg" width={"40px"} height="40px"></Image>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/popular">
            <a>Populares</a>
          </Link>
          <Link href="/soon">
            <a>Em Breve</a>
          </Link>
          <Link href="/series">
            <a>Series</a>
          </Link>
        </div>

        <div className={styles.pesquisa}>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Pesquisar"
            onKeyDown={(e) => enter(e)}
          ></input>
          <button onClick={click}>
            <Link href="#">Pesquisar</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
