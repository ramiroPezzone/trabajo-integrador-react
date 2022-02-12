import React, { Fragment, useEffect, useState } from 'react'
import { Container } from '../../components/Container';
import { Movie } from '../../components/Movie';
import WithoutFavs from '../../components/WithoutFavs';
import styles from "../css/Favs.module.css";

const Favs = () => {

  const [movies, setMovies] = useState([])
  let totalDeResultados = movies.length
  let favsJson = Object.values(localStorage)
  let favsArray = favsJson.map(fav => {
    let favsObj = JSON.parse(fav)
    return favsObj
  })

  useEffect(() => {
    setMovies(favsArray)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (movies.length === 0) {
    return <WithoutFavs />
  }

  return (
    <Fragment>
      {/* Cabecera */}
      <div className={styles.headerPagesControlPanel}>
        <p className={styles.comingSoon}>FAVORITOS</p>
      </div>
      {/*  */}

      {/* Contenedor de selector de páginas */}
      <div className={styles.pagesControlPanel}>
        <div className={styles.contenedorGralControlPanel}>
          <p className={styles.resultadosTotal}>Total de títulos: {totalDeResultados}</p>
        </div>
      </div>
      {/*  */}
    
      <Container>
        {movies.map((movie) => (
          <div className={styles.cardMovie} key={movie.id}>
            <Movie
              poster_path={movie.poster}
              title={movie.name}
              overview={
                !movie.sinopsis ? (
                  <i>Sin descripción disponible</i>
                ) : (
                  movie.sinopsis
                )
              }
              link={movie.id}
            />
          </div>
        ))}

      </Container>

    </Fragment>
  )
}

export default Favs