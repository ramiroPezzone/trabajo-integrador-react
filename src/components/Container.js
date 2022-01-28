import React from 'react';
import './Container.css'

export const Container = (props) => {
    return (
        <div className='movies-container'>
            {props.children}
        </div>
    );
};
