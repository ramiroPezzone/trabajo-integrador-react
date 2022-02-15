import React, { Fragment, useState, useEffect } from "react";
import { Loading } from "../../components/js/Loading";
import { Movie } from '../../components/js/Movie'
import '../css/MovieDetails.css'
import { Container } from "../../components/js/Container";
import stylesPageSelector from '../../components/css/PageSelector.module.css'
import styles from '../../components/css/Movie.module.css'


const ComingSoom = () => {

    let [comingSoon, setComingSoon] = useState([]);
    let [pageSelected, setPageSelected] = useState(1);
    let [pages, setPages] = useState('');
    let [totalDeResultados, setTotalDeResultados] = useState('');
    let min = pageSelected <= 1 ? true : false;
    let max = pageSelected < pages ? false : true;

    // Fetcheo
    let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
    let comingSoonEndPoint = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es-ES&page=${pageSelected}`

    useEffect(() => {
        fetch(comingSoonEndPoint)
            .then(res => res.json())
            .then((data) => {
                setComingSoon(data.results)
                setTotalDeResultados(data.total_results)
                setPages(data.total_pages)
            })
            .catch(error => {
                console.log(error)
            })

    }, [pageSelected, comingSoonEndPoint])
    // 

    // Página previa
    function prevPage() {
        setPageSelected(pageSelected -= 1)
    }
    // 

    // Página siguiente
    function nextPage() {
        setPageSelected(pageSelected += 1)
    }
    // 

    // manejador de cambios del input pages
    const inputChanges = (e) => {
        let input = e.target.value
        let inputToNumber = parseInt(input, 10)
        setPageSelected(inputToNumber)
        inputToNumber > 500 && setPageSelected(500)
        inputToNumber < 1 && setPageSelected(1)
        inputToNumber > pages && setPageSelected(pages)
    }

    // Quitar foco del input page
    const removeBlur = (e) => {
        e.preventDefault(e)
        e.target[0].blur()
    }


    if (comingSoon.length === 0) {
        return <Loading />
    }

    return (
        <Fragment>

            {/* Cabecera */}
            <div className={styles.headerPagesControlPanel}>
                <p className={styles.comingSoon}>TÍTULOS DISPONIBLES PRÓXIMAMENTE</p>
            </div>
            {/*  */}

            {/* Contenedor de selector de páginas */}
            <div className={stylesPageSelector.pagesControlPanel}>
                <div className={stylesPageSelector.contenedorGralControlPanel}>

                    <p className={stylesPageSelector.resultadosTotal}>Total de títulos: {totalDeResultados}</p>
                    <div className={stylesPageSelector.flexContainerControlPanel}>
                        <div>
                            <span className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.prevArrow}`}>
                                <button disabled={min} onClick={prevPage}>Anterior</button>
                            </span>
                        </div>
                        <div>
                            Página
                            <form
                                className={stylesPageSelector.form}
                                onSubmit={(e) => removeBlur(e)}>
                                <input
                                    type='number'
                                    value={pageSelected}
                                    onChange={(e) => inputChanges(e)}
                                    className={stylesPageSelector.input}
                                />
                            </form>
                            de {pages}
                        </div>
                        <div>
                            <span className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.nextArrow}`}>
                                <button disabled={max} onClick={nextPage}>Siguiente</button></span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}

            <Container>

                {comingSoon.map(movie => (
                    <div
                        className={styles.cardMovie}
                        key={movie.id}
                    >
                        <Movie
                            poster_path={movie.poster_path}
                            title={movie.title}
                            overview={
                                !movie.overview
                                    ? (<i>Sin descripción disponible</i>)
                                    : movie.overview}
                            link={movie.id}
                        />
                    </div>
                ))}
            </Container>
            {/* Contenedor de selector de páginas */}
            <div className={stylesPageSelector.pagesControlPanel}>
                <div className={stylesPageSelector.contenedorGralControlPanel}>

                    <p className={stylesPageSelector.resultadosTotal}>Total de títulos: {totalDeResultados}</p>
                    <div className={stylesPageSelector.flexContainerControlPanel}>
                        <div>
                            <span className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.prevArrow}`}>
                                <button disabled={min} onClick={prevPage}>Anterior</button>
                            </span>
                        </div>
                        <div>
                            Página
                            <form
                                className={stylesPageSelector.form}
                                onSubmit={(e) => removeBlur(e)}>
                                <input
                                    type='number'
                                    value={pageSelected}
                                    onChange={(e) => inputChanges(e)}
                                    className={stylesPageSelector.input}
                                />
                            </form>
                            de {pages}
                        </div>
                        <div>
                            <span className={`${stylesPageSelector.pagesArrows} ${stylesPageSelector.nextArrow}`}>
                                <button disabled={max} onClick={nextPage}>Siguiente</button></span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </Fragment>
    )
};

export default ComingSoom;
