import React from 'react';
import './Container.css'

export const Container = (props) => {
    console.log(props.id);
    return (
        <div className='movies-container'>
            {props.children}
        </div>
    );
};
