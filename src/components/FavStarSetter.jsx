import React, { useEffect, useState } from 'react';
import styles from './FavStarSetter.module.css'

const FavStarSetter = (props) => {

    const [favState, setFavState] = useState(false)

    let favComing = localStorage.getItem(props.fav)

    // favComing
        // ? setFavState(true)
        // : setFavState(false)

    console.log(favComing);

    return (
        <div className='containerFavStar'>
            <div
                className={favState === false ? `${styles.favStarDisabled}` : `${styles.favStarEnabled}`}
            />
        </div>
    );
};

export default FavStarSetter;
