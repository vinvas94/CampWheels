import { Rating } from '../Rating/Rating';

export const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((el, index) => (
        <li key={index}>
          <div>
            <span>{el.reviewer_name.slice(0, 1)}</span>
            <div>
              <p>{el.reviewer_name}</p>
              <Rating rating={el.reviewer_rating} />
            </div>
          </div>
          <p>{el.comment}</p>
        </li>
      ))}
    </ul>
  );
};
