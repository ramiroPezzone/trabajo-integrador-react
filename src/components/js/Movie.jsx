import React from "react";
import { ButtonDetails } from "./ButtonDetails";
import styles from "../css/Movie.module.css";



import FavStarSetter from "./FavStarSetter";

export const Movie = (props) => {
  let posterPath = props.poster_path;
  let poster = "";

  !posterPath
    ? (poster = ``)
    : (poster = `url(https://image.tmdb.org/t/p/w500/${posterPath})`);

  return (
    <div className={styles.containerMovie}>

      {/* Para establecer o quitar de favoritos */}
      <div className={styles.containerFavStarMovie}>
        <FavStarSetter
          id={props.link}
          name={props.title}
          overview={props.overview}
          poster_path={props.poster_path}
        />
      </div>
      {/*  */}

      <div className={styles.containerPosterMovie}>
        <div
          className={styles.posterMovie}
          style={{
            background: poster,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        />
      </div>
      <div className={styles.cardDatosMovie}>
        <h5 className={`${styles.movieTitle} ${styles.title}`}>
          {props.title}
        </h5>
        <div className={styles.containerSinapsis}>
          <p className={`${styles.movieSinapsis} ${styles.sinapsis}`}>
            {props.overview}
          </p>
        </div>
        <ButtonDetails to={props.link} />
      </div>
    </div>
  );
};
