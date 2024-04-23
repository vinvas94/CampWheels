import sprite from 'assets/svg/sprite.svg';
import { useEffect, useState } from 'react';
import {
  LocationIcon,
  TitleLocation,
  ContainerInputLocation,
  InputLocation,
} from './FilterLocation.styled';

const FilterLocation = ({ setLocation, value, handleAppsFilter }) => {
  const [locationValue, setLocationValue] = useState('');

  useEffect(() => {
    setLocationValue(value);
  }, [value]);

  const handleLocation = e => {
    setLocation(e.target.value);
    setLocationValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAppsFilter();
    }
  };

  return (
    <>
      <TitleLocation>Location</TitleLocation>
      <ContainerInputLocation>
        <LocationIcon>
          <use xlinkHref={`${sprite}#icon-location`}></use>
        </LocationIcon>
        <InputLocation
          type="text"
          placeholder="Ukraine, Kyiv"
          value={locationValue}
          onChange={handleLocation}
          onKeyDown={handleKeyPress}
        />
      </ContainerInputLocation>
    </>
  );
};

export default FilterLocation;
