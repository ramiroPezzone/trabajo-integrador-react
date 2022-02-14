import React, { Fragment } from 'react';
import styles from '../css/NoResults.module.css'

export const NoResults = () => {
    return (
        <Fragment>
            <div className={styles.containerImg}>
                <div className={styles.img}></div>
            </div>
        </Fragment>
    );
};
