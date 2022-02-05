import React, { Fragment, useEffect, useState } from "react";
import { Movie } from '../components/Movie';
import { Loading } from "../components/Loading";
import { Container } from "../components/Container";
import styles from '../components/Movie.module.css'

const MovieList = () => {

    let [movies, setMovies] = useState([]);
    let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e';
    let endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1';

    useEffect(() => [
        fetch(endPoint)
            .then(res => res.json())
            .then((data) => {
                setMovies(data.results)
            })
            .catch(error => { console.log(error) })
    ], [endPoint]);

    if (movies.length === 0) {
        return (
            <Loading />
        )
    }

    return (
        <Fragment>
            <Container>
                {movies.map(movie => (
                    <div
                        className={styles.cardMovie}
                        key={movie.id}
                    >
                        <Movie
                            poster_path={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            link={movie.id}
                        />
                    </div>
                ))}
            </Container>
        </Fragment >
    );
};

export default MovieList;
