import sprite from '../../../assets/svg/iconsSprite.svg';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { startFilter } from '../../../redux/filterSlice';
import {
  Button,
  ContainerCheckBox,
  ContainerLabel,
  ContainerRadio,
  Form,
  Input,
  Text,
} from './Filters.styled';

export const SideBar = () => {
  const dispatch = useDispatch();
  const [checkBox, setCheckBox] = useState({
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
  });
  const [location, setLocation] = useState('');

  const [radio, setRadio] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const validateLocation = location.trim();
    dispatch(startFilter({ location: validateLocation, checkBox, radio }));
  };

  const handleLocation = e => {
    const { value } = e.target;
    setLocation(value);
  };
  const handleCheckbox = event => {
    const { value, checked } = event.target;
    setCheckBox({ ...checkBox, [value]: checked });
  };

  const handleRadio = event => {
    const { value } = event.target;
    setRadio(value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <ContainerLabel className="location">
        Location
        <div className="input-location-container">
          <Input
            className="input-location"
            type="text"
            name="location"
            placeholder="City"
            value={location}
            onChange={handleLocation}
          />
          <svg
            className="input-location-icon"
            width="18"
            height="20"
            fill="white"
          >
            <use href={`${sprite}#icon-location`} />
          </svg>
        </div>
      </ContainerLabel>
      <ContainerLabel>
        Filters
        <Text className="text-first">Vehicle equipment</Text>
        <ContainerCheckBox>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="checkBox"
              checked={checkBox.ac}
              value="ac"
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="#fff" stroke="#000">
                <use href={`${sprite}#icon-airconditioner`} />
              </svg>
              <p className="checkmark-text">AC</p>
            </span>
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="checkBox"
              checked={checkBox.automatic}
              value="automatic"
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              <p className="checkmark-text">Automatic</p>
            </span>
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="checkBox"
              value="kitchen"
              checked={checkBox.kitchen}
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              <p className="checkmark-text">Kitchen</p>
            </span>
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="checkBox"
              checked={checkBox.tv}
              value="tv"
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-tele`} />
              </svg>
              <p className="checkmark-text">TV</p>
            </span>
          </label>
          <label className="checkbox-label">
            <input
              className="checkbox-input"
              type="checkbox"
              name="checkBox"
              value="shower"
              checked={checkBox.shower}
              onChange={handleCheckbox}
            />
            <span className="checkmark">
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-shower`} />
              </svg>
              <p className="checkmark-text">Shower/WC</p>
            </span>
          </label>
        </ContainerCheckBox>
        <Text>Vehicle type</Text>
        <ContainerRadio>
          <label className="radio-label">
            <input
              className="radio-input"
              onChange={handleRadio}
              type="radio"
              value="van"
              name="radio"
            />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-camperventana`} />
              </svg>
              <p className="radiomark-text">Van</p>
            </span>
          </label>
          <label className="radio-label">
            <input
              className="radio-input"
              type="radio"
              name="radio"
              value="fullyIntegrated"
              onChange={handleRadio}
            />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-campersinventana`} />
              </svg>
              <p className="radiomark-text">Fully Integrated</p>
            </span>
          </label>
          <label className="radio-label">
            <input
              className="radio-input"
              type="radio"
              name="radio"
              value="alcove"
              onChange={handleRadio}
            />
            <span className="radiomark">
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-campertodo`} />
              </svg>
              <p className="radiomark-text">Alcove</p>
            </span>
          </label>
        </ContainerRadio>
      </ContainerLabel>
      <Button className="button" type="submit">
        Search
      </Button>
    </Form>
  );
};
