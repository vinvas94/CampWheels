import sprite from '../../../assets/svg/iconsSprite.svg';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { startFilter } from '../../../redux/filterSlice';

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
    <form onSubmit={handleSubmit}>
      <label>
        Location
        <div>
          <input
            type="text"
            name="location"
            placeholder="City"
            value={location}
            onChange={handleLocation}
          />
          <svg width="18" height="20">
            <use href={`${sprite}#icon-location`} />
          </svg>
        </div>
      </label>
      <label>
        Filters
        <p>Vehicle equipment</p>
        <div>
          <label>
            <input
              type="checkbox"
              name="checkBox"
              checked={checkBox.ac}
              value="ac"
              onChange={handleCheckbox}
            />
            <span>
              <p>AC</p>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkBox"
              checked={checkBox.automatic}
              value="automatic"
              onChange={handleCheckbox}
            />
            <span>
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-automatic`} />
              </svg>
              <p>Automatic</p>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkBox"
              value="kitchen"
              checked={checkBox.kitchen}
              onChange={handleCheckbox}
            />
            <span>
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-kitchen`} />
              </svg>
              <p>Kitchen</p>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkBox"
              checked={checkBox.tv}
              value="tv"
              onChange={handleCheckbox}
            />
            <span>
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-tele`} />
              </svg>
              <p>TV</p>
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              name="checkBox"
              value="shower"
              checked={checkBox.shower}
              onChange={handleCheckbox}
            />
            <span>
              <svg width="32" height="32" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-shower`} />
              </svg>
              <p>Shower/WC</p>
            </span>
          </label>
        </div>
        <p>Vehicle type</p>
        <div>
          <label>
            <input
              onChange={handleRadio}
              type="radio"
              value="van"
              name="radio"
            />
            <span>
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-camperventana`} />
              </svg>
              <p>Van</p>
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="fullyIntegrated"
              onChange={handleRadio}
            />
            <span>
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-campersinventana`} />
              </svg>
              <p>Fully Integrated</p>
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="radio"
              value="alcove"
              onChange={handleRadio}
            />
            <span>
              <svg width="40" height="28" fill="none" stroke="#101828">
                <use href={`${sprite}#icon-campertodo`} />
              </svg>
              <p>Alcove</p>
            </span>
          </label>
        </div>
      </label>
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};
