import React from 'react';
import { ButtonDetails } from './ButtonDetails';
import './Movie.css'

export const Movie = (props) => {
    
    return (
        <div className='container-movie'>
            <div className='container-poster-movie'>
                <div
                    className='poster-movie'
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.poster_path})`
            }}
                />
            </div>
            <div className='card-datos-movie'>
                <h5 className='movie-title'>{props.title}</h5>
                <div className='container-sinapsis'>
                    <p className='movie-sinapsis'>{props.overview}</p>
                </div>
                <ButtonDetails
                    to={props.link} />
            </div>
        </div>
    );
};
