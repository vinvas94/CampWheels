import { Rating } from '../Rating/Rating';
import {
  Info,
  NameBlock,
  ReviewsBlock,
  ReviewsComment,
  ReviewsItem,
  ReviewsName,
} from './Reviews.styled';

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((el, index) => (
        <ReviewsItem key={index}>
          <Info>
            <NameBlock>{el.reviewer_name.slice(0, 1)}</NameBlock>
            <ReviewsBlock>
              <ReviewsName>{el.reviewer_name}</ReviewsName>
              <Rating rating={el.reviewer_rating} />
            </ReviewsBlock>
          </Info>
          <ReviewsComment>{el.comment}</ReviewsComment>
        </ReviewsItem>
      ))}
    </ul>
  );
};
