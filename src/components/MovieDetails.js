import { Component, Fragment } from "react";
import { BackButton } from "./BackButton";
import { Loading } from "./Loading";
import { RangeStar } from "./RangeStar";
import './MovieDetails.css'

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: [],
            isFetch: true,
            genres: []
        }
        this.link = {
            id: this.props.match.params.id
        }
    }

    async componentDidMount() {
        let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
        let endPoint = 'https://api.themoviedb.org/3/movie/' + this.link.id + '?api_key=' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1'
        await fetch(endPoint)
            .then(res => res.json())
            .then(movie => this.setState({ movie: movie, isFetch: false, genres: movie.genres }))
            .catch(error => { console.log(error) })
    }

    render() {
        const { movie, genres, isFetch } = this.state
        if (isFetch) {
            return (
                <Loading />
            )
        }

        const valueRange = movie.vote_average * 10

        return (
            <Fragment>
                <div className='container-movie-details'>
                    <div className="poster-movie-details">
                        <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
                    </div>
                    <div className='card-datos-movie-details'>
                        <h2 className='movie-title'>Título: {movie.title}</h2>
                        <div>
                            <h5 className="movie-genres">
                                Géneros:
                            </h5>
                            <ul className="genre-list">
                                {
                                    genres.map(el => (
                                        <li
                                            key={el.id}
                                        >
                                            {el.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='container-sinapsis-details'>
                            <h5>Reseña:</h5>
                            <p className='movie-sinapsis-details'>{movie.overview}</p>
                        </div>
                        <h5 className="rating">Rating: </h5>
                        <RangeStar
                            range=
                            {valueRange}
                        />
                        <h5 className="value-rating">{movie.vote_average}</h5>
                        <BackButton />
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default MovieDetails

