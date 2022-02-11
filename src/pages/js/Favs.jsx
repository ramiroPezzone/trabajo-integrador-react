import React, { Fragment, useEffect, useState } from 'react'
import { Container } from '../../components/Container';
import { Movie } from '../../components/Movie';
import WithoutFavs from '../../components/WithoutFavs';

const Favs = () => {


  let [movieID, setMovieID] = useState('')

  let [movie, setMovie] = useState('')

  // let [pageSelected, setPageSelected] = useState(1);

  let movieEndPoint = ``


  let favsGuardados = localStorage
  useEffect(() => {
    let allIDs = Object.values(favsGuardados);
    setMovieID(allIDs)
  }, [favsGuardados])

  let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
  let endPointGral = "https://api.themoviedb.org/3";

  useEffect(() => {
    if (movieID.length !== 0) {
      let moviesMap = movieID.map((id) => {
        fetch(`${endPointGral}/movie/${id}?api_key=${apiKey}&language=es-ES`)
          .then((res) => res.json())
          .then((data) => {

            console.log('Console Log del data: ');
            console.log(data);

            return (data)
          })
          .catch((error) => {
            console.log('Ha ocurrido el siguiente error: ' + error);
          });
      })
      // console.log("Id's:");
      // console.log(movieID);
      // console.log('Supuestas movies:');
      // console.log(moviesMap);
      console.log('Log del setMovie:');
      console.log(setMovie);
      setMovie(moviesMap)

    }
  }, [movieEndPoint, apiKey, endPointGral, movieID]);


  // console.log('Movies:');
  // console.log(movie);




  return (
    <Fragment>
      <Container>
        {/* {
          movieID === ''
            ? <WithoutFavs />
            : (
              movieID.map(() => {
                <Movie
                  poster_path={movie.poster_path}
                  title={movie === undefined
                    ? 'No tenés ninguna película en favoritos'
                    : movie.title}
                  overview={
                    !movie.overview ? (
                      <i>Sin descripción disponible</i>
                    ) : (
                      movie.overview
                    )
                  }
                  link={movie.id}
                />
              })
            )
        } */}

      </Container>

    </Fragment>
  )
}

export default Favs