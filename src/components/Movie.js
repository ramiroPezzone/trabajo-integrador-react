import React from 'react';
import './Movie.css'

export const Movie = (props) => {
    return (
        <div className='container-movie'>
            <div className='card-datos-movie'>
                <img src={'https://image.tmdb.org/t/p/w500' + props.poster_path} alt={props.title} />
                <h5 className='movie-title'>{props.title}</h5>
                <div className='container-sinapsis'>
                    <p className='movie-sinapsis'>{props.overview}</p>
                </div>
                {/* <a href=''>Ver detalles</a> */}
            </div>
        </div>
    );
};
