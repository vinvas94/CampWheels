import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  deleteFavorite,
  getFavorites,
} from '../../redux/favoriteSlice';

import sprite from '../../assets/svg/iconsSprite.svg';
import Backdrop from 'components/Backdrop/Backdrop';
import { Modal } from 'components/Modal/Modal';

export const Catalog = ({ adverts }) => {
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
        <img src={adverts.gallery[0]} alt={adverts.name} />
        <div>
          <h1>{adverts.name}</h1>
          <div>
            <p>€{adverts.price.toFixed(2)}</p>
            <button onClick={handleFavorite}>
              <svg width="24" height="24" style={favoritesButton}>
                <use href={`${sprite}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <a href="fix">
            <svg width="16" height="16">
              <use href={`${sprite}#icon-star`} />
            </svg>
            {adverts.rating} ({adverts.reviews.length} Reviews)
          </a>
        </div>
        <div>
          <svg width="16" height="16">
            <use href={`${sprite}#icon-location`} />
          </svg>
          {adverts.location}
        </div>
        <p>{adverts.description}</p>
        <div>
          <ul>
            <li>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-adults`} />
              </svg>
              {adverts.adults} adults
            </li>
            <li>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              {adverts.transmission}
            </li>
            <li>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-petrol`} />
              </svg>
              {adverts.engine}
            </li>
            <li>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              Kitchen
            </li>
            <div>
              {adverts.details.kitchen > 0 ? (
                <li>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-kitchen`} />
                  </svg>
                  Kitchen
                </li>
              ) : (
                <></>
              )}
            </div>
            <li>
              <svg width="20" height="20">
                <use href={`${sprite}#icon-beds`} />
              </svg>
              beds
            </li>
            <div>
              {adverts.details.airConditioner > 0 ? (
                <li>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-ac`} />
                  </svg>
                  AC
                </li>
              ) : (
                <></>
              )}
            </div>
          </ul>
        </div>
        <button onClick={handleModalOpen}>Show more</button>
      </div>
      {isModalOpen && (
        <Backdrop close={handleModalOpen}>
          <Modal adverts={adverts} close={handleModalOpen}></Modal>
        </Backdrop>
      )}
    </>
  );
};
