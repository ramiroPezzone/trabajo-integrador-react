import React from 'react';
import { ButtonDetails } from './ButtonDetails';
import styles from './Movie.module.css'

export const Movie = (props) => {
    
    return (
        <div className={styles.containerMovie}>
            <div className={styles.containerPosterMovie}>
                <div
                    className={styles.posterMovie}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.poster_path})`
            }}
                />
            </div>
            <div className={styles.cardDatosMovie}>
                <h5 className={styles.movieTitle}>{props.title}</h5>
                <div className={styles.containerSinapsis}>
                    <p className={styles.movieSinapsis}>{props.overview}</p>
                </div>
                <ButtonDetails
                    to={props.link} />
            </div>
        </div>
    );
};
