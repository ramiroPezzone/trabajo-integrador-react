import React from 'react';
import styles from './NoPageFound.module.css'

const NoPageFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}></div>
            <div className={styles.contenedorText}>
                <h2>
                    Lo sentimos, la página solicitada no pudo ser encontrada
                </h2>
            </div>
        </div>
    )
};

export default NoPageFound;