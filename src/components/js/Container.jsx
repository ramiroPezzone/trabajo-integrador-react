import React from 'react';
import '../css/Container.css'

export const Container = (props) => {
    return (
        <div className='movies-container'>
            {props.children}
        </div>
    );
};
