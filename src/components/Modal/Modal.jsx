import { useState } from 'react';

import sprite from '../../assets/svg/iconsSprite.svg';
import { Reviews } from 'components/Reviews/Reviews';
import { Features } from 'components/Features/Features';
import { Form } from '../Form/Form';

export const Modal = ({ adverts, close }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };

  return (
    <div width="" height="">
      <button onClick={close}>
        <svg width="32" height="32">
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
        <h1>{adverts.name}</h1>
      </button>
      <div>
        <div>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-star`} />
          </svg>
          {adverts.rating} ({adverts.reviews.length} Reviews)
        </div>
        <div>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-location`} />
          </svg>
          {adverts.location}
        </div>
        <p>€{adverts.price.toFixed(2)}</p>
      </div>
      <ul>
        {adverts.gallery.map((e, index) => (
          <li key={index}>
            <img width="400" height="300" src={e} alt={adverts.name} />
          </li>
        ))}
      </ul>
      <p>{adverts.description}</p>
      <div>
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
      </div>

      <div>
        {activeTab === 1 && <Features adverts={adverts} />}
        {activeTab === 2 && <Reviews reviews={adverts.reviews} />}
        {activeTab !== 0 && <Form />}
      </div>
    </div>
  );
};
