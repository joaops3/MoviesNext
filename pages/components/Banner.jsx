import styles from "../../styles/Banner.module.css";

const Banner = () => {
  return (
    <>
      <div className={styles.video}>
        <video autoPlay loop>
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <h1>Os melhores Filmes</h1>
      </div>
    </>
  );
};

export default Banner;
