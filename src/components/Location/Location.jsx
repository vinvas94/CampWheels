import sprite from '../../assets/svg/sprite.svg';
import {
  LocationContainer,
  LocationName,
  LocationIcon,
} from './Location.styled';

const Location = props => {
  return (
    <LocationContainer>
      <LocationIcon>
        <use xlinkHref={`${sprite}#icon-location`}></use>
      </LocationIcon>
      <LocationName>{props.location}</LocationName>
    </LocationContainer>
  );
};

export default Location;
