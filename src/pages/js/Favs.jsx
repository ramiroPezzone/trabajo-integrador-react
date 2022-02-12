import React, { Fragment, useEffect, useState } from 'react'
import { Container } from '../../components/Container';
import { Movie } from '../../components/Movie';
import WithoutFavs from '../../components/WithoutFavs';
import styles from "../../components/Movie.module.css";


const Favs = () => {

  const [movies, setMovies] = useState({})



  let favsJson = Object.values(localStorage)

  let favsArray = favsJson.map(fav => {
    let favsObj = JSON.parse(fav)
    return favsObj
  })


  console.log(favsArray);

  useEffect(() => {
    setMovies(favsArray)
  }, [])



  console.log(movies);

  if (movies.length === 0) {
    return <WithoutFavs />
  }

  return (
    <Fragment>
      <Container>
        {/* {movies.map((movie) => (
          <div className={styles.cardMovie} key={movie.id}>
            <Movie
              // poster_path={movie.poster}
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
        ))} */}

      </Container>

    </Fragment>
  )
}

export default Favs