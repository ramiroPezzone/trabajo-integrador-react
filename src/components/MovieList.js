import { Fragment, Component } from "react";
import { Movie } from './Movie';
import { Loading } from "./Loading";
import { Container } from "./Container";

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            isFetch: true
        }

    }

    componentDidMount() {
        let apiKey = '2ab8fe8573dcdcf9307ac2ba7116914e'
        let endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=es-ES&sort_by=popularity.desc&page=1'
        fetch(endPoint)
            .then(res => res.json())
            .then(movieList => this.setState({ movies: movieList.results, isFetch: false }))
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
                        <Movie
                            key={movie.id}
                            poster_path={movie.poster_path}
                            title={movie.title}
                            overview={movie.overview}
                            link={movie.id}
                        />
                    ))}
                </Container>
            </Fragment >
        );
    }
}



export default MovieList;