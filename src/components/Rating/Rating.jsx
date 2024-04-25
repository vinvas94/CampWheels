import sprite from '../../assets/svg/iconsSprite.svg';
import { RatingContainer, RatingSilverContainer } from './Rating.styled';

export const Rating = ({ rating }) => {
  let ratingStar = [];
  for (let i = 0; i < rating; i++) {
    ratingStar.push(
      <svg width={16} height={16}>
        <use href={`${sprite}#icon-star`} />
      </svg>
    );
  }
  return (
    <RatingContainer>
      {ratingStar.map((el, index) => {
        return <span key={index}>{el}</span>;
      })}
      <RatingSilverContainer>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-star-silver`} />
        </svg>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-star-silver`} />
        </svg>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-star-silver`} />
        </svg>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-star-silver`} />
        </svg>
        <svg width={16} height={16}>
          <use href={`${sprite}#icon-star-silver`} />
        </svg>
      </RatingSilverContainer>
    </RatingContainer>
  );
};
