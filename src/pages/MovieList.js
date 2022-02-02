import { Fragment, Component } from "react";
import { Movie } from '../components/Movie';
import { Loading } from "../components/Loading";
import { Container } from "../components/Container";
import './MovieList.css'

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            isFetch: true
        }
    }

    async componentDidMount() {
        let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
        let endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1'
        await fetch(endPoint)
            .then(res => res.json())
            .then(movieList => this.setState({ movies: movieList.results, isFetch: false }))
            .catch(error => { console.log(error) })
    }

    render() {
        const { movies, isFetch } = this.state;

        if (isFetch) {
            return (
                <Loading />
            )
        }

        return (
            <Fragment>
                <Container>
                    {movies.map(movie => (
                        <div className="card-movie">
                            <Movie
                                key={movie.id}
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
    }
}



export default MovieList;