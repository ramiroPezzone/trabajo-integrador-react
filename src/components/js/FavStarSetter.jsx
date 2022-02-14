import React, { useState } from 'react';
import stylesFavStar from '../css/FavStarSetter.module.css'

const FavStarSetter = (props) => {

  const [favState, setFavState] = useState(false);

  const [favs, setFavs] = useState([]);

  const changeFavState = () => {
    favState === false ? setFavState(true) : setFavState(false);

    if (localStorage.getItem(props.id)) {
      let favToRemove = props.id;
      let removeFav = favs.filter(() => !favToRemove);
      localStorage.removeItem(props.id);
      setFavs(removeFav);
    } else {
      let favToAdd = [props.id];
      setFavs([...favs, favToAdd]);
      let favInfo = {
        id: props.id,
        name: props.name,
        sinopsis: props.overview,
        poster: props.poster_path
      }
      localStorage.setItem(props.id, JSON.stringify(favInfo));
      console.log(favInfo);
    }
  };

  return (
    <div className='containerFavStar' onClick={changeFavState}>
      <div
        className={localStorage.hasOwnProperty(props.id) ? `${stylesFavStar.favStarEnabled}` : `${stylesFavStar.favStarDisabled}`}
      />
    </div>
  );
};

export default FavStarSetter;
