import React, { Fragment, useEffect } from 'react'

const Favs = () => {

  let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
  let endPointFavs = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=es-ES`
  let favsGuardados = localStorage

  // favsGuardados.map(fav => { console.log(fav) })



  // useEffect(() => {
  //   fetch(consultas)
  //     .then(res => res.json())
  //     .then((data) => {
  //       setMovies(data.results)

  //       if (data.total_pages > 500) {
  //         setPages(500);
  //       } else {
  //         setPages(data.total_pages)
  //       }

  //       if (data.total_results > 10000) {
  //         setTotalDeResultados(10000)
  //       } else {
  //         setTotalDeResultados(data.total_results);
  //       }
  //     })
  //     .catch(error => { console.log(error) })

  // }, [third])



  console.log(localStorage);

  return (
    <Fragment>
      <div>PRÓXIMAMENTE FAVS</div>
    </Fragment>
  )
}

export default Favs