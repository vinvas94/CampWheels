import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from '../../redux/favoriteSlice';

import sprite from '../../assets/svg/iconsSprite.svg';

export const Catalog = ({ adverts }) => {
  console.log(adverts);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  const favorites = useSelector(getFavorites);

  let favoritesButton = { fill: 'none', stroke: '#101828' };

  if (favorites.find(el => el._id === adverts._id)) {
    favoritesButton = { fill: '#e44848', stroke: '#e44848' };
  } else {
    favoritesButton = { fill: 'none', stroke: '#101828' };
  }

  const handleFavorite = () => {
    if (favorites.find(el => el._id === adverts._id)) {
      dispatch(deleteFavorite(adverts._id));
    } else {
      dispatch(addFavorite(adverts));
    }
  };

  return (
    <>
      <div>
        <img src={adverts.gallery} alt={adverts.name} />
      </div>
    </>
  );
};
