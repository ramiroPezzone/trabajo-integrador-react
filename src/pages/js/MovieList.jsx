import React, { Fragment, useEffect, useState } from "react";
import { Movie } from "../../components/Movie";
import { Loading } from "../../components/Loading";
import { Container } from "../../components/Container";
import styles from "../../components/Movie.module.css";
import stylesPageSelector from "../../components/PageSelector.module.css";
import { useLocation } from "react-router-dom";
import { NoResults } from "../../components/NoResults";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const MovieList = () => {

    const consulta = useQuery().get("s");

    let [movies, setMovies] = useState([]);
    let [pageSelected, setPageSelected] = useState(1);
    let [pages, setPages] = useState("");
    let [totalDeResultados, setTotalDeResultados] = useState("");
    let [discoverFetch, setDiscoverFetch] = useState(false);
    let [consultaFetch, setConsultaFetch] = useState(false);
    let min = pageSelected <= 1 ? true : false;
    let max = pageSelected < pages ? false : true;

    let endPointGral = "https://api.themoviedb.org/3";
    let apiKey = "2ab8fe8573dcdcf9307ac2ba7116914e";

    let consultas = `${endPointGral}/search/movie?api_key=${apiKey}&language=es-ES&sort_by=original_title.desc&page=${pageSelected}&query=${consulta}`;

    let discover = `${endPointGral}/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=${pageSelected}`;

    // Fetchs gral y de búsquedas
    useEffect(() => {
        if (consulta) {
            fetch(consultas)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                    data.total_pages > 500
                        ? setPages(500)
                        : setPages(data.total_pages)

                    data.total_results > 10000
                        ? setTotalDeResultados(10000)
                        : setTotalDeResultados(data.total_results)
                })
                .catch((error) => {
                    console.log(error);
                });
            setConsultaFetch(true);
            setDiscoverFetch(false);
        } else {
            fetch(discover)
                .then((res) => res.json())
                .then((data) => {
                    setMovies(data.results);
                    data.total_pages > 500
                        ? setPages(500)
                        : setPages(data.total_pages);

                    data.total_results > 10000
                        ? setTotalDeResultados(10000)
                        : setTotalDeResultados(data.total_results);
                })
                .catch((error) => {
                    console.log(error);
                });
            setDiscoverFetch(true);
            setConsultaFetch(false);
        }
    }, [consulta, pageSelected, consultas, discover]);

    // Reseteo de n° de página cuando se vuelve al inicio
    useEffect(() => {
        !consultaFetch && setPageSelected(1)
    }, [consultaFetch]);

    // Reseteo de n° de página cuando se hace una búsqueda
    useEffect(() => {
        !discoverFetch && setPageSelected(1)
    }, [discoverFetch]);

    // Página previa
    const prevPage = () => {
        setPageSelected((pageSelected -= 1));
    };

    // Página siguiente
    const nextPage = () => {
        setPageSelected((pageSelected += 1));
    };
    const inputChanges = (e) => {
        let input = e.target.value
        setPageSelected(input)
        input > 500 && setPageSelected(500)
        input < 1 && setPageSelected(1)
        input > pages && setPageSelected(pages)
    }


    // Comienzo del renderizado del sitio
    if (!consultaFetch && movies.length === 0) {
        return <Loading />;
    }

    if (totalDeResultados === 0) {
        return (
            <Fragment>
                <div className={styles.headerPagesControlPanel}>
                    <p>
                        Resultados de búsqueda de:
                        <p>
                            <span className={styles.headSearchParams}>
                                <div>{consulta}</div>
                                <div className={styles.noResultsText} />
                            </span>
                        </p>
                    </p>
                </div>

                <NoResults />
            </Fragment>)
    }
    return (
        <Fragment>
            {/* CABECERA */}
            {consulta ? (
                <div className={styles.headerPagesControlPanel}>
                    <p>
                        Resultados de búsqueda de:
                        <p>
                            <span className={styles.headSearchParams}>
                                <div>{consulta}</div>
                            </span>
                        </p>
                    </p>
                </div>
            ) : (
                <>
                    <p className={styles.headerNovedades}>Todas las películas</p>
                </>
            )}

            {/* CUANDO LA BÚSQUEDA NO ARROJA RESULTADOS */}
            {totalDeResultados === 0 ? <NoResults /> : true}
            {/*  */}

            {/* Contenedor de selector de páginas */}
            <div className={stylesPageSelector.pagesControlPanel}>
                <div className={stylesPageSelector.contenedorGralControlPanel}>
                    <p className={stylesPageSelector.resultadosTotal}>
                        Total de títulos: {totalDeResultados} {totalDeResultados === 10000 && '(MAX)'}
                    </p>
                    <div className={stylesPageSelector.flexContainerControlPanel}>
                        <div>
                            <span
                                className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.prevArrow}`}
                            >
                                <button disabled={min} onClick={prevPage}>
                                    Anterior
                                </button>
                            </span>
                        </div>
                        <div>
                            Página
                            <input
                                type='number'
                                value={pageSelected}
                                onChange={(e) => inputChanges(e)}
                                className={stylesPageSelector.input}
                            />
                            de {pages}
                        </div>
                        <div>
                            <span
                                className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.nextArrow}`}
                            >
                                <button disabled={max} onClick={nextPage}>
                                    Siguiente
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <Container>
                {movies.map((movie) => (
                    <div className={styles.cardMovie} key={movie.id}>
                        <Movie
                            poster_path={movie.poster_path}
                            title={movie.title}
                            overview={
                                !movie.overview ? (
                                    <i>Sin descripción disponible</i>
                                ) : (
                                    movie.overview
                                )
                            }
                            link={movie.id}
                        />
                    </div>
                ))}
            </Container>
            {/* Contenedor de selector de páginas */}
            <div className={stylesPageSelector.pagesControlPanel}>
                <div className={stylesPageSelector.contenedorGralControlPanel}>
                    <p className={stylesPageSelector.resultadosTotal}>
                        Total de títulos: {totalDeResultados} {totalDeResultados === 10000 && '(MAX)'}
                    </p>
                    <div className={stylesPageSelector.flexContainerControlPanel}>
                        <div>
                            <span
                                className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.prevArrow}`}
                            >
                                <button disabled={min} onClick={prevPage}>
                                    Anterior
                                </button>
                            </span>
                        </div>
                        <div>
                            Página
                            <input
                                type='number'
                                value={pageSelected}
                                onChange={(e) => inputChanges(e)}
                                className={stylesPageSelector.input}
                            />
                            de {pages}
                        </div>
                        <div>
                            <span
                                className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.nextArrow}`}
                            >
                                <button disabled={max} onClick={nextPage}>
                                    Siguiente
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </Fragment>
    );
};

export default MovieList;
