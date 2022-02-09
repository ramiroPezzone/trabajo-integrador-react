import React, { useState } from 'react';
import styles from './FavStarSetter.module.css'

const FavStarSetter = (props) => {

    let [favState, setFavState] = useState(false)
    function changeFavState() {
        setFavState(!favState)
        if (!favState) {
            localStorage.setItem(props.id, props.id)
        } else {
            localStorage.removeItem(props.id)
        }
    }

    return (
        <div className='containerFavStar'>
            <div
                className={localStorage.getItem(props.id) === null ? `${styles.favStarDisabled}` : `${styles.favStarEnabled}`}
                onClick={changeFavState}
            />
        </div>
    );
};

export default FavStarSetter;
