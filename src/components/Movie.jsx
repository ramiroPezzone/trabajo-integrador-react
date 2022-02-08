import React, { useState } from 'react';
import { ButtonDetails } from './ButtonDetails';
import styles from './Movie.module.css'
import './FavStar.css'

export const Movie = (props) => {

    let [favState, setFavState] = useState(false)

    let posterPath = props.poster_path;
    let poster = '';

    !posterPath
        ? poster = ``
        : poster = `url(https://image.tmdb.org/t/p/w500/${posterPath})`

    function changeFavState() {
        setFavState(!favState)
    }

    console.log(favState);
    return (
        <div className={styles.containerMovie}>
            <div
                className={favState
                    ? 'favStarEnabled'
                    : 'favStarDisabled'}
                onClick={changeFavState}
            />
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
