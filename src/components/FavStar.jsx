import React, { useState } from 'react';

const FavStar = (props) => {

    let [favState, setFavState] = useState(false)
    function changeFavState() {
        setFavState(!favState)
        if (!favState) {
            localStorage.setItem(props.id, props.name)
        } else {
            localStorage.removeItem(props.id)
        }
    }

    return (
        <div className='containerFavStar'>
            <div
                className={localStorage.getItem(props.id) === null
                    ? 'favStarDisabled'
                    : 'favStarEnabled'}
                onClick={changeFavState}
            />
        </div>
    );
};

export default FavStar;
