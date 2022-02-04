import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './ButtonDetails.css'

export const ButtonDetails = (props) => {
    return (
        <Fragment>
            <div className='container-btn-details'>
                <Link
                    to={'/details/' + props.to}
                    className='btn-details'
                >
                    Ver detalle
                </Link>
            </div>

        </Fragment>
    );
};
