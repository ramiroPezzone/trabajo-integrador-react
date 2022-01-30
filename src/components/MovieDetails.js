import { Component, Fragment } from "react";
import { BackButton } from "./BackButton";
import { Loading } from "./Loading";

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

    componentDidMount() {
        let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
        let endPoint = 'https://api.themoviedb.org/3/movie/' + this.link.id + '?api_key=' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1'
        fetch(endPoint)
            .then(res => res.json())
            .then(movie => this.setState({ movie: movie, isFetch: false, genres: movie.genres }))
    }

    render() {
        const { movie, genres, isFetch } = this.state
        if (isFetch) {
            return (
                <Loading />
            )
        }
        return (
            <Fragment>
                <div className='container-movie'>
                    <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
                    <div className='card-datos-movie'>
                        <h2 className='movie-title'>Título: {movie.title}</h2>
                        <div>
                            <h5 className="movie-genres">
                                Géneros:
                            </h5>
                            <ul>
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
                        <div className='container-sinapsis'>
                            <h5>Reseña:</h5>
                            <p className='movie-sinapsis'>{movie.overview}</p>
                        </div>
                        <h5>Rating: {movie.vote_average}</h5>
                    </div>
                    <BackButton />
                </div>
            </Fragment>

        );
    }
}
export default MovieDetails

