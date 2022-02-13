import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../../components/BackButton";
import FavStarSetter from "../../components/FavStarSetter";
import { Loading } from "../../components/Loading";
import { RangeStar } from "../../components/RangeStar";
import '../css/MovieDetails.css';
import styles from "../../components/Movie.module.css";



const MovieDetails = () => {

    const { id } = useParams()

    let [movie, setMovie] = useState([])
    let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
    let endPoint = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1'

    // Fecth de página de detalles
    useEffect(() => {
        fetch(endPoint)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
            .catch(error => { console.log(error) })
    }, [endPoint]);

    // Comiendo del renderizado
    if (movie.length === 0) {
        return <Loading />
    }

    // Para mostrar el año de la movie
    let dateRelease = movie.release_date
    let yearRelease = dateRelease.slice(0, 4)

    // Para cuando no hay imagen de movie
    let posterPath = movie.poster_path
    let poster = ''
    !posterPath
        ? (poster = '')
        : poster = `url(http://image.tmdb.org/t/p/w500${posterPath})`


    console.log(posterPath);
    console.log(poster);

    return (
        <Fragment>

            <div className='container-movie-details'>

                <div className="poster-movie-details">
                    <div className='containerFavStarDetails' >
                        <FavStarSetter
                            id={movie.id}
                        />
                    </div>
                    <div className={styles.containerPosterMovie}>
                        <div
                            className={styles.posterMovie}
                            style={{
                                backgroundImage: poster,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "50% 50%",
                            }}
                        />
                    </div>
                </div>
                <div className='card-datos-movie-details'>
                    <h2 className='movie-title'>{movie.title}</h2>
                    <div>
                        <h5 className="movie-genres">
                            Géneros:
                        </h5>
                        <ul className="genre-list">
                            {
                                movie.genres.map(el => (
                                    <li
                                        key={el.id}
                                    >
                                        {el.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h5 className="yearRelease">
                            Año: <span className="year">{yearRelease}</span>
                        </h5>
                    </div>
                    <div className='container-sinapsis-details'>
                        <h5>Reseña:</h5>
                        <p className='movie-sinapsis-details'>{movie.overview}</p>
                    </div>
                    <h5 className="rating">Rating: </h5>
                    <RangeStar
                        range=
                        {movie.vote_average * 10}
                    />
                    <h5 className="value-rating">{movie.vote_average} <span className="value-max">/ 10 (votos: {movie.vote_count})</span></h5>
                    <BackButton />
                </div>
            </div>
        </Fragment>
    )
};

export default MovieDetails;
