import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import '../css/BackButton.css'

export const BackButton = () => {
    return (
        <Fragment>
            <div className='container-back-button'>
                <Link exact to='/'>
                    volver al listado
                </Link>
            </div>
        </Fragment>
    );
};
