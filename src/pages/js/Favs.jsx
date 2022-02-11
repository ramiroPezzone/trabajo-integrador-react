import React, { Fragment, useEffect, useState } from 'react'
import { Container } from '../../components/Container';
import { Movie } from '../../components/Movie';
import WithoutFavs from '../../components/WithoutFavs';

const Favs = () => {

  let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
  let endPointGral = "https://api.themoviedb.org/3";

  let [movieID, setMovieID] = useState('')

  let [movie, setMovie] = useState('')

  // let [pageSelected, setPageSelected] = useState(1);

  let movieEndPoint = `${endPointGral}//movie/${movieID}?api_key=${apiKey}&language=es-ES`

  let favsGuardados = localStorage

  useEffect(() => {
    let allIDs = Object.values(favsGuardados);
    setMovieID(allIDs)
  }, [favsGuardados])

  // console.log(favsGuardados);

  console.log('IDs:');
  console.log(movieID);

  useEffect(() => {
    if (movieID !== '') {
      let moviesMap = movieID.map((id) => {
        fetch(movieEndPoint)
          .then((res) => res.json())
          .then((data) => {
            setMovie([data]);
          })
          return (id)
          .catch((error) => {
            console.log('Ha ocurrido el siguiente error: ' + error);
          });
      })

      console.log('moviesMap');
      console.log(moviesMap);
    }
  }, [movieEndPoint]);


  // console.log('Movies:');
  // console.log(movie);




  return (
    <Fragment>
      <Container>
        {
          movie === ''
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
        }

      </Container>

    </Fragment>
  )
}

export default Favs