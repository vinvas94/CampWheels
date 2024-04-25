import { useState } from 'react';

import sprite from '../../assets/svg/iconsSprite.svg';
import { Reviews } from 'components/Reviews/Reviews';
import { Features } from 'components/Features/Features';
import { Form } from '../Form/Form';
import {
  ButtonContainer,
  GalleryItem,
  GalleryList,
  GalleryText,
  Line,
  ModalButton,
  ModalContainer,
  ModalScroll,
  ModalTitle,
  ModalWrapper,
  Option,
  ReviewsContainer,
  ReviewsPrice,
  ReviewsSpan,
} from './Modal.styled';

export const Modal = ({ adverts, close }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };

  return (
    <ModalContainer>
      <ModalButton onClick={close}>
        <svg stroke="#101828" width="32" height="32">
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </ModalButton>
      <ModalTitle>{adverts.name}</ModalTitle>
      <ReviewsContainer>
        <ReviewsSpan>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-star`} />
          </svg>
          {adverts.rating} ({adverts.reviews.length} Reviews)
        </ReviewsSpan>
        <ReviewsSpan>
          <svg fill="#fff" stroke="#101828" width="16" height="16">
            <use xlinkHref={`${sprite}#icon-location`} />
          </svg>
          {adverts.location}
        </ReviewsSpan>
      </ReviewsContainer>
      <ReviewsPrice>€{adverts.price.toFixed(2)}</ReviewsPrice>
      <ModalWrapper>
        <ModalScroll>
          <GalleryList>
            {adverts.gallery.map((e, index) => (
              <GalleryItem key={index}>
                <img src={e} alt={adverts.name} />
              </GalleryItem>
            ))}
          </GalleryList>
          <GalleryText>{adverts.description}</GalleryText>
        </ModalScroll>
      </ModalWrapper>
      <ButtonContainer>
        <button
          onClick={() => handleTabClick(1)}
          className={activeTab === 1 ? `isActive` : null}
        >
          Features
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={activeTab === 2 ? `isActive` : null}
        >
          Reviews
        </button>
      </ButtonContainer>
      <Line />
      <Option>
        {activeTab === 1 && <Features adverts={adverts} />}
        {activeTab === 2 && <Reviews reviews={adverts.reviews} />}
        {activeTab !== 0 && <Form />}
      </Option>
    </ModalContainer>
  );
};
