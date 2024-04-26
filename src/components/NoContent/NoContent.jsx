import errorImage from '../../assets/images/error-404.jpg';

export const NoContent = () => {
  return (
    <div>
      <img src={errorImage} alt="Error" />
    </div>
  );
};
