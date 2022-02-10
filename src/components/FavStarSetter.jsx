import React, { useEffect, useState } from 'react';
import styles from './FavStarSetter.module.css'

const FavStarSetter = (props) => {

        return (
        <div className='containerFavStar'>
            <div
                className={props.favState === false ? `${styles.favStarDisabled}` : `${styles.favStarEnabled}`}
            />
        </div>
    );
};

export default FavStarSetter;
