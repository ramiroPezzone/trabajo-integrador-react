import React, { Fragment, useEffect, useState } from "react";
import { Movie } from '../components/Movie';
import { Loading } from "../components/Loading";
import { Container } from "../components/Container";
import styles from '../components/Movie.module.css'
import stylesML from './MovieList.module.css'
import { useLocation } from "react-router-dom";
import { RangeStar } from "../components/RangeStar";
import { NoResults } from "../components/NoResults";

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const MovieList = () => {

    const consulta = useQuery().get("s");

    let [movies, setMovies] = useState([]);
    let [pageSelected, setPageSelected] = useState(1)
    let [pages, setPages] = useState('');
    let [totalDeResultados, setTotalDeResultados] = useState('');
    let [discoverFetch, setDiscoverFetch] = useState(false)
    let [consultaFetch, setConsultaFetch] = useState(false)
    let min = pageSelected <= 1 ? true : false;
    let max = pageSelected < pages ? false : true;

    let endPointGral = 'https://api.themoviedb.org/3';
    let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e';

    let consultas = `${endPointGral}/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=${pageSelected}&query=${consulta}`;

    let discover = `${endPointGral}/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=${pageSelected}`;

    // Fetchs gral y de búsquedas
    useEffect(() => {
        if (consulta) {
            fetch(consultas)
                .then(res => res.json())
                .then((data) => {
                    setMovies(data.results)
                    setPages(data.total_pages);
                    setTotalDeResultados(data.total_results);
                    console.log(data);
                })
                .catch(error => { console.log(error) })
            setConsultaFetch(true)
            setDiscoverFetch(false)
        } else {
            fetch(discover)
                .then(res => res.json())
                .then((data) => {
                    setMovies(data.results)
                    setPages(data.total_pages);
                    setTotalDeResultados(data.total_results);
                })
                .catch(error => {
                    console.log(error)
                    return <RangeStar />
                })
            setDiscoverFetch(true)
            setConsultaFetch(false)
        }
    }, [consulta, pageSelected, consultas, discover]);

    // Reseteo de n° de página cuando se vuelve al inicio
    useEffect(() => {
        if (!consultaFetch) {
            setPageSelected(1)
        }
    }, [consultaFetch])

    // Reseteo de n° de página cuando se hace una búsqueda
    useEffect(() => {
        if (!discoverFetch) {
            setPageSelected(1)
        }
    }, [discoverFetch])

    // Página previa
    function prevPage() {
        setPageSelected(pageSelected -= 1)
    }

    // Página siguiente
    function nextPage() {
        setPageSelected(pageSelected += 1)
    }

    // Cambio manual de página
    function cambioManualDePag(e) {
        e.preventDefault()
        console.log(e.target);
        setPageSelected(e.target.value)
    }

    // Comienzo del renderizado del sitio
    if (!consultaFetch && movies.length === 0) {
        console.log('estado: ' + discoverFetch);
        return (
            <Loading />
        )
    };

    return (
        <Fragment>
            {
                consulta
                    ?
                    <div className={styles.headerPagesControlPanel}>
                        <p>Resutados de búsqueda de:
                            <p>
                                <span className={styles.headSearchParams}>
                                    <div>
                                        {consulta}
                                    </div>
                                    <div className={stylesML.noResultsText}>
                                        {totalDeResultados === 0
                                            ? ('sin resultados')
                                            : true}
                                    </div>
                                </span>
                            </p>
                        </p>
                    </div>
                    :
                    <>
                        <p className={styles.headerNovedades}>Novedades</p>
                    </>
            }

            <div className={stylesML.pagesControlPanel}>
                <div className={stylesML.contenedorGralControlPanel}>

                    <p className={stylesML.resultadosTotal}>Total de títulos: {totalDeResultados}</p>
                    <div className={stylesML.flexContainerControlPanel}>
                        <div>
                            <span className={`${stylesML.pagesArrows} ${stylesML.prevArrow}`}>
                                <button disabled={min} onClick={prevPage}>Anterior</button>
                            </span>
                        </div>
                        <div>
                            Página
                            <input
                                type='text'
                                className={stylesML.input}
                                value={pageSelected}
                                max={pages}
                                onChange={(e) => setPageSelected(e.target.value)}
                            />
                            de {pages}
                        </div>
                        <div>
                            <span className={`${stylesML.pagesArrows} ${stylesML.nextArrow}`}>
                                <button disabled={max} onClick={nextPage}>Siguiente</button></span>
                        </div>
                    </div>
                </div>
            </div>
            {totalDeResultados === 0
                ? <NoResults />
                : true}
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
