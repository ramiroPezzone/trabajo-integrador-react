import React from 'react';
import { ButtonDetails } from './ButtonDetails';
import styles from './Movie.module.css'

export const Movie = (props) => {

    let posterPath = props.poster_path;
    let poster = '';

    !posterPath
        ? poster = ``
        : poster = `url(http://image.tmdb.org/t/p/w500/${posterPath})`

    return (
        <div className={styles.containerMovie}>
            <div className={styles.containerPosterMovie}>
                <div
                    className={styles.posterMovie}
                    style={{
                        background: poster,
                        backgroundSize: 'cover'
                    }}
                />
            </div>
            <div className={styles.cardDatosMovie}>
                <h5 className={`${styles.movieTitle} ${styles.title}`}>{props.title}</h5>
                <div className={styles.containerSinapsis}>
                    <p className={`${styles.movieSinapsis} ${styles.sinapsis}`}>{props.overview}</p>
                </div>
                <ButtonDetails
                    to={props.link} />
            </div>
        </div>
    );
};
