import React from 'react';
import { ButtonDetails } from './ButtonDetails';
import './Movie.css'

export const Movie = (props) => {
    return (
        <div className='container-movie'>
            <img src={'https://image.tmdb.org/t/p/w500' + props.poster_path} alt={props.title} />
            <div className='card-datos-movie'>
                <h5 className='movie-title'>{props.title}</h5>
                <div className='container-sinapsis'>
                    <p className='movie-sinapsis'>{props.overview}</p>
                </div>
                <ButtonDetails 
                to = {props.link}/>
            </div>
        </div>
    );
};
