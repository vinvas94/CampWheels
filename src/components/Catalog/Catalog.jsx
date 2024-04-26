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
import {
  CatalogButton,
  CatalogButtonFavorites,
  CatalogContainerReviewsLocation,
  CatalogDescription,
  CatalogImage,
  CatalogItem,
  CatalogLocation,
  CatalogPrice,
  CatalogPriceContainer,
  CatalogReviews,
  CatalogTitle,
  CatalogTitleContainer,
  CategoriesContainer,
  CategoriesIcon,
  CategoriesItem,
  LocationIcon,
  ReviewsIcon,
  TodoContainer,
} from './Catalog.styled';
import { Link } from 'react-router-dom';

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
      <CatalogItem>
        <CatalogImage src={adverts.gallery[0]} alt={adverts.name} />
        <TodoContainer>
          <CatalogTitleContainer>
            <CatalogTitle>{adverts.name}</CatalogTitle>
            <CatalogPriceContainer>
              <CatalogPrice>€{adverts.price.toFixed(2)}</CatalogPrice>
              <CatalogButtonFavorites onClick={handleFavorite}>
                <svg width="24" height="24" style={favoritesButton}>
                  <use href={`${sprite}#icon-heart`} />
                </svg>
              </CatalogButtonFavorites>
            </CatalogPriceContainer>
          </CatalogTitleContainer>
          <CatalogContainerReviewsLocation>
            <Link to>
              <CatalogReviews href="">
                <ReviewsIcon width="16" height="16">
                  <use href={`${sprite}#icon-star`} />
                </ReviewsIcon>
                {adverts.rating} ({adverts.reviews.length} Reviews)
              </CatalogReviews>
            </Link>
            <CatalogLocation>
              <LocationIcon width="16" height="16" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-location`} />
              </LocationIcon>
              {adverts.location}
            </CatalogLocation>
          </CatalogContainerReviewsLocation>
          <CatalogDescription>{adverts.description}</CatalogDescription>
          <CategoriesContainer>
            <CategoriesItem>
              <CategoriesIcon width="20" height="20">
                <use href={`${sprite}#icon-adults`} />
              </CategoriesIcon>
              {adverts.adults} adults
            </CategoriesItem>
            <CategoriesItem>
              <CategoriesIcon width="20" height="20">
                <use href={`${sprite}#icon-automatic`} />
              </CategoriesIcon>
              {adverts.transmission}
            </CategoriesItem>
            <CategoriesItem>
              <CategoriesIcon width="20" height="20">
                <use href={`${sprite}#icon-petrol`} />
              </CategoriesIcon>
              {adverts.engine}
            </CategoriesItem>
            <CategoriesItem>
              <CategoriesIcon width="20" height="20">
                <use href={`${sprite}#icon-kitchen`} />
              </CategoriesIcon>
              Kitchen
            </CategoriesItem>
            {adverts.details.kitchen > 0 ? (
              <CategoriesItem>
                <CategoriesIcon width="20" height="20">
                  <use href={`${sprite}#icon-kitchen`} />
                </CategoriesIcon>
                Kitchen
              </CategoriesItem>
            ) : (
              <></>
            )}
            <CategoriesItem>
              <CategoriesIcon width="20" height="20">
                <use href={`${sprite}#icon-beds`} />
              </CategoriesIcon>
              beds
            </CategoriesItem>
            {adverts.details.airConditioner > 0 ? (
              <CategoriesItem>
                <CategoriesIcon width="20" height="20">
                  <use href={`${sprite}#icon-ac`} />
                </CategoriesIcon>
                AC
              </CategoriesItem>
            ) : (
              <></>
            )}
          </CategoriesContainer>
          <CatalogButton onClick={handleModalOpen}>Show more</CatalogButton>
        </TodoContainer>
        {isModalOpen && (
          <Backdrop close={handleModalOpen}>
            <Modal adverts={adverts} close={handleModalOpen}></Modal>
          </Backdrop>
        )}
      </CatalogItem>
    </>
  );
};
