import React, { useState } from 'react';
import { ButtonDetails } from './ButtonDetails';
import styles from './Movie.module.css'
import './FavStar.css'
import FavStar from './FavStar';

export const Movie = (props) => {

    let posterPath = props.poster_path;
    let poster = '';

    !posterPath
        ? poster = ``
        : poster = `url(https://image.tmdb.org/t/p/w500/${posterPath})`

    return (
        <div className={styles.containerMovie}>

            {/* Para establecer o quitar de favoritos */}
            <FavStar
                id={props.link}
                name={props.title}
            />
            {/*  */}

            <div className={styles.containerPosterMovie}>
                <div
                    className={styles.posterMovie}
                    style={{
                        background: poster,
                        margin: '0 auto',
                        width: '100%',
                        height: '500px',
                        borderRadius: '5px 5px 0 0',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
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
