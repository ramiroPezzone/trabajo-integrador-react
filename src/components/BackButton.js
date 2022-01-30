import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './BackButton.css'

export const BackButton = () => {
    return (
        <Fragment>
                <Link exact to='/'>
                    volver al listado
                </Link>
        </Fragment>
    );
};
